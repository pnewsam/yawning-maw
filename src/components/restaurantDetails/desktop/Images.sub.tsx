import clsx from "clsx";
import Image from "next/image";

export const GridItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => <figure className={clsx("bg-stone-100", className)}>{children}</figure>;

export const GridImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => (
  <Image
    className={clsx("object-cover w-auto h-full min-w-[100%]", className)}
    src={src}
    alt="Image"
    height={320}
    width={480}
  />
);
