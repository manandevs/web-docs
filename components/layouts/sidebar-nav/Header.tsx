"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  {
    src: "/images/html.png",
    title: "HTML5 Foundations",
    desc: "The structure of the web",
    href: "/docs/html",
  },
  {
    src: "/images/css.png",
    title: "CSS Styling",
    desc: "Design, layout, and responsiveness",
    href: "/docs/css",
  },
  {
    src: "/images/git.png",
    title: "Git & Version Control",
    desc: "Track changes & collaborate",
    href: "/docs/git", 
  },
]

const SidebarNavHeader = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1.5">
      <p className="px-2 font-it-weralionis font-semibold text-zinc-200 uppercase tracking-wider mt-3.5">
        Select a Module
      </p>

      <div className="flex flex-col gap-1.5">
        {items.map(({ src, title, desc, href }) => {
          // Check if the current URL matches exactly or is a sub-path
          const isActive = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link key={title} href={href} className="block group">
              <div
                className={`flex items-center gap-3 p-2 rounded-xl border transition-all duration-200 
                  ${isActive 
                    ? "bg-white/10 border-zinc-600 ring-1 ring-white/5" 
                    : "border-transparent hover:bg-white/5 hover:border-zinc-800"
                  }`}
              >
                {/* Icon Container */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden border transition-colors
                   ${isActive ? "border-white/20 bg-gray-800" : "bg-gradient-to-br from-gray-800 to-black border-white/10"}`}>
                  <Image 
                    src={src} 
                    alt={title} 
                    width={40} 
                    height={40} 
                    className="object-cover w-full h-full" 
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className={`text-sm font-medium font-it-weralionis transition-colors ${isActive ? "text-white" : "text-zinc-200 group-hover:text-white"}`}>
                    {title}
                  </span>
                  <span className="text-xs text-zinc-500 tracking-tight group-hover:text-zinc-400 transition-colors">
                    {desc}
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SidebarNavHeader