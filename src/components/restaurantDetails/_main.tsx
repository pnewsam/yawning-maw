"use client";

import { Restaurant } from "@/models";
import { Desktop } from "./desktop/_main";
import { Mobile } from "./mobile/_main";

type Props = { restaurant: Restaurant };

export const RestaurantDetails = ({ restaurant }: Props) => {
  return (
    <div className="CONTENT pt-6 pb-20">
      <div className="hidden md:block">
        <Desktop restaurant={restaurant} />
      </div>
      <div className="md:hidden">
        <Mobile restaurant={restaurant} />
      </div>
    </div>
  );
};
