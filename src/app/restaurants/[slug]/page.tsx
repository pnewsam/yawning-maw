import { RestaurantDetails } from "@/components/restaurantDetails/_main";
import { mockRestaurantRecord, RestaurantTransformer } from "@/models";

export default function RestaurantDetailsPage() {
  const r = RestaurantTransformer(mockRestaurantRecord);
  return <RestaurantDetails restaurant={r} />;
}
