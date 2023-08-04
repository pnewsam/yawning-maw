const links = [
  {
    title: "The Best Restaurants in San Diego",
    url: "/best-restaurants-in-san-diego",
  },
  {
    title: "The Best Restaurants in Orange County",
    url: "/best-restaurants-in-orange-county",
  },
  {
    title: "The Best Restaurants in Phoenix",
    url: "/best-restaurants-in-phoenix",
  },
  {
    title: "The Best Restaurants in Tucson",
    url: "/best-restaurants-in-tucson",
  },
  {
    title: "The Best Restaurants in Las Vegas",
    url: "/best-restaurants-in-las-vegas",
  },
];

export const Footer = () => (
  <footer className="bg-stone-100">
    <div className="CONTENT py-12 grid-cols-4">
      <h5 className="font-display text-stone-700 text-xl mb-2">
        The Best Restaurants
      </h5>
      <div>
        {links.map((link) => (
          <a
            key={link.url}
            className="block text-stone-700 mb-1"
            href={link.url}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
    <div className="py-4">
      <p className="text-sm text-stone-700 text-center">©Yawning Maw 2023</p>
    </div>
  </footer>
);
