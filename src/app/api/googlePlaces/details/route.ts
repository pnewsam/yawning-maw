import { getPlaceDetails } from "@/services/googlePlacesService";
import { NextRequest, NextResponse } from "next/server";
import sampleDetailsResponse from "@/mocks/googlePlacesDetailsResponse.json";

type Data = {
  status: string;
  result: any;
};

export async function GET(req: NextRequest, res: NextResponse<Data>) {
  const { searchParams } = new URL(req.url);
  const placeId = searchParams.get("placeId");
  console.log(placeId, "placeId");
  // const placeDetails = await getPlaceDetails(placeId as string);
  return NextResponse.json(sampleDetailsResponse, { status: 200 });
}
