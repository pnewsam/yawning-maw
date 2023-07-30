import Image from "next/image";
import { Restaurant, mockRestaurant } from "@/models";
import interior from "@/assets/images/interior.jpg";
import { RestaurantTransformer } from "@/models/restaurants/transformers";
import {
  PhotoLinkButton,
  Name,
  Neighborhood,
  Genres,
} from "./RestaurantCard.sub";

type Props = {
  restaurant?: Restaurant;
};

export const RestaurantCard = ({ restaurant = mockRestaurant }: Props) => {
  const { id } = restaurant;
  const { name, posterUrl, neighborhood, genres } =
    RestaurantTransformer(restaurant);
  return (
    <div>
      <PhotoLinkButton href={`/restaurants/${restaurant.slug}`}>
        <Image
          src={interior.src}
          alt={name}
          className="pointer-events-none object-cover group-hover:opacity-75"
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
