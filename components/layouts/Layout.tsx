"use client";

import React, { ReactNode } from "react";
import AppSidebar from "@/components/layouts/AppSidebar";
import SidebarNavHeader from "./sidebar-nav/Header";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen bg-black">
      <AppSidebar
        side="left"
        header={<SidebarNavHeader />}
        content={
          <div className="text-white">
            <p>Left Sidebar Content Item 1</p>
            <p>Left Sidebar Content Item 2</p>
          </div>
        }
        footer={<p className="text-gray-400 text-xs">Left Sidebar Footer</p>}
      />

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {children}
      </main>

      {/* Right Sidebar with its own provider */}
      {/* <AppSidebar
        side="right"
        content={<p className="text-white">Right Sidebar Content</p>}
      /> */}
    </div>
  );
};

export default Layout;
