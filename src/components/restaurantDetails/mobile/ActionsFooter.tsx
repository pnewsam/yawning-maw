import { ExternalLink } from "lucide-react";
import { Restaurant } from "@/models";

type Props = {
  restaurant: Restaurant;
};

export const ActionsFooter = ({ restaurant }: Props) => {
  return (
    <div className="w-full h-[80px] fixed bottom-0 left-0 right-0 sm:hidden border-t border-gray-300">
      <div className="flex flex-col items-center justify-center w-full h-full bg-white">
        <a
          href={restaurant.googleUrl}
          className="text-sm text-stone-700 text-end inline-flex justify-end gap-2 items-center hover:underline"
        >
          <span>View on Google Maps</span>
          <ExternalLink className="w-3 h-3"></ExternalLink>
        </a>
      </div>
    </div>
  );
};
