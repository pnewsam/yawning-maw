import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany();
    return NextResponse.json(restaurants);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error getting restaurants" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();
    const restaurant = await prisma.restaurant.create({
      data: {
        name,
      },
    });
    return NextResponse.json(restaurant, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error creating restaurant" },
      { status: 500 }
    );
  }
}
