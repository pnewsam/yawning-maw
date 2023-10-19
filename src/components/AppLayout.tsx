"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export let showToast: any = undefined;

export const BaseAppLayout = ({ children, className }: Props) => {
  const { toast } = useToast();

  if (!showToast) {
    showToast = toast;
  }

  return (
    <div className={clsx("min-h-full", className)}>
      <Navbar />
      {children}
      <Toaster />
      <Footer />
    </div>
  );
};

export const AppLayout = ({ className, children }: Props) => (
  <BaseAppLayout className={className}>{children}</BaseAppLayout>
);
