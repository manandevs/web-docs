import Image from "next/image"

const items = [
  {
    src: "/images/html.png",
    title: "HTML5 Foundations",
    desc: "The structure of the web",
  },
  {
    src: "/images/git.png",
    title: "Git & Version Control",
    desc: "Track changes & collaborate",
  },
]

const SidebarNavHeader = () => (
  <div>
    {items.map(({ src, title, desc }) => (
      <div
        key={title}
        className="flex gap-2 mt-3 p-1.5 rounded-xl border border-zinc-900 hover:bg-zinc-900 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
          <Image src={src} alt={title} width={100} height={100} className="object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-md font-medium font-it-weralionis">{title}</span>
          <span className="text-sm text-zinc-500 tracking-tighter">{desc}</span>
        </div>
      </div>
    ))}
  </div>
)

export default SidebarNavHeader
