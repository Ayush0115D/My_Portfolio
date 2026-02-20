import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Certifications = () => {
  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications Section"
          sub="🏅 My Certificates and Resume"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {certifications.map((certification, index) => {
            const hasLink = certification.link;

            const cardContent = (
              <GlowCard card={certification} key={index} index={index}>
                <div className="flex flex-col items-start justify-between h-full gap-3 p-4">
                  
                  {/* Image (Optional) */}
                  {certification.imgPath && (
                    <div>
                      <img
                        src={certification.imgPath}
                        alt={certification.name}
                        className="rounded-lg"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    <p className="text-shadow-white-50 text-lg font-bold mb-2">
                      {certification.name}
                    </p>

                    {certification.description && (
                      <p className="text-white-50 text-sm">
                        {certification.description}
                      </p>
                    )}

                    {/* Button if link exists */}
                    {hasLink && (
                      <span className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-700 transition-all text-white px-4 py-2 rounded w-fit mt-4 cursor-pointer">
                        {/* Icon */}
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
                            d="M13.828 10.172a4 4 0 010 5.656m-1.414-1.414a2 2 0 000-2.828m-4.95 4.95a4 4 0 010-5.656m1.414 1.414a2 2 0 000 2.828M15 12h.01M9 12h.01M12 4v16"
                          />
                        </svg>

                        {certification.name === "My Resume"
                          ? "Download Resume"
                          : "View Certificate"}
                      </span>
                    )}
                  </div>
                </div>
              </GlowCard>
            );

            // If link exists → wrap card inside <a>
            return hasLink ? (
              <a
                key={index}
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full hover:no-underline"
              >
                {cardContent}
              </a>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;