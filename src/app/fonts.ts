import { Inter, Prompt } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const prompt = Prompt({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-display",
});
