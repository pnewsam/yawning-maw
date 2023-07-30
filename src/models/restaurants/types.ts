import { mockRestaurant } from ".";

export type Restaurant = typeof mockRestaurant;

// export type Restaurant = {
//   id: string;
//   name: string;
//   slug: string;
//   neighborhood: string;
//   photos: {
//     url: string;
//   }[];
//   copy: {
//     punchline: string;
//     description: string;
//     writeup: string;
//   };
//   google: {
//     rating: number;
//     user_ratings_total: number;
//     price_level: number;
//     business_status: string;
//     formatted_address: string;
//     formatted_phone_number: string;
//     opening_hours: {
//       open_now: boolean;
//       periods: {
//         close: {
//           day: number;
//           time: string;
//         };
//         open: {
//           day: number;
//           time: string;
//         };
//       }[];
//     };
//     website: string;
//   };
//   createdAt: string;
//   updatedAt: string;
// };
