import React from 'react'

const navItems = [
  "Installation",
  "Project Structure",
  "Layouts and Pages",
  "Linking and Navigating",
  "Server and Client Components",
  "Cache Components",
  "Fetching Data",
  "Updating Data",
  "Caching and Revalidating",
]

const SidebarNavContent = () => {
  return (
    <div className="flex flex-col w-full px-2 mt-4">
      {/* Section Header */}
      <h4 className="text-blue-500 font-semibold text-sm mb-4 font-it-weralionis tracking-wider">
        Getting Started
      </h4>
      
      {/* Navigation Links */}
      <ul className="flex flex-col gap-3">
        {navItems.map((item, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="text-zinc-400 hover:text-white text-[13.5px] font-medium transition-colors block"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SidebarNavContent