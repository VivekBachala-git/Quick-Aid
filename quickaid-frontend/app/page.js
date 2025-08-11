"use client";

import HeroSection from "./co/HeroSection";
import WrapButton from "@/components/ui/wrap-button";
import { HandHelping } from "lucide-react";
import PostCarousel from "@/components/ui/PostCarousel"


export default function Page() {
  return (
    <div>
      <HeroSection />
      <div className="flex justify-center mt-[-140px] mb-24">
        <WrapButton href="/create-post">
          <HandHelping className="animate-pulse" />
          Post Help
        </WrapButton>
      </div>

      {/* post List */}
      <PostCarousel/>

      
    </div>
  );
}
