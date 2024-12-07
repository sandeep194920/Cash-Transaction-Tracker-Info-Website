import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { data } from "@/data/data";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cash Transaction tracker",
  description: [...data.header.tagLine].join(";"),
  other: {
    features: data.appFeatures.map((feature) => feature.features).join(";"),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
