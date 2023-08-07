"use client";

import Link from "next/link";
import { buttonVariants } from "./ui";
import LogoutButton from "./auth/LogoutButton";

type Props = {
  user: any;
};

export const Navbar = ({ user }: Props) => {
  return (
    <nav className="border-b border-gray-200 w-full">
      <div className="CONTENT py-4 flex items-center justify-between">
        <div className="">
          {/* Left Section */}
          <Link href="/">
            <span className="font-display text-stone-700 text-2xl">
              Yawning Maw
            </span>
          </Link>
        </div>

        <div className="">
          {user ? (
            <LogoutButton />
          ) : (
            <Link
              href="/login"
              className={buttonVariants({ variant: "outline" })}
            >
              Log in
            </Link>
          )}
          {/* Right Section */}
        </div>
      </div>
    </nav>
  );
};
