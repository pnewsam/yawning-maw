import { Card, CardContent } from "@/components/ui";
import { Hours, Website, PhoneNumber, Address } from "./Actions.sub";
import { Restaurant } from "@/models";

type Props = {
  restaurant: Restaurant;
};

export const Actions = ({ restaurant }: Props) => {
  const { website, phoneNumber, googleUrl, address } = restaurant;
  const firstLineOfAddress = address.split(",")[0];

  return (
    <Card className="shadow-sm rounded-sm sticky top-8">
      <CardContent className="py-4 px-5">
        <div className="flex flex-col gap-2">
          <Address address={firstLineOfAddress} googleUrl={googleUrl} />
          <Hours />
          <PhoneNumber phoneNumber={phoneNumber} />
          <Website url={website} />
        </div>
      </CardContent>
    </Card>
  );
};
