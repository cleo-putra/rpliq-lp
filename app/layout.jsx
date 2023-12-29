import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderNew from "@/components/HeaderNew";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RPLiQ",
  description: "iQualify - iQualified",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script> */}
      <body>
        <HeaderNew />
        {/* <Navbar /> */}
        {/* <Header /> */}
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
