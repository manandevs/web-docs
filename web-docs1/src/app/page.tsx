import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CourseGrid from '../components/CourseGrid';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      <Hero />
    </div>
  );
}