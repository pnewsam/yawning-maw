import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const createRouteHandlerSupabaseClient = cache(() => {
  const cookieStore = cookies();
  return createRouteHandlerClient({ cookies: () => cookieStore });
});

export async function GET() {
  const supabase = createRouteHandlerSupabaseClient();

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
  const supabase = createRouteHandlerSupabaseClient();

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
