import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { Link } from 'react-router-dom';

const Certifications = () => {
  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications Section "
          sub=" 🏅My Certificates and Resume "
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {certifications.map((certification, index) => {
            const isResume = certification.name === "My Resume" && certification.link;

            const cardContent = (
              <GlowCard card={certification} key={index} index={index}>
                <div className="flex flex-col items-start justify-between h-full gap-2 p-3">
                  <div>
                    <img src={certification.imgPath} alt="" />
                  </div>
                  <div>
                    <p className="text-shadow-white-50 text-lg font-bold mb-2">
                      {certification.name}
                    </p>
                    {certification.description && (
                      <p className="text-white-50">{certification.description}</p>
                    )}
                    {isResume && (
                      <span className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded w-fit mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                          />
                        </svg>
                        Download Resume
                      </span>
                    )}
                  </div>
                </div>
              </GlowCard>
            );

            // Use <a> to open PDF in new tab; <Link> for other cards
            return isResume ? (
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block w-full hover:no-underline"
              >
                {cardContent}
              </a>
            ) : (
              cardContent
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
