import { RestaurantCard } from "@/components/RestaurantCard";

const GridLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="CONTENT py-8">
      <GridLayout>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n, i) => (
          <RestaurantCard key={n} />
        ))}
      </GridLayout>
    </main>
  );
}
