import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import MainModal from "@/components/MainModal";
import Comingsoon from "@/components/Comingsoon";

export const metadata = {
  title: "Near",
  description: "near ar",
};

 
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link  rel="icon" href="/logo.png" type="image/svg" sizes="64*64" />
      </head>
      <body className={inter.className}>
        {children}
        <MainModal e={true} />
        <Comingsoon />
        </body>
    </html>
  );
}
