import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Nextjs learning app",
    template: "%s|Next.js app",
  },
  description: "Next.js first app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
