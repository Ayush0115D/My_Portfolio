import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const icons = {
  "Full Stack Generative and Agentic AI with Python": (
    <img src="/images/chatgpt.svg" alt="ChatGPT" className="w-full h-full object-contain" />
  ),
  "AWS Certified Cloud Practitioner": (
    <img src="/images/logos/aws.svg" alt="AWS" className="w-full h-full object-contain" />
  ),
  "DMRC Internship": (
    <img src="/images/dmrc.png" alt="DMRC" className="w-full h-full object-contain" />
  ),
  "Fundamentals of machine learning with scikit-learn": (
    <svg viewBox="0 0 24 24" fill="none" stroke="#52aeff" strokeWidth="1.5" className="w-full h-full">
      <rect x="4" y="16" width="3" height="5" rx="0.5" />
      <rect x="10.5" y="11" width="3" height="10" rx="0.5" />
      <rect x="17" y="6" width="3" height="15" rx="0.5" />
      <line x1="4.5" y1="4" x2="10.5" y2="11" strokeWidth="1" />
      <line x1="10.5" y1="11" x2="17" y2="6" strokeWidth="1" />
      <circle cx="4.5" cy="4" r="1.5" fill="#52aeff" />
      <circle cx="10.5" cy="11" r="1.5" fill="#52aeff" />
      <circle cx="17" cy="6" r="1.5" fill="#52aeff" />
      <path d="M21 4l-2 2-1-1" strokeWidth="1" />
    </svg>
  ),
  "My Resume": (
    <svg viewBox="0 0 24 24" fill="none" stroke="#d9ecff" strokeWidth="1.5" className="w-full h-full">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
      <circle cx="12" cy="10.5" r="1" fill="#d9ecff" />
    </svg>
  ),
  "IBM SkillsBuild Project-Based Learning Program": (
    <img src="/images/ibm-logo.png" alt="IBM" className="w-full h-full object-contain" />
  ),
};

const Certifications = () => {

  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications Section"
          sub="🏅 My Certificates and Resume"
        />

        <div className="cert-grid grid-3-cols mt-16">
          {certifications.map((certification, index) => {
            const hasLink = certification.link;
            const icon = icons[certification.name];

            const cardContent = (
              <GlowCard
                card={certification}
                key={index}
                index={index}
                className="cert-card p-5"
              >
                <div className="flex flex-col items-start justify-between h-full gap-3">
                  <div className="w-full flex items-start gap-3">
                    <span className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-black-50 flex items-center justify-center">
                      <span className="w-8 h-8 flex items-center justify-center">
                        {icon}
                      </span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-white text-base font-bold leading-snug">
                        {certification.name}
                      </p>
                      {certification.description && (
                        Array.isArray(certification.description) ? (
                          <ul className="list-disc list-inside text-white-50 text-xs leading-relaxed mt-1.5 space-y-0.5">
                            {certification.description.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white-50 text-xs leading-relaxed mt-1.5">
                            {certification.description}
                          </p>
                        )
                      )}
                    </div>
                  </div>

                  {hasLink && (
                    <span className="self-start inline-flex items-center gap-1.5 bg-black-200 hover:bg-white hover:text-black transition-all text-white-50 px-3 py-1.5 rounded-lg w-fit cursor-pointer text-xs font-medium border border-black-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
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
              </GlowCard>
            );

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