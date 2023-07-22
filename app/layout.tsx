import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar";
import Modal from "./components/modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb App",
  description: "Airbnb clone app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal actionLabel="Submit" isOpen title="Hello World" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
