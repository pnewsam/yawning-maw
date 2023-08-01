"use client";

import { Skeleton } from "@/components/ui";

const HeaderSkeleton = () => (
  <div className="flex justify-between items-end mt-4 mb-4">
    <div className="flex flex-col">
      {/* Title */}
      <Skeleton className="w-[540px] h-[37px] block mb-2" />
      {/* Subtitle */}
      <Skeleton className="w-[400px] h-[12px] block" />
    </div>
    <div>
      <div className="inline-flex flex-col items-end w-full">
        {/* Badge */}
        <Skeleton className="w-[126px] h-[37px] mb-2" />
        {/* Favorited By */}
        <Skeleton className="w-[180px] h-[12px]" />
      </div>
    </div>
  </div>
);

const ImagesSkeleton = () => (
  <div className="grid grid-cols-4 grid-rows-[250px_250px] gap-3 relative h-[512px]">
    <Skeleton className="col-span-2 row-span-2" />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>
);

const ArticleSkeleton = () => (
  <div className="flex flex-col">
    {/* Punchline */}
    <Skeleton className="w-[600px] h-[60px] mb-2" />
    {/* Genre Badges */}
    <Skeleton className="w-[250px] h-[24px] mb-2" />
    {/* Descriptors */}
    <Skeleton className="w-[450px] h-[20px] mb-4" />
    {/* P1 */}
    <Skeleton className="w-full h-[100px]" />
    {/* P2 */}
    <Skeleton className="w-full h-[100px]" />
  </div>
);

const ActionsSkeleton = () => (
  <div className="flex flex-col gap-4">
    <Skeleton className="w-full h-[200px]" />
  </div>
);

export const Loading = () => {
  return (
    <div className="CONTENT pb-20">
      <HeaderSkeleton />
      <ImagesSkeleton />
      <div className="relative grid grid-cols-[2fr_1fr] gap-8 mt-8 mb-4">
        <ArticleSkeleton />
        <div>
          <ActionsSkeleton />
        </div>
      </div>
    </div>
  );
};
