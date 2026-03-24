import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
