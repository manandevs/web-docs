"use client";

import { moduleNavItems } from "@/data/sidebar-modules";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarNavHeader = () => {
  const pathname = usePathname();

  const activeModule = moduleNavItems.find((item) =>
    pathname === item.href ||
    pathname.startsWith(item.href + "/")
  );

  const visibleModules = activeModule
    ? [activeModule]
    : moduleNavItems;

  return (
    <div className="flex flex-col gap-1.5">
      <p className="px-2 font-semibold text-zinc-200 uppercase tracking-wider mt-3.5">
        Select a Module
      </p>

      <div className="flex flex-col gap-1.5">
        {visibleModules.map(({ src, title, description, href }) => {
          const isActive =
            pathname === href || pathname.startsWith(href + "/");

          return (
            <Link key={title} href={href} className="block group">
              <div
                className={`flex items-center gap-3 p-2 rounded-xl border transition-all duration-200
                  ${isActive
                    ? "bg-white/10 border-zinc-600 ring-1 ring-white/5"
                    : "border-transparent hover:bg-white/5 hover:border-zinc-800"
                  }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg shrink-0 overflow-hidden border
                    ${isActive
                      ? "border-white/20 bg-gray-800"
                      : "bg-gradient-to-br from-gray-800 to-black border-white/10"
                    }`}
                >
                  <Image
                    src={src}
                    alt={title}
                    width={40}
                    height={40}
                  />
                </div>

                <div className="flex flex-col">
                  <span
                    className={`text-sm font-medium transition-colors
                      ${isActive
                        ? "text-white"
                        : "text-zinc-200 group-hover:text-white"
                      }`}
                  >
                    {title}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {description}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNavHeader;
