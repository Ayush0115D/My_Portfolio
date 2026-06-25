import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    // ORIGINAL: Hero text heading animation - DO NOT CHANGE
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );

    // Badge text reveal
    gsap.fromTo(
      ".hero-badge-text",
      { y: 10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power2.out" }
    );

    // Badge floating animation
    gsap.to(".hero-badge", {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1.5
    });

    // Badge hover effect
    const badge = document.querySelector(".hero-badge");
    if (badge) {
      badge.addEventListener("mouseenter", () => {
        gsap.to(".hero-badge", {
          scale: 1.08,
          duration: 0.4,
          ease: "back.out"
        });
      });
      badge.addEventListener("mouseleave", () => {
        gsap.to(".hero-badge", {
          scale: 1,
          duration: 0.4,
          ease: "back.out"
        });
      });
    }

    // Description fade in
    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.inOut" }
    );

    // ANIMATED BORDER LINES - Rotating inside badge
    gsap.to(".badge-border-animate", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "none"
    });
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            
            {/* ORIGINAL HEADING - UNCHANGED */}
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            {/* NEW: ENHANCED Badge and Description Section ONLY */}
            <div className="flex flex-col gap-5">
              
              {/* ENHANCED Badge with ANIMATED BORDER LINES */}
              <div
                className="hero-badge relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm cursor-pointer transition-all w-fit overflow-hidden"
                style={{
                  border: "2px solid rgba(139, 92, 246, 0.6)",
                  background: "rgba(139, 92, 246, 0.08)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
                }}
              >
                {/* Animated rotating border lines */}
                <div
                  className="badge-border-animate absolute inset-0 rounded-full"
                  style={{
                    border: "1.5px solid transparent",
                    borderImageSource: "linear-gradient(90deg, rgba(139, 92, 246, 0.8), rgba(168, 85, 247, 0.2), rgba(139, 92, 246, 0.8))",
                    borderImageSlice: 1,
                    pointerEvents: "none"
                  }}
                />
                
                <span className="text-xl relative z-10">👋</span>
                <span className="hero-badge-text bg-gradient-to-r from-[#e7163c] to-[#7e47ff] bg-clip-text text-transparent font-semibold overflow-hidden whitespace-nowrap inline-block relative z-10">
                  Hello, I'm Ayush
                </span>
              </div>

              {/* ENHANCED Description */}
              <p
                className="hero-description text-white-50 md:text-xl relative z-10 pointer-events-none max-w-md leading-relaxed"
              >
                A full-stack engineer building modern web applications with experience in 
                <span className="text-white font-medium"> GenAI</span> and 
                <span className="text-white font-medium"> AWS</span>
              </p>
            </div>

            {/* ORIGINAL Button */}
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
        
        {/* RIGHT: 3D Model - UNCHANGED */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};
export default Hero;