import Image from "next/image";
import { Vegan } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuItem, mockMenuItem } from "./MenuImages.constants";

type Props = {
  menuItem?: MenuItem;
};

export const MenuImage = ({ menuItem = mockMenuItem }: Props) => {
  const { src, name, price, description } = menuItem;
  return (
    <figure className="w-full h-min">
      <Image
        src={src}
        className="rounded w-full"
        alt="My Image"
        height={180}
        width={240}
      />
      <figcaption className="mt-2">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center">
            <p className="text-sm font-semibold text-stone-700">{name}</p>
            <Popover>
              <PopoverTrigger>
                <Vegan className="w-4 h-4 ml-2 text-stone-400" />
              </PopoverTrigger>
              <PopoverContent className="max-w-min py-1 px-2 bg-stone-800">
                <span className="text-xs text-white">Vegan</span>
              </PopoverContent>
            </Popover>
          </div>
          <p className="text-sm text-stone-700 font-semibold">${price}</p>
        </div>
        <p className="text-xs text-stone-500 leading-relaxed mt-1">
          {description}
        </p>
      </figcaption>
    </figure>
  );
};
