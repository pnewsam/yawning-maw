import { ArrowUpRightFromCircle } from "lucide-react";
import { MenuFilter } from "./MenuFilter";
import { Button } from "@/components/ui";
import { MenuImage } from "./MenuImages.sub";

export const MenuImages = () => {
  return (
    <div>
      <div className="mt-8 mb-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-4">
          <h5 className="font-semibold">Preview the Menu</h5>
          <Button variant="link" size="sm">
            <div className="flex items-center gap-2">
              <span className="text-sm">View full menu</span>
              <ArrowUpRightFromCircle className="w-4 h-4" />
            </div>
          </Button>
        </div>

        <MenuFilter />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <MenuImage />
        <MenuImage />
        <MenuImage />
        <MenuImage />
        <MenuImage />
        <MenuImage />
      </div>
    </div>
  );
};
