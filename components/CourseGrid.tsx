import React from 'react';

const chapters = [
  { id: 1, title: 'Introduction', desc: 'Learn how to build a full-stack web application with the free, Next.js Foundations course.' },
  { id: 2, title: 'Getting Started', desc: 'Create a new Next.js application using the dashboard starter example and explore the project.' },
  { id: 3, title: 'CSS Styling', desc: 'Style your Next.js application with Tailwind and CSS modules.' },
  { id: 4, title: 'Optimizing Fonts and Images', desc: 'Optimize fonts and images with the Next.js built-in components.' },
  { id: 5, title: 'Creating Layouts and Pages', desc: 'Create the dashboard routes and a shared layout that can be shared between multiple pages.' },
  { id: 6, title: 'Navigating Between Pages', desc: 'Learn how to use the <Link> component to navigate between pages.' },
  { id: 7, title: 'Setting Up Your Database', desc: 'Setup a database for your application and seed it with initial data.' },
  { id: 8, title: 'Fetching Data', desc: 'Learn about the different ways to fetch data in Next.js, and fetch data for your dashboard page.' },
  { id: 9, title: 'Static and Dynamic Rendering', desc: 'Understand how rendering works in Next.js, and make your dashboard app dynamic.' },
  { id: 10, title: 'Streaming', desc: 'Improve your application\'s loading experience with streaming and loading skeletons.' },
  { id: 11, title: 'Adding Search and Pagination', desc: 'Add search and pagination to your dashboard application using Next.js APIs.' },
  { id: 12, title: 'Mutating Data', desc: 'Mutate data using React Server Actions, and revalidate the Next.js cache.' },
  { id: 13, title: 'Handling Errors', desc: 'Handle errors gracefully with error.tsx and notFound.' },
  { id: 14, title: 'Improving Accessibility', desc: 'Implement server-side form validation and improve accessibility in your forms.' },
  { id: 15, title: 'Adding Authentication', desc: 'Add authentication to protect your dashboard routes using NextAuth.js and Server Actions.' },
  { id: 16, title: 'Adding Metadata', desc: 'Learn how to add metadata to your Next.js application.' },
];

const CourseGrid = () => {
  return (
    <div className="w-full max-w-[1200px] px-6 pb-24">
      
      {/* "How does it work" Section */}
      <div className="mb-24 text-center md:text-left">
         <div className="mb-10 flex flex-col items-center md:flex-row md:items-baseline md:gap-4">
            <h2 className="text-3xl font-bold text-white">How does the course work?</h2>
            <p className="text-xl text-gray-500">By building a full web application. Step by step.</p>
         </div>
         
         {/* Simple Diagram Replacement */}
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
             {[
               { icon: 'settings', text: 'Set up your local environment and initializing the "ACME" Next.js project template.'},
               { icon: 'layout', text: 'Use pre-styled components as part of each chapter that leverage Next.js conventions.'},
               { icon: 'link', text: 'Hook up real application logic and data to bring a fully-fledged demo website to life.'},
               { icon: 'globe', text: 'At the end you\'ll have a website that\'s ready to ship and the knowledge to build your own.'}
             ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-4">
                   <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <div className="h-2 w-2 rounded-full bg-current" />
                   </div>
                   <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                </div>
             ))}
         </div>
         
         {/* Features Pills */}
         <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-4 rounded-full border border-gray-800 bg-gray-900/50 py-3 px-6">
               <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-black">⚡</div>
               <div>
                  <h4 className="font-semibold text-white text-sm">Your progress will be synced</h4>
                  <p className="text-xs text-gray-500">Go at your own pace.</p>
               </div>
            </div>
            <div className="flex items-center gap-4 rounded-full border border-gray-800 bg-gray-900/50 py-3 px-6">
               <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-black">?</div>
               <div>
                  <h4 className="font-semibold text-white text-sm">Test your knowledge</h4>
                  <p className="text-xs text-gray-500">Take quick quizzes.</p>
               </div>
            </div>
         </div>
      </div>

      {/* Grid Section */}
      <div className="mb-8 flex flex-col md:flex-row items-baseline gap-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-white">What will I learn?</h2>
        <p className="text-xl text-gray-500">Here's everything that's covered in the course.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="group flex flex-col rounded-xl border border-gray-800 bg-black p-6 transition-all hover:border-gray-600 hover:bg-gray-900/30 cursor-pointer">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400 transition-colors group-hover:bg-white group-hover:text-black">
                {chapter.id}
              </div>
              <h3 className="text-lg font-semibold text-white">{chapter.title}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{chapter.desc}</p>
          </div>
        ))}
        {/* Next Steps Card */}
        <div className="group flex flex-col rounded-xl border border-gray-800 bg-black p-6 transition-all hover:border-gray-600 hover:bg-gray-900/30 cursor-pointer">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400 transition-colors group-hover:bg-white group-hover:text-black">
                17
              </div>
              <h3 className="text-lg font-semibold text-white">Next Steps</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Next.js Dashboard Course Conclusion</p>
          </div>
      </div>
      
      <div className="mt-12 flex justify-center">
         <button className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-gray-200">Start Learning →</button>
      </div>
    </div>
  )
}

export default CourseGrid