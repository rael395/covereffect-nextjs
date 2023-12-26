import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./ui/Navigation";
import Footer from "./ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FamSec - Family Insurance Website by JoefreyCodes",
  description: "Family Insurance Website by JoefreyCodes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-body leading-relaxed`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
