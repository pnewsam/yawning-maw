import { Restaurant } from "@/models";
import { Call, ViewOnGoogle, CopyAddress } from "./ActionsFooter.sub";

type Props = {
  restaurant: Restaurant;
};

export const ActionsFooter = ({ restaurant }: Props) => {
  const { address, googleUrl, phoneNumber } = restaurant;
  const firstLineOfAddress = address.split(",")[0];

  return (
    <div className="w-full h-[80px] fixed bottom-0 left-0 right-0 border-t-2 bg-white border-gray-800 shadow-lg px-4">
      <div className="flex items-center justify-center gap-4 w-full h-full">
        <Call phoneNumber={phoneNumber} />
        <ViewOnGoogle googleUrl={googleUrl} />
        <CopyAddress address={firstLineOfAddress} />
      </div>
    </div>
  );
};
