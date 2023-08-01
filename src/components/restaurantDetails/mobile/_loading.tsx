"use client";

import { Skeleton } from "@/components/ui";

const ImageSkeleton = () => (
  <div>
    <Skeleton className="w-full h-80" />
  </div>
);

export const Loading = () => {
  return (
    <div>
      <ImageSkeleton />
    </div>
  );
};
