export type RestaurantRecord = {
  id: number;
  name: string;
  neighborhood: string;
  address: string;
  phoneNumber: string;
  website: string;
  data: any;
};

export const RestaurantTransformer = (restaurant: RestaurantRecord) => ({
  id: restaurant.id,
  name: restaurant.name,
  slug: "my-restaurant-here",
  neighborhood: "Neighborhood",
  address: "1583 Street Name Blvd., City, ST 92103",
  genres: ["American", "New American"],
  googleUrl: "https://goo.gl/maps/5Y1JrjQYJZ2Z7QJcA",
  posterUrl: "https://i.imgur.com/2z3oH5L.jpg",
  description:
    "Discover an upscale, casual New American restaurant where classic flavors intertwine with a modern twist. Immerse yourself in an elegant ambiance while savoring a diverse menu. Indulge in an extensive wine selection, expertly curated for impeccable food pairings. Experience culinary excellence at its finest.",
  punchline: "A ramen-shop chain out of Japan with mouthwatering broth",
  phoneNumber: "(858) 123-4567",
  website:
    "https://www.yelp.com/biz/ichiriki-japanese-nabe-restaurant-san-diego-2",
});

export type Restaurant = ReturnType<typeof RestaurantTransformer>;
