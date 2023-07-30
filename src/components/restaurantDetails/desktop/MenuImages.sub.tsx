import Image from "next/image";
import { Vegan } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import interior from "@/assets/images/interior.jpg";

export const MenuImage = () => (
  <figure className="w-[240px] h-min">
    <Image
      src={interior.src}
      className="rounded"
      alt="My Image"
      height={180}
      width={240}
    />
    <figcaption className="mt-2">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center">
          <p className="text-sm font-semibold text-stone-700">
            Hot and Fiery Chicken
          </p>
          <Popover>
            <PopoverTrigger>
              <Vegan className="w-4 h-4 ml-2 text-stone-400" />
            </PopoverTrigger>
            <PopoverContent className="max-w-min py-1 px-2 bg-stone-800">
              <span className="text-xs text-white">Vegan</span>
            </PopoverContent>
          </Popover>
        </div>
        <p className="text-sm text-stone-700 font-semibold">$18</p>
      </div>
      <p className="text-xs text-stone-500 leading-relaxed mt-1">
        Signature fried chicken wings with a sticky spicy peri peri sauce.
      </p>
    </figcaption>
  </figure>
);
