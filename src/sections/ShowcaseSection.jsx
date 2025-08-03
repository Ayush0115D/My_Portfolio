import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const interviewRef = useRef(null);
  const dmrcRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [interviewRef.current, dmrcRef.current];
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
          MY PROJECT
        </p>

        <div className="showcaselayout grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
          {/* Project 1 */}
          <div
            ref={interviewRef}
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg"
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
                A interview website with AI voice agent using Node.js
              </h2>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="project bg-[#FFEFDB] rounded-2xl overflow-hidden shadow-lg"
            ref={dmrcRef}
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
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
