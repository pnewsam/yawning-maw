"use client";

import { RestaurantCard } from "@/components/restaurantIndex/RestaurantCard";
import { GridLayout } from "@/components/restaurantIndex/GridLayout";

export const RestaurantIndex = () => {
  return (
    <main className="CONTENT py-8">
      <GridLayout>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n, i) => (
          <RestaurantCard key={n} />
        ))}
      </GridLayout>
    </main>
  );
};
