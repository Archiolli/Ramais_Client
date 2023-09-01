import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Menu from "@/components/menu";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jproramal",
  description: "Aplicação para o controle de ramais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      
      <body className={` ${inter.className} flex flex-col h-screen overflow-y-hidden`}>        
          <Menu
            title="Ramais"
            subtitle={`© João Archiolli - ${new Date().getFullYear()}`}
          />
          <div className="flex">
            <Navbar />
            <div className=" flex-grow">
              <main>{children}</main>
            </div>
          </div>
      </body>
    </html>
  );
}