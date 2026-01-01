"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  side?: "left" | "right";
  children?: React.ReactNode;
  // Allow overriding the header/content/footer if needed
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

const AppSidebar: React.FC<AppSidebarProps> = ({
  side = "left",
  children,
  header,
  content,
  footer,
}) => {
  return (
    <Sidebar
      side={side}
      collapsible="offcanvas"
      className="bg-black text-white border-gray-800 px-6"
    >
      <SidebarHeader className="bg-black text-white pt-20">
        {header}
      </SidebarHeader>

      <SidebarContent className="bg-black text-white">
        {content ?? children}
      </SidebarContent>

      <SidebarFooter className="bg-black text-white">
        {footer}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
