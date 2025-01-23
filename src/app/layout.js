import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Culineer - Home",
  description: "Created by Ashhad Zafar Khan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
