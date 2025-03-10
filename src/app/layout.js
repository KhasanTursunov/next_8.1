import { Geist, Geist_Mono } from "next/font/google";
// import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
// i have to pu roboto and Inter here like that
import "./globals.css";
// import Header from "@/components/Header";
// import Showcase from "@/components/Showcase";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uzum Market",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header/>
        <Showcase/> */}
        {children}
      </body>
    </html>
  );
}
