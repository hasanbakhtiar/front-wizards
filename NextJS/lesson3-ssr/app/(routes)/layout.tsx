import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div>
      <Header />
      <div> {children}</div>
      <Footer />
    </div>
  );
};

export default RoutesLayout;
