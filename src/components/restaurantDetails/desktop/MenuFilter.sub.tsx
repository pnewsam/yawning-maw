import { LeafyGreen, Vegan, WheatOff } from "lucide-react";
import { SelectItem } from "../../ui/select";

export const VegetarianOption = () => (
  <SelectItem value="vegetarian">
    <div className="inline-flex items-center gap-2">
      <LeafyGreen className="w-3 h-3 text-stone-700" />
      <span>Vegetarian</span>
    </div>
  </SelectItem>
);

export const VeganOption = () => (
  <SelectItem value="vegan">
    <div className="inline-flex items-center gap-2">
      <Vegan className="w-3 h-3 text-stone-700" />
      <span>Vegan</span>
    </div>
  </SelectItem>
);

export const GlutenFreeOption = () => (
  <SelectItem value="gluten-free">
    <div className="inline-flex items-center gap-2">
      <WheatOff className="w-3 h-3 text-stone-700" />
      <span>Gluten-free</span>
    </div>
  </SelectItem>
);
