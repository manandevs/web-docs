import React from "react";
import { notFound } from "next/navigation";

// Mock Data - In the future, this will come from MDX files or a Database
const contentData: Record<string, { title: string; content: string }> = {
  html: {
    title: "HTML5 Foundations",
    content: "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.",
  },
  git: {
    title: "Git & Version Control",
    content: "Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  },
  installation: {
    title: "Installation",
    content: "To get started, run 'npm install' in your terminal...",
  }
};

interface PageProps {
  params: {
    topic: string;
  };
}

export default async function DocPage({ params }: PageProps) {
  // Await params if using Next.js 15, otherwise just access params
  const { topic } = params; 

  const data = contentData[topic];

  if (!data) {
    return notFound(); // Shows 404 if topic doesn't exist
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold font-it-weralionis text-white">
        {data.title}
      </h1>
      <p className="text-lg text-zinc-400 leading-relaxed">
        {data.content}
      </p>
      
      {/* Example Content Box */}
      <div className="p-6 rounded-xl border border-white/10 bg-white/5 mt-8">
        <h3 className="text-xl font-semibold mb-2">Key Concepts</h3>
        <ul className="list-disc pl-5 text-zinc-400 space-y-2">
            <li>Structure</li>
            <li>Semantics</li>
            <li>Attributes</li>
        </ul>
      </div>
    </div>
  );
}