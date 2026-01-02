"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    name: "HTML Basics",
    href: "/docs/html",
    tabs: [
      { title: "Introduction", href: "/docs/html/intro" },
      { title: "Elements & Tags", href: "/docs/html/elements" },
      { title: "Attributes", href: "/docs/html/attributes" },
      { title: "Forms & Inputs", href: "/docs/html/forms" },
    ]
  },
  {
    name: "Git Basics",
    href: "/docs/git",
    tabs: [
      { title: "Installation", href: "/docs/git/install" },
      { title: "Init & Clone", href: "/docs/git/init" },
      { title: "Add & Commit", href: "/docs/git/commit" },
      { title: "Push & Pull", href: "/docs/git/push" },
    ]
  },
];

const SidebarNavContent = () => {
  const pathname = usePathname();

  const activeModule = navItems.find((item) => pathname.startsWith(item.href));

  if (!activeModule) {
    return (
      <div className="mt-8 px-2 text-zinc-500 text-sm">
        Select a module above to see contents.
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full px-2 mt-6">
      {/* Display the active module name */}
      <h4 className="text-blue-500 font-semibold text-sm mb-4 font-it-weralionis tracking-wider uppercase">
        {activeModule.name} Content
      </h4>
      
      {/* Render ONLY the tabs for the active module */}
      <ul className="flex flex-col gap-1 border-l border-zinc-800 ml-2 pl-4">
        {activeModule.tabs.map((tab, index) => {
          const isTabActive = pathname === tab.href;

          return (
            <li key={index}>
              <Link
                href={tab.href}
                className={`text-[13.5px] font-medium transition-colors block py-1
                  ${isTabActive 
                    ? "text-white translate-x-1" 
                    : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                {tab.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarNavContent;