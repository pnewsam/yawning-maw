import { NextRequest, NextResponse } from "next/server";
import { getPlaceAutoComplete } from "@/services/googlePlacesService";
import sampleAutocompleteResponse from "@/mocks/googlePlacesAutocompleteResponse.json";

type Data = {
  status: string;
  predictions: any[];
};

export async function GET(req: NextRequest, res: NextResponse<Data>) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  console.log(query, "query");
  // const autocomplete = await getPlaceAutoComplete(input as string);
  return NextResponse.json(sampleAutocompleteResponse, { status: 200 });
}
