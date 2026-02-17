import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const interviewRef = useRef(null);
  const dmrcRef = useRef(null);
  const mindspaceRef = useRef(null); 

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      interviewRef.current,
      dmrcRef.current,
      mindspaceRef.current, 
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase py-12 px-4 md:px-8">
      <div className="w-full flex flex-col items-center">
        {/* Title */}
        <p className="mb-8 text-cyan-50 text-xl font-semibold font-serif">
          MY PROJECTS
        </p>

<div className="showcaselayout grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
  
  {/* Project 1 - Clickable */}
  <a
    href="https://preprise-website.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    ref={interviewRef}
    className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 block"
  >
    <div className="image-wrapper h-[300px] overflow-hidden">
      <img
        src="/images/ai_project.jpg"
        alt="Interview Website"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="text-content p-4">
      <h2 className="text-white text-lg font-bold">
        A interview website with AI voice agent using Next.js
      </h2>
    </div>
  </a>

  {/* Project 2 - NOT Clickable */}
  <div
    ref={dmrcRef}
    className="bg-[#FFEFDB] rounded-2xl overflow-hidden shadow-lg"
  >
    <div className="image-wrapper h-[300px] overflow-hidden">
      <img
        src="/images/DMRC.jpg"
        alt="Lost&Found Portal"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-4">
      <h2 className="text-black text-lg font-bold">
        Lost&Found Portal of Delhi Metro
      </h2>
    </div>
  </div>

  {/* Project 3 - Clickable */}
  <a
    href="https://mind-space-web.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    ref={mindspaceRef}
    className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 block"
  >
    <div className="image-wrapper h-[300px] overflow-hidden">
      <img
        src="/images/mind-space.jpg"
        alt="Mind Space Project"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-4">
      <h2 className="text-white text-lg font-bold">
        Mind Space – Mental Wellness Platform
      </h2>
    </div>
  </a>


        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
