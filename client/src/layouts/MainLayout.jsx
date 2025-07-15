import React, { Children } from "react";
import Navbar from "./Navbar/Navbar";
import SideBarSection from "@/components/sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <div className="flex">
        <SideBarSection />
        <div className="w-full">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
