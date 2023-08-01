"use client";

import { GridLayout } from "./GridLayout";
import { Skeleton } from "../ui";

export const Loading = () => {
  return (
    <main className="CONTENT py-8">
      <GridLayout>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
          <div key={i} className="w-full sm:w-auto">
            <Skeleton className="sm:w-[300px] max-w-full min-h-[160px] h-auto max-h-[200px] mb-2" />
            <Skeleton className="w-[80px] max-w-full h-[16px] mb-2" />
            <Skeleton className="w-[220px] max-w-full h-[16px]" />
          </div>
        ))}
      </GridLayout>
      <hr className="py-12 w-full block border-none" />
    </main>
  );
};
