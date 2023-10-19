export type PlaceDetailsResponse = {
  html_attributions: string[];
  result: {
    name: string;
    formatted_address: string;
    formatted_phone_number: string;
    rating: number;
    address_components: {
      long_name: string;
      short_name: string;
      types: string[];
    }[];
    place_id: string;
    price_level: number;
    url: string;
    website: string;
    editorial_summary: {
      language: string;
      overview: string;
    };
  };
  status: string;
};

export type PlaceDetails = PlaceDetailsResponse["result"];
