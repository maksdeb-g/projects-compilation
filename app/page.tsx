import Projects from "./pages/Projects";
import Hero from "./pages/Hero";
import React from "react";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-cyan-100 to-slate-50">
      <Hero />
      <Projects />
    </div>
  );
}
