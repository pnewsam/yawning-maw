import { Restaurant } from "@/models";
import interior from "@/assets/images/interior.jpg";
import { Actions, Images, Header, Article } from "./";

type Props = {
  restaurant: Restaurant;
};

export const Desktop = ({ restaurant }: Props) => {
  return (
    <div>
      <Header restaurant={restaurant} />
      <Images
        srcs={[interior.src, interior.src, interior.src, interior.src]}
        restaurant={restaurant}
      />
      <div className="relative grid grid-cols-[2fr_1fr] gap-8 mt-8 mb-4">
        <Article restaurant={restaurant} />
        <div>
          <Actions restaurant={restaurant} />
        </div>
      </div>
    </div>
  );
};
