import type { Metadata } from "next";
import "./globals.css";
// import "@/styles/homepage.css";
// import "@/styles/spinner-loader.css";
import Header from "@/components/Header";
import { Providers } from "@/redux/providers";

export const metadata: Metadata = {
  title: "Guidesly",
  description: "Guidesly",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="App">
        <Providers>
          <header className="fixed-header">
            <Header />
          </header>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
