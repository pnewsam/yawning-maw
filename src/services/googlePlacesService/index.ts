import {
  FIELDS,
  SAN_DIEGO_LAT_LON,
  SEARCH_RADIUS_IN_METERS,
} from "./constants";

const googleApiKey = process.env.GOOGLE_API_KEY || "";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/details/json";

const constructParams = (place_id: string) => {
  const params = new URLSearchParams();
  params.append("key", googleApiKey);
  params.append("place_id", place_id);
  params.append("fields", FIELDS.join(","));
  return params;
};

export const getPlaceDetails = async (place_id: string) => {
  const params = constructParams(place_id);
  const uri = `${BASE_URL}?${params.toString()}`;
  const response = await fetch(uri);
  const data = await response.json();
  return data;
};

export const getPlaceAutoComplete = async (input: string) => {
  const params = new URLSearchParams();
  params.append("key", googleApiKey);
  params.append("input", input);
  params.append("location", SAN_DIEGO_LAT_LON);
  params.append("radius", SEARCH_RADIUS_IN_METERS);
  params.append("types", "restaurant");
  const uri = `https://maps.googleapis.com/maps/api/place/autocomplete/json?${params.toString()}`;
  const response = await fetch(uri);
  const data = await response.json();
  return data;
};
