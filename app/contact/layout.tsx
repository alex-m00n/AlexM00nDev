import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Me contacter | alexm00n.dev 🌙",
  description: "Contacter AlexM00n",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
