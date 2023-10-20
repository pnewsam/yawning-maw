"use client";

import { RestaurantListCard } from "@/components/restaurantIndex/RestaurantListCard";
import { ListLayout } from "@/components/restaurantIndex/ListLayout";
import { Restaurant } from "@/models";

type Props = {
  restaurants: Restaurant[];
};

export const RestaurantIndex = ({ restaurants }: Props) => {
  return (
    <main className="CONTENT py-8">
      <ListLayout>
        {restaurants.map((restaurant, idx) => (
          <RestaurantListCard
            key={restaurant.id}
            restaurant={restaurant}
            rank={idx + 1}
            first={idx === 0}
            last={idx === restaurants.length - 1}
          />
        ))}
      </ListLayout>
    </main>
  );
};
