import clsx from "clsx";
import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import {
  Input,
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui";
import { Restaurant } from "@/models";
import { useUploadImage } from "@/lib/hooks/useUploadImage";

type Props = {
  className?: string;
  restaurant: Restaurant;
};

export const AddImageBox = ({ className, restaurant }: Props) => {
  const { file, upload, onChangeFile, loading } = useUploadImage();

  const [open, setOpen] = useState(false);

  const onClick = () => {
    if (!file) return;
    upload(file);
  };

  return (
    <div
      className={clsx(
        "w-full h-auto bg-stone-100 rounded-br-lg border-stone-200 border",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button variant="ghost">
              <ImagePlus className="w-6 h-6 mr-2" />
              <span>Submit a photo</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submit a photo</DialogTitle>
            </DialogHeader>
            <p className="text-stone-600 text-sm">
              Submit a photo for{" "}
              <b className="text-stone-700">{restaurant.name}</b>. If we like
              it, we&apos;ll feature it on this page.
            </p>
            <Input onChange={onChangeFile} className="my-3" type="file" />

            <DialogFooter className="mt-4">
              <Button disabled={loading} onClick={onClick}>
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Upload"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
