import { MenuFilter } from "./MenuFilter";
import { MenuImage } from "./MenuImages.sub";

export const MenuImages = () => {
  return (
    <div>
      <div className="mt-8 mb-4 flex items-center justify-between">
        <div className="inline-flex items-center gap-4">
          <h5 className="font-semibold">Preview the Menu</h5>
        </div>

        <MenuFilter />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
