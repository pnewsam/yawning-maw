import { ExternalLink } from "lucide-react";
import { Restaurant } from "@/models";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";

type Props = {
  restaurant: Restaurant;
  first: boolean;
  last: boolean;
  rank: number;
};

export const RestaurantListCard = ({
  restaurant,
  first,
  last,
  rank,
}: Props) => {
  const { name } = restaurant;
  return (
    <div
      className={cn(
        "w-full bg-white border border-stone-200 shadow-lg py-4 px-6",
        first && "rounded-t-xl",
        !first && "border-t-0",
        last && "rounded-b-xl"
      )}
    >
      <div className="flex items-center gap-7 space-between">
        <span className="font-bold font-display text-3xl text-stone-700">
          {rank}
        </span>
        <div className="flex flex-grow items-center gap-2">
          <span className="text-xl font-display font-semibold text-stone-700 whitespace-nowrap">
            {name}
          </span>
          <span className="text-xl font-light"> - </span>
          <p className="text-stone-500 text-sm font-light w-full">
            The Best Tacos You&apos;ve Never Had
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a href="/">
            <Button
              className="text-xs gap-2 py-[2px] h-7"
              size="sm"
              variant="outline"
            >
              OpenTable
              <ExternalLink className="w-3 h-3" />
            </Button>
          </a>
          <a href="/">
            <Button
              className="text-xs gap-2 h-7 border-red-300 hover:bg-red-100/50 text-red-400 hover:text-red-400 py-[2px]"
              variant="outline"
              size="sm"
            >
              Yelp
              <ExternalLink className="w-3 h-3" />
            </Button>
          </a>
          <a href="/">
            <Button
              className="text-xs gap-2 h-7 border-blue-300 hover:bg-blue-100/50 text-blue-400 hover:text-blue-400 py-[2px]"
              variant="outline"
              size="sm"
            >
              Google Maps
              <ExternalLink className="w-3 h-3" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
