import Image from "next/image";
import { Restaurant } from "@/models";
import interior from "@/assets/images/interior.jpg";
import {
  PhotoLinkButton,
  Name,
  Neighborhood,
  Genres,
} from "./RestaurantCard.sub";

type Props = {
  restaurant: Restaurant;
};

export const RestaurantCard = ({ restaurant }: Props) => {
  const { name, neighborhood, genres } = restaurant;
  return (
    <div>
      <PhotoLinkButton href={`/restaurants/${restaurant.slug}`}>
        <Image
          src={interior.src}
          alt={name}
          className="pointer-events-none object-cover group-hover:opacity-75 w-full"
          width={300}
          height={200}
        />
      </PhotoLinkButton>
      <Name>{name}</Name>
      <Neighborhood>{neighborhood}</Neighborhood>
      <Genres>{genres.join(" · ")}</Genres>
    </div>
  );
};
