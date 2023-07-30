import { XCircle } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  Separator,
} from "@/components/ui";
import {
  VegetarianOption,
  VeganOption,
  GlutenFreeOption,
} from "./MenuFilter.sub";

export function MenuFilter() {
  return (
    <div className="inline-flex gap-4 items-center">
      <span className="text-sm text-stone-700">Filter menu items by:</span>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue
            placeholder={
              <div className="inline-flex justify-center items-center gap-2">
                <XCircle className="w-3 h-3 text-stone-700" />
                <span>None</span>
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <VegetarianOption />
          <VeganOption />
          <GlutenFreeOption />
          <Separator />
          <SelectItem value={"none"}>
            <div className="inline-flex items-center gap-2">
              <XCircle className="w-3 h-3 text-stone-700" />
              <span className="font-normal text-sm">None</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
