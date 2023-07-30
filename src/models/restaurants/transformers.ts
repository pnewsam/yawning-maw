import { mockRestaurant } from ".";

type RestaurantRecord = typeof mockRestaurant;

export const RestaurantTransformer = (restaurant: RestaurantRecord) => ({
  id: restaurant.id,
  name: restaurant.name,
  slug: restaurant.slug,
  neighborhood: restaurant.google.address_components.find((component) =>
    component.types.includes("neighborhood")
  )?.long_name,
  address: restaurant.google.formatted_address,
  genres: restaurant.genres,
  googleUrl: restaurant.google.url,
  posterUrl: "",
  description:
    "Discover an upscale, casual New American restaurant where classic flavors intertwine with a modern twist. Immerse yourself in an elegant ambiance while savoring a diverse menu. Indulge in an extensive wine selection, expertly curated for impeccable food pairings. Experience culinary excellence at its finest.",
  writeup: "",
  punchline: "A ramen-shop chain out of Japan with mouthwatering broth",
  phoneNumber: restaurant.google.formatted_phone_number || "(858) 123-4567",
  website: restaurant.google.website,
});

export type Restaurant = ReturnType<typeof RestaurantTransformer>;
