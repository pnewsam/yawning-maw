import { RestaurantDetails } from "@/components/restaurantDetails/_main";
import { RestaurantTransformer, mockRestaurant } from "@/models";

export default function RestaurantDetailsPage() {
  const r = RestaurantTransformer(mockRestaurant);
  return <RestaurantDetails restaurant={r} />;
}
