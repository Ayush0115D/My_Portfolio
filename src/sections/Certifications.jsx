import { certifications } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Certifications = () => {
  return (
    <section id="certifications" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Certifications"
          sub=""
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {certifications.map((certification, index) => (
            <GlowCard card={certification} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={certification.imgPath} alt="" />
                </div>
                <div>
                  <p className="font-bold">{certification.name}</p>
                  {certification.description && (
                  <p className="text-white-50">{certification.description}</p>
                  )}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;