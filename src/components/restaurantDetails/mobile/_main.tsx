import Image from "next/image";
import { Banknote, LeafyGreen, Store, Vegan, WheatOff } from "lucide-react";
import { Restaurant } from "@/models";
import { ActionsFooter } from "./ActionsFooter";
import { Descriptor } from "../desktop/Descriptor";
import interior from "@/assets/images/interior.jpg";

type Props = {
  restaurant: Restaurant;
};

export const Mobile = ({ restaurant }: Props) => {
  const { name, description, address, punchline, genres } = restaurant;
  return (
    <div className="flex flex-col gap-4">
      <Image
        className="w-full"
        width={640}
        height={480}
        alt=""
        src={interior.src}
      />
      <div className="px-4 pb-[100px]">
        <h1 className="text-3xl text-stone-700 font-semibold font-display mb-1">
          {name}
        </h1>
        <h2 className="text-2xl mb-4 font-semibold font-display leading-none text-stone-700">
          {punchline}
        </h2>

        <hr className="mb-4 mr-2 border-stone-700 border-2" />

        <div className="mb-4 flex gap-x-4 gap-y-2 justify-start flex-wrap">
          <Descriptor text="Hole in the Wall" Icon={Store} />
          <Descriptor text="Price: $$$" Icon={Banknote} />
          <Descriptor
            Icon={WheatOff}
            text="Gluten-free Friendly"
            tooltipContent={`This restaurant's menu clearly labels its gluten-free options`}
          />
          <Descriptor
            Icon={Vegan}
            text="Vegan Friendly"
            tooltipContent={`This restaurant's menu clearly labels its vegan options`}
          />
          <Descriptor
            Icon={LeafyGreen}
            text="Vegetarian Friendly"
            tooltipContent={`This restaurant's menu clearly labels its vegetarian options`}
          />
        </div>

        <div className="mb-2">
          {[1, 2].map((i) => (
            <p key={i} className="mb-2 text-base leading-6 text-stone-700">
              {description}
            </p>
          ))}
        </div>
      </div>
      <ActionsFooter restaurant={restaurant} />
    </div>
  );
};
