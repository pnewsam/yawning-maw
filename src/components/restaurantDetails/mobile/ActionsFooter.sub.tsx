import { Map, Phone, Copy } from "lucide-react";

export const ViewOnGoogle = ({ googleUrl }: { googleUrl: string }) => (
  <div className="inline-flex items-center gap-2">
    <Map className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700" />
    <a className="font-semibold text-sm sm:text-base" href={googleUrl}>
      View on Google
    </a>
  </div>
);

export const Call = ({ phoneNumber }: { phoneNumber: string }) => (
  <div className="inline-flex items-center gap-2">
    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700" />
    <a
      className="font-semibold text-sm sm:text-base"
      href={`tel:${phoneNumber}`}
    >
      Call
    </a>
  </div>
);

export const CopyAddress = ({ address }: { address: string }) => (
  <div className="inline-flex items-center gap-2">
    <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-stone-700" />
    <span className="font-semibold text-sm sm:text-base">Copy address</span>
  </div>
);
