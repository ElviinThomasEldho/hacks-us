import React, { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FooterSection } from "@/components/ui/footer-section";
import { Calendar1Icon, CalendarIcon, MapPin, Pin, PinIcon } from "lucide-react";
import { HyperText } from "@/components/magicui/hyper-text";
import { Globe } from "@/components/magicui/globe";

const LandingPage: React.FC = () => {
  // const [scrollY, setScrollY] = useState(0);

  // // Update background position based on scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(-window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: "url('src/img/background1.jpg')",
        backgroundPosition: `center ${scrollY * 0.5}px`, // Moves in reverse direction
      }}
    >
      {/* Background Particles */}
      <Particles
        className="fixed top-0 right-0 h-screen w-screen z-0"
        size={1}
        quantity={100}
        color="#fff"
      />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh]">
        {/* Logo & Title */}
        <header className="flex items-center justify-center">
          <img src="src/img/logo_outline.png" alt="logo" className="w-24" />
          <LineShadowText
            className="mt-16 text-4xl font-bold text-white font-chakra"
            shadowColor="#fff"
          >
            ACKS'US
          </LineShadowText>
        </header>

        {/* Register Button */}
        <InteractiveHoverButton className="my-5 font-redhat">
          Register Now
        </InteractiveHoverButton>

        <div className="flex justify-start items-center gap-2">
          <CalendarIcon />
          <TypingAnimation duration={3} className="font-redhat text-2xl font-bold my-2">
            15th - 16th March 2025
          </TypingAnimation>
        </div>
        
        <div className="flex justify-start items-center gap-2">
          <MapPin />
          <TypingAnimation duration={3} className="font-redhat text-2xl font-bold my-2">
            Rajagiri School of Engineering and Technology, Kochi
          </TypingAnimation>
        </div>
      </section>

      {/* Scrolling Text */}
      <VelocityScroll className="font-redhat text-white" defaultVelocity={0.5}>
        HACKS'US - EDITION IV |
      </VelocityScroll>

      {/* Terminal Output */}
      <main className="my-20 w-screen flex justify-center items-center">
        <Terminal className="overflow-hidden text-left">
          <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

          {[
            "✔ Preflight checks for Hacksus setup.",
            "✔ Verifying framework. Found Next.js, perfect for the Hacksus.",
            "✔ Validating Tailwind CSS for a sleek UI.",
            "✔ Validating import alias for better DX.",
            "✔ Writing components.json for reusable UI components.",
            "✔ Checking registry for latest dependencies.",
            "✔ Updating tailwind.config.ts with Hacksus4.0-specific styles.",
            "✔ Updating app/globals.css for consistent theming.",
            "✔ Installing dependencies required for the Hacksus4.0 project.",
          ].map((text, index) => (
            <AnimatedSpan
              key={index}
              delay={1500 + index * 500}
              className="text-green-500"
            >
              <span>{text}</span>
            </AnimatedSpan>
          ))}

          {/* File Update Info */}
          <AnimatedSpan delay={6000} className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts (optimized for Hacksus)</span>
          </AnimatedSpan>

          {/* Success Messages */}
          <TypingAnimation delay={6500} className="text-muted-foreground">
            🚀 Success! Hacksus project initialization completed.
          </TypingAnimation>

          <TypingAnimation delay={7000} className="text-muted-foreground">
            You may now add components and start building!
          </TypingAnimation>
        </Terminal>
      </main>

      <Globe className="relative"  />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
