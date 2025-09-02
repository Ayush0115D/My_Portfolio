import { useRef, useEffect, useState } from "react";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => (
  <div className="flex-none flex-center">
    <img src={icon.imgPath} alt={icon.name} className="h-20 w-auto" />
  </div>
);

const LogoShowcase = () => {
  const listRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const autoScrollRef = useRef(null);
  const isPaused = useRef(false);
  const pauseTimeout = useRef(null);

  // check scroll position for enabling/disabling buttons
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const update = () => {
      setCanLeft(el.scrollLeft > 0);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // auto scroll effect (seamless loop)
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    let scrollStep = 4; // speed in px/frame (~240px/sec at 60fps)

    const autoScroll = () => {
      if (!isPaused.current) {
        el.scrollLeft += scrollStep;

        // reset seamlessly when half of the doubled list is scrolled
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      autoScrollRef.current = requestAnimationFrame(autoScroll);
    };

    autoScrollRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(autoScrollRef.current);
  }, []);

  // scroll buttons
  const scrollLogos = (dir) => {
    const el = listRef.current;
    if (!el) return;

    // Pause auto-scroll when clicking button
    isPaused.current = true;
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);

    const amount = Math.floor(el.clientWidth * 0.9); // scroll almost full width
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });

    // Resume auto-scroll after 2s
    pauseTimeout.current = setTimeout(() => {
      isPaused.current = false;
    }, 2000);
  };

  return (
    <div className="md:my-20 my-10 relative">
      {/* Scrollable row */}
      <div
        ref={listRef}
        className="flex gap-12 overflow-x-auto no-scrollbar scroll-smooth px-12"
      >
        {logoIconsList.concat(logoIconsList).map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>

      {/* Left button */}
      <button
        aria-label="Scroll logos left"
        onClick={() => scrollLogos("left")}
        disabled={!canLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Right button */}
      <button
        aria-label="Scroll logos right"
        onClick={() => scrollLogos("right")}
        disabled={!canRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default LogoShowcase;
