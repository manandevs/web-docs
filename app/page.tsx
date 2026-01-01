import CardsSection from "@/components/CardsSection";
import Hero from "@/components/Hero";
import Layout from "@/components/layouts/Layout";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <CardsSection />
    </Layout>
  );
}
