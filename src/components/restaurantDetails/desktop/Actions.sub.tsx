import clsx from "clsx";
import {
  ExternalLink,
  Copy,
  Clock,
  Map,
  Phone,
  Globe,
  ChevronsUpDown,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";
import { cn } from "@/lib/utils";

const Row = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex items-start justify-between mb-2 gap-2", className)}>
    {children}
  </div>
);

export const Address = ({
  address,
  googleUrl,
}: {
  address: string;
  googleUrl: string;
}) => (
  <Row>
    <Map className="w-4 h-4 flex-shrink-0 mt-3 text-stone-700" />
    <div className="inline-flex justify-end flex-col items-stretch">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger className="mb-1">
            <Button
              variant="ghost"
              size="sm"
              className="inline-flex items-center gap-2 -mr-3 py-0"
            >
              <span className="text-sm text-end">{address}</span>
              <Copy className="w-3 h-3" />
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-stone-900 text-xs text-white rounded-lg inline-flex gap-2 items-center px-2 py-1">
            <p>Copy full address</p>
            <Copy className="w-3 h-3 text-white" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <a
        href={googleUrl}
        className="text-xs text-stone-400 text-end inline-flex justify-end gap-2 items-center hover:underline"
      >
        <span>View on Google Maps</span>
        <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </Row>
);

export const Hours = () => (
  <Row>
    <Clock className="w-4 h-4 mt-3 text-stone-700" />
    <Collapsible className="inline-block">
      <CollapsibleTrigger className="flex items-center justify-end w-full">
        <Button variant="ghost" size="sm" className="py-1 pr-2 pl-2 -mr-2">
          <span className="text-sm text-green-500 font-normal">
            Open · Closes 9PM
          </span>
          <ChevronsUpDown className="ml-2 w-4 h-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col gap-2 mt-2">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day, i) => (
            <div
              key={day}
              className={clsx(
                "flex items-center justify-between gap-4",
                i === 1 ? "font-semibold" : ""
              )}
            >
              <span className="text-xs">{day}</span>
              <span className="text-xs">9AM - 9PM</span>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  </Row>
);

export const Website = ({ url }: { url: string }) => (
  <Row>
    <Globe className="w-4 h-4 mt-[1px] text-stone-700" />
    <a href={url} className="text-sm hover:underline max-w-[220px] truncate">
      {url}
    </a>
  </Row>
);

export const PhoneNumber = ({ phoneNumber }: { phoneNumber: string }) => (
  <Row>
    <Phone className="w-4 h-4 mt-[1px] text-stone-700" />
    <a href={`tel:${phoneNumber}`} className="text-sm hover:underline">
      {phoneNumber}
    </a>
  </Row>
);
