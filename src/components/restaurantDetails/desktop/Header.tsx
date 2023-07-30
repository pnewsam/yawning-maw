import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Restaurant } from "@/models";
import { RecognitionBadge } from "./RecognitionBadge";

type Props = {
  restaurant: Restaurant;
};

export const Header = ({ restaurant }: Props) => {
  const { name, neighborhood, address } = restaurant;
  return (
    <div className="flex justify-between items-end mt-4 mb-4">
      <div className="">
        <h1 className="text-4xl text-stone-600 font-semibold font-display mb-1">
          {name}
        </h1>
        <h2 className="text-sm text-stone-500">
          {neighborhood} - {address}
        </h2>
      </div>
      <div>
        <div className="inline-flex gap-2 mb-1 justify-end w-full">
          <RecognitionBadge variant="superlative" />
        </div>
        <div className="flex gap-2 items-center justify-end">
          {/* <Button variant="ghost" size="sm" className="-my-1">
            <Heart className="w-3 h-3 mr-1" />
            <span className="text-xs text-stone-700">Add to favorites</span>
          </Button> */}
          <p className="mt-1 text-sm text-stone-500 text-end">
            Favorited by 10,230 users.
          </p>
        </div>
      </div>
    </div>
  );
};
