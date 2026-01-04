"use client";

import React, { ReactNode } from "react";
import AppSidebar from "@/components/layouts/AppSidebar";
import SidebarNavHeader from "./sidebar-nav/Header";
import SidebarNavContent from "./sidebar-nav/Content";

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen bg-black">
      <AppSidebar
        side="left"
        header={<SidebarNavHeader />}
        content={<SidebarNavContent />}
        footer={<p className="text-gray-400 text-xs">Left Sidebar Footer</p>}
      />

      {/* Main Content */}
      <main className="flex-1 w-full min-h-screen">
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
