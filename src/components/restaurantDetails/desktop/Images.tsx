import { LayoutGrid } from "lucide-react";
import interior from "@/assets/images/interior.jpg";
import { AddImageBox } from "./AddImageBox";
import { Button } from "../../ui/button";
import { Restaurant } from "@/models";
import { GridItem, GridImage } from "./Images.sub";

type Props = {
  srcs?: string[];
  restaurant: Restaurant;
};

export const Images = ({
  restaurant,
  srcs = [interior.src, interior.src, interior.src, interior.src],
}: Props) => {
  const hasMoreImages = true;
  return (
    <div className="grid grid-cols-4 grid-rows-[250px_250px] gap-3 relative h-[512px]">
      {hasMoreImages && (
        <Button
          variant="outline"
          size="sm"
          className="absolute bottom-3 right-3 border border-stone-200"
        >
          <LayoutGrid className="w-3 h-3 mr-2" />
          <span className="text-sm text-stone-700">See more photos</span>
        </Button>
      )}
      <GridItem className="col-span-2 row-span-2">
        <GridImage className="rounded-tl-lg rounded-bl-lg" src={srcs[0]} />
      </GridItem>
      <GridItem>
        <GridImage src={srcs[1]} />
      </GridItem>
      <GridItem>
        <GridImage className="rounded-tr-lg" src={srcs[2]} />
      </GridItem>
      <GridItem>
        <GridImage src={srcs[3]} />
      </GridItem>
      {/* <GridItem>
        <GridImage className="rounded-br-lg" src={srcs[3]} />
      </GridItem> */}
      <AddImageBox restaurant={restaurant} />
      {/* <Image
        className="rounded-br-lg"
        src={srcs[3].src}
        alt="Image"
        height={320}
        width={480}
      /> */}
    </div>
  );
};
