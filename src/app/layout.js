import { Inter } from "next/font/google";
import "./globals.css";
import "@/sass/style.scss";
import assext from "@/imgs/Assext-2.png";
import Nav from "@/components/Nav/Nav";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
import { Providers } from "@/statemanagement/provider";

export const metadata = {
  title: "Recoder",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" type="image/png" href={assext} />
      </head> */}
      <body className={inter.className}>
        <Providers>
          <Nav />
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
}
