"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  user: any;
};

export let showToast: any = undefined;

export const BaseAppLayout = ({ children, className, user }: Props) => {
  const { toast } = useToast();

  if (!showToast) {
    showToast = toast;
  }

  return (
    <div className={clsx("min-h-full", className)}>
      <Navbar user={user} />
      {children}
      <Toaster />
      <Footer />
    </div>
  );
};

export const AppLayout = ({ className, children, user }: Props) => (
  <BaseAppLayout className={className} user={user}>
    {children}
  </BaseAppLayout>
);
