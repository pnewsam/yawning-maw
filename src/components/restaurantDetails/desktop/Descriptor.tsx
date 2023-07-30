import { LucideIcon } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  Icon: LucideIcon;
  text: string;
  tooltipContent?: string;
};

const Base = ({ text, Icon }: Omit<Props, "tooltipContent">) => (
  <div className="inline-flex gap-1 items-center">
    <Icon className="w-3 h-3" />
    <span className="text-stone-700 text-xs">{text}</span>
  </div>
);

const WithTooltip = ({ text, tooltipContent, Icon }: Props) => (
  <div className="inline-flex gap-1 items-center">
    <Icon className="w-3 h-3" />
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="text-stone-700 text-xs underline underline-offset-4 decoration-dashed">
          {text}
        </TooltipTrigger>
        <TooltipContent className="bg-stone-900 text-white rounded text-xs">
          {tooltipContent}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
);

export const Descriptor = ({ tooltipContent, ...props }: Props) =>
  tooltipContent ? (
    <WithTooltip tooltipContent={tooltipContent} {...props} />
  ) : (
    <Base {...props} />
  );
