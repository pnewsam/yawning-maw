import { Loading as LoadingDesktop } from "@/components/restaurantDetails/desktop/_loading";
import { Loading as LoadingMobile } from "@/components/restaurantDetails/mobile/_loading";

export default function Loading() {
  return (
    <>
      <div className="sm:hidden block">
        <LoadingMobile />
      </div>
      <div className="hidden sm:block">
        <LoadingDesktop />
      </div>
    </>
  );
}
