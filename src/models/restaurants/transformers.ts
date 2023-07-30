import { Restaurant } from "./types";

export const RestaurantTransformer = (restaurant: Restaurant) => ({
  id: restaurant.id,
  name: restaurant.name,
  slug: restaurant.slug,
  neighborhood: restaurant.google.address_components.find((component) =>
    component.types.includes("neighborhood")
  )?.long_name,
  address: restaurant.google.formatted_address,
  genres: restaurant.genres,
  posterUrl: "",
});
