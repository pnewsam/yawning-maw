import Link from "next/link";

type Children = {
  children: React.ReactNode;
};

export const Name = ({ children }: Children) => (
  <p className="pointer-events-none mt-2 block truncate text-xl font-display font-semibold text-stone-600">
    {children}
  </p>
);

export const Neighborhood = ({ children }: Children) => (
  <p className="pointer-events-none block text-sm text-stone-500">{children}</p>
);

export const Genres = ({ children }: Children) => (
  <p className="pointer-events-none block text-sm text-stone-500">{children}</p>
);

export const PhotoLinkButton = ({
  href,
  children,
}: {
  href: string;
} & Children) => (
  <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-stone-100 border border-stone-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-stone-100">
    <Link href={href}>
      <figure className="w-full h-auto">
        {children || (
          <div className="w-[300px] h-[200px] relative max-w-full" />
        )}
      </figure>
    </Link>
  </div>
);
