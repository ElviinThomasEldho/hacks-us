import React from "react";
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
import { Book, CalendarIcon, Clock2, Home, MapPin, Phone, Play } from "lucide-react";
import { Globe } from "@/components/magicui/globe";
import { Timeline } from "@/components/ui/timeline";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { Badge } from "@/components/ui/badge";
import { Dock } from "@/components/ui/dock-two";

const LandingPage: React.FC = () => {
  const timelineData = [
    {
      title: "22 Feb",
      content: (
        <div>
          <h3 className="text-2xl">Hackathon Regsitration Opens</h3>
        </div>
      ),
    },
    {
      title: "26 Feb",
      content: (
        <div>
          <h3 className="text-2xl">React Workshop</h3>
          <Badge>Precursor</Badge>{" "}
        </div>
      ),
    },
    {
      title: "27 Feb",
      content: (
        <div>
          <h3 className="text-2xl">RAG Workshop</h3>
          <Badge>Precursor</Badge>{" "}
        </div>
      ),
    },
    {
      title: "1 Mar",
      content: (
        <div>
          <h3 className="text-2xl">UI/UX Hackathon</h3>
          <Badge>Precursor</Badge>
        </div>
      ),
    },
    {
      title: "2 - 8 Mar",
      content: (
        <div>
          <h3 className="text-2xl">Game Jam</h3>
          <Badge>Precursor</Badge>{" "}
        </div>
      ),
    },
    {
      title: "7 Mar",
      content: (
        <div>
          <h3 className="text-2xl">Hackathon Registration Closes</h3>
        </div>
      ),
    },
    {
      title: "14 Mar",
      content: (
        <div>
          <h3 className="text-2xl">Hackathon Starts</h3>
        </div>
      ),
    },
    {
      title: "16 Mar",
      content: (
        <div>
          <h3 className="text-2xl">Hackathon Ends</h3>
        </div>
      ),
    },
  ];

  const items = [
    { icon: Home, label: "Home" },
    { icon: Book, label: "About" },
    // { icon: Home, label: "HackS'US" },
    { icon: Play, label: "Timeline" },
    { icon: Phone, label: "Contact" },
  ]

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: "url('src/img/background1.jpg')",
        backgroundPosition: `center ${scrollY * 0.5}px`, // Moves in reverse direction
      }}
    >
      <Dock items={items} className="fixed bottom-0 z-100" />

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
          <TypingAnimation className="font-redhat text-2xl font-bold my-2">
            15th - 16th March 2025
          </TypingAnimation>
        </div>

        <div className="flex justify-start items-center gap-2">
          <MapPin />
          <TypingAnimation className="font-redhat text-2xl font-bold my-2">
            Rajagiri School of Engineering and Technology, Kochi
          </TypingAnimation>
        </div>
      </section>

      {/* Scrolling Text */}
      <VelocityScroll
        className="font-redhat text-white my-10"
        defaultVelocity={0.5}
      >
        HACKS'US - EDITION IV |
      </VelocityScroll>

      <Feature />

      <Timeline data={timelineData} />

      
      <VelocityScroll
        className="font-redhat text-white py-10 bg-neutral-950/80"
        defaultVelocity={0.5}
      >
        REGISTER NOW | 
      </VelocityScroll>

      {/* Terminal Output */}
      {/* <main className="my-20 w-screen flex justify-center items-center">
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

          <AnimatedSpan delay={6000} className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts (optimized for Hacksus)</span>
          </AnimatedSpan>

          <TypingAnimation delay={6500} className="text-muted-foreground">
            🚀 Success! Hacksus project initialization completed.
          </TypingAnimation>

          <TypingAnimation delay={7000} className="text-muted-foreground">
            You may now add components and start building!
          </TypingAnimation>
        </Terminal>
      </main> */}

      {/* <Globe className="relative"  /> */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
