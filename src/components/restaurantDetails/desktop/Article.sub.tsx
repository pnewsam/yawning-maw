import { Banknote, LeafyGreen, Store, WheatOff, Vegan } from "lucide-react";
import { Badge } from "@/components/ui";
import { Descriptor } from "./";

export const Punchline = ({ punchline }: { punchline: string }) => (
  <h2 className="text-3xl font-semibold font-display leading-none text-stone-700">
    {punchline}
  </h2>
);

export const Genres = ({ genres }: { genres: string[] }) =>
  genres.map((genre) => (
    <Badge key={genre} variant="secondary">
      {genre}
    </Badge>
  ));

export const Descriptors = ({ descriptors }: { descriptors: string[] }) => (
  <>
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
  </>
);
