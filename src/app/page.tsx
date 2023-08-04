import { RestaurantIndex } from "@/components/restaurantIndex/_main";
import { RestaurantTransformer } from "@/models";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: restaurantRecords = [] } = await supabase
    .from("restaurants")
    .select();

  const restaurants = restaurantRecords?.map(RestaurantTransformer) || [];

  return <RestaurantIndex restaurants={restaurants} />;
}
