import interior from "@/assets/images/interior.jpg";

export type MenuItem = {
  src: string;
  name: string;
  price: number;
  description: string;
};

export const mockMenuItem = {
  src: interior.src,
  name: "Hot and Fiery Chicken",
  price: 12.99,
  description:
    "Signature fried chicken wings with a sticky spicy peri peri sauce.",
};
