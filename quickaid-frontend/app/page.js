"use client";

import HeroSection from "./co/HeroSection";
import WrapButton from "@/components/ui/wrap-button";
import PostCarousel from "@/components/ui/PostCarousel";
import ScatteredIcons from "@/components/ui/ScatteredIcons";
import { HandHelping } from "lucide-react";

export default function Page() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Scattered Icons */}
      <ScatteredIcons />

      {/* Hero section */}
      <HeroSection />

      {/* Wrap Button */}
      <div className="flex justify-center mt-[-140px] mb-24 relative z-10">
        <WrapButton href="/create-post">
          <HandHelping className="animate-pulse"/>
          Post Help
        </WrapButton>
      </div>

      {/* Post List */}
      <div className="relative z-10">
        <PostCarousel />
      </div>
    </div>
  );
}
