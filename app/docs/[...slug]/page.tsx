import { notFound } from "next/navigation";
import { ChevronRight, Terminal, Check } from "lucide-react";
import { docsData } from "@/lib/docs";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}
export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;

  const moduleName = slug[0];
  const topicName = slug[1] || "intro";

  const moduleData = docsData[moduleName];
  
  if (!moduleData || !moduleData[topicName]) {
    return notFound();
  }

  const content = moduleData[topicName];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="relative mb-12">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-500/20 blur-[60px] rounded-full pointer-events-none" />
        <div className="relative flex items-center gap-2 text-xs font-medium text-zinc-500 mb-6 uppercase tracking-widest font-it-weralionis">
          <span className="text-zinc-400">{moduleName}</span>
          <ChevronRight size={12} />
          <span className="text-red-400">{topicName}</span>
        </div>

        <h1 className="relative text-5xl md:text-6xl font-it-weralionis tracking-tight text-white mb-6">
          {content.title}
        </h1>
        <p className="text-xl text-zinc-400 leading-relaxed max-w-7xl font-light">
          {content.description}
        </p>
      </div>

      <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-12" />
      <div className="grid gap-8 mb-12">
        <div className="group relative p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-red-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />          
          <h3 className="relative text-lg font-it-weralionis text-white mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
            Core Concepts
          </h3>
          
          <ul className="relative space-y-3">
            {content.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-zinc-400">
                 <Check className="w-5 h-5 text-zinc-600 shrink-0 mt-0.5" />
                 <span className="text-sm md:text-base leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>        </div>
      </div>

      {content.code && (
        <div className="mb-12">
           <div className="flex items-center justify-between px-1 mb-3">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest font-it-weralionis flex items-center gap-2">
              <Terminal size={14} className="text-red-400" />
              Example Usage
            </span>
          </div>

          <div className="relative rounded-xl border border-white/10 bg-[#050505] shadow-2xl overflow-hidden group">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="ml-auto text-[10px] text-zinc-600 font-mono">bash / html</div>
            </div>

            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm leading-7 text-zinc-300">
                <code>{content.code}</code>
              </pre>
            </div>

            <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 pointer-events-none" />
          </div>
        </div>
      )}

      <div className="flex justify-between items-center pt-10 border-t border-white/5">
        <Button variant="ghost" className="text-zinc-500 hover:text-white hover:bg-white/5">
          &larr; Previous
        </Button>
        <Button variant="ghost" className="text-zinc-500 hover:text-white hover:bg-white/5">
          Next Lesson &rarr;
        </Button>
      </div>
    </div>
  );
}