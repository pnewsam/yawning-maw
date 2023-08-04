"use client";

import { RestaurantCard } from "@/components/restaurantIndex/RestaurantCard";
import { GridLayout } from "@/components/restaurantIndex/GridLayout";
import { Restaurant } from "@/models";

type Props = {
  restaurants: Restaurant[];
};

export const RestaurantIndex = ({ restaurants }: Props) => {
  return (
    <main className="CONTENT py-8">
      <GridLayout>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </GridLayout>
    </main>
  );
};
