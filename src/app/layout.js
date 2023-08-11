import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
// import { MyContext } from "@/context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mkite Page",
  description: "By Akhilesh Sharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <MyContext> */}
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      {/* </MyContext> */}
    </html>
  );
}
