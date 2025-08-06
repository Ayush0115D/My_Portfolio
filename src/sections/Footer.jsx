import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-6">
      <div className="footer-container max-w-screen-lg mx-auto px-4 flex flex-col items-center gap-4">

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={socialImg.imgPath}
                alt={`${socialImg.name} icon`}
                className="w-7 h-7"
              />
            </a>
          ))}
        </div>

        {/* Built with info */}
        <div className="text-sm text-gray-400 text-center md:text-right leading-relaxed">
  <span role="img" aria-label="rocket">🚀</span> Built with{" "}
  <span className="text-blue-400 font-semibold">React</span>,{" "}
  <span className="text-cyan-300 font-semibold">Tailwind CSS</span>,{" "}
  <span className="text-pink-400 font-semibold">Three.js</span>,{" "}& 
  <span className="text-green-400 font-semibold">GSAP</span>{" "}

</div>


        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Ayush Dhakre. All rights reserved.
        </p>
      </div>
      
    </footer>
  );
};

export default Footer;
