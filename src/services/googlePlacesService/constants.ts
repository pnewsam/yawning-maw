export const PLACE_ID = "ChIJqbE_KchV2YARTO4Oa7cLQQU";
export const SAN_DIEGO_LAT_LON = "32.715736,-117.161087";
export const SEARCH_RADIUS_IN_METERS = "50000";

/**
 * Basic Fields are available for free
 * https://developers.google.com/maps/documentation/places/web-service/usage-and-billing#basic-data
 */
export const BASIC_FIELDS = [
  "name", // ie. "The Metropolitan Museum of Art"
  "address_components", // ie. [{ long_name: "1000", short_name: "1000", types: ["street_number"] }, ...]
  "place_id", // ie. "ChIJqbE_KchV2YARTO4Oa7cLQQU"
  "formatted_address", // ie. "1000 5th Ave, New York, NY 10028, United States"
  "geometry", // ie. { location: { lat: 40.7794367, lng: -73.963244 } }
  "type", // ie. "museum"
];

/**
 * Contact Fields are available for 3.00 per 1000 requests
 * https://developers.google.com/maps/documentation/places/web-service/usage-and-billing#contact-data
 */
export const CONTACT_FIELDS = [
  "formatted_phone_number", // ie. "(212) 535-7710"
  "website", // ie. "https://www.metmuseum.org/"
];

/**
 * Atmosphere Fields are available for 5.00 per 1000 requests
 * https://developers.google.com/maps/documentation/places/web-service/usage-and-billing#atmosphere-data
 */
export const ATMOSPHERE_FIELDS = [
  "rating", // ie. 4.6
  /**
   * ie.
   * {
   *   en: "",
   *   overview: "The Metropolitan Museum of Art is the largest art museum in the United States with among the most significant art collections."
   * }
   */
  "editorial_summary",
  "price_level", // ie. 2
  "user_ratings_total", // ie. 129
];

export const FIELDS = [
  ...BASIC_FIELDS,
  ...CONTACT_FIELDS,
  ...ATMOSPHERE_FIELDS,
];
