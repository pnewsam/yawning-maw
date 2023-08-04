import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });

  const { data: restaurants = [], error } = await supabase
    .from("restaurants")
    .select();
  if (restaurants) {
    return NextResponse.json(restaurants);
  } else {
    console.error(error);
    return NextResponse.json(
      { error: "Error getting restaurants" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const supabase = createRouteHandlerClient({ cookies });

  const { name } = await request.json();
  const { data: restaurant, error } = await supabase
    .from("restaurants")
    .insert({ name })
    .select();

  if (restaurant) {
    return NextResponse.json(restaurant, { status: 201 });
  } else {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating restaurant" },
      { status: 500 }
    );
  }
}
