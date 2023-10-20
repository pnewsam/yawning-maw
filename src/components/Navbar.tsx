"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "./ui";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <div className="CONTENT py-4 flex items-center justify-between">
        <div className="">
          {/* Left Section */}
          <Link href="/" className="mr-6">
            <span className="font-display text-stone-700 text-2xl tracking-tight">
              Yawning Maw
            </span>
          </Link>
          <span className="text-stone-500 text-sm">
            The Best Food in Your Area. Period.
          </span>
        </div>

        <div>
          {/* Right Section */}
          {process.env.NODE_ENV === "development" &&
            pathname !== "/restaurants/new" && (
              <Link
                href="/restaurants/new"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "inline-flex text-xs gap-2"
                )}
              >
                Add Restaurant
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
        </div>
      </div>
    </nav>
  );
};
