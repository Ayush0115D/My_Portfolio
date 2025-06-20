const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 50, suffix: "+", label: "Questions solved" },
  { value: 4, suffix: "+", label: "Certifications" },

];

const logoIconsList = [
  {
    imgPath: "/images/logos/HTML5.png"
  },
  {
    imgPath: "/images/logos/CSS3.png",
  },
  {
    imgPath: "/images/logos/git.svg",
  },
  {
    imgPath: "/images/logos/JavaScript.png",
  },
  {
    imgPath: "/images/logos/NPM.png",
  },
  {
    imgPath: "/images/logos/node.png",
  },
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/Vite.js.png",
  },
  {
    imgPath: "/images/logos/three.png",
  },
  {
    imgPath: "/images/logos/Tailwind CSS.png",
  },
  {
    imgPath: "/images/logos/Java.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Frontend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Java Developer",
    imgPath: "/images/logos/java.png",
  },
  

];

const techStackIcons = [
  {
    name: "Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Web Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Developed a interview platform where u can practice for interviews with the help of vapi real ai voice agent.With the help of Node.js and Tailwind CSS, i build a responsive and optimized website,along with firebase as a database",
    imgPath: "/images/exp1.png",
    logoPath: "/images/web.svg",
    title: "Web Developer",
    date: "June 2024 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the website.",
      "Build a interview website with ai voice agent using nodejs",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Solved different questions on core java and dsa for enhancing problem solving skills.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/Java.png",
    title: "JAVA Developer",
    date: "October 2023 - Present",
    responsibilities: [
      "A dedicated coder with strong proficiency in Java and in Data Structures and Algorithms (DSA). I have wide range of knowledge on core data structures such as arrays, linked lists, stacks, queues, trees, and hashmaps. I am well-aware about algorithmic techniques including recursion,backtracking, sorting, searching .",
      " My Java skills also include understanding of object-oriented programming (OOP), collections framework, and exception handling",
    ],
  },
  {
    review: "Made a optimized and responsive porflio website with the help of React and Tailwind CSS.With the help of three.js i have made 3d models for my website and For better animations i used GSAP too look website more attractive and responsive",
    imgPath: "/images/exp3.png",
    logoPath: "/images/react.png",
    title: "Frontend Developer",
    date: " November 2023- Present",
    responsibilities: [
      "I have hands-on experience with core web technologies including HTML5, CSS3, and JavaScript, and I actively work with modern libraries and frameworks such as React.js and Tailwind CSS to develop dynamic and visually appealing applications.",
      "My skill set includes creating reusable components, managing state, handling APIs, and implementing responsive design for cross-device compatibility. I am familiar with version control using Git & GitHub, and I follow best practices in UI/UX to deliver seamless user experiences",

      "Build a portfolio website with the help of react and use of GSAP for better animations,UI and for optimal performance.Its engine is designed to work more effciently than others. ",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3", 
    imgPath: "/images/logo3.png",
  },
];

const certifications = [
  {
    name: "Introduction to Cyber Security",
    description:"This course by Infosys Springboard introduces learners to core machine learning concepts using Python. It covers data preprocessing, visualization, and model building using libraries like Pandas, Matplotlib, and scikit-learn. The course includes hands-on projects and a capstone to apply skills in real-world scenarios, making it ideal for beginners with basic Python knowledge."
   
  },
  {
    name: "Fundamentals of machine learning with scikit-learn ",
    description:"The Fundamentals of Cyber Security course by Infosys Springboard teaches the basics of protecting digital information It explains key ideas like keeping data safe secure and accurate It covers common cyber threats how to defend networks and how encryption works It is a beginner friendly course for anyone interested in learning about online safety and digital security"
  },
  {
    name: "Fundamentals of Web Development",
    description:"The Fundamentals of Web Development course by Simplilearn teaches how to build websites using html css and javascript It covers basic web design responsive layouts and simple interactive features It is meant for beginners who want to start creating web pages and applications"
  },
  {
    name: "My Resume",
    link: "/Resume.pdf",
    
  },
  {
    name:"IBM SkillsBuild Project-Based Learning Program",
    description:" A 4-week project-based certification program focused on front-end web development. Built websites using HTML, CSS, JavaScript, and GitHub while collaborating in a team-based environment."
  },
  {
    name:"DMRC Internship ",
   description:"The DMRC (Delhi Metro Rail Corporation) Web Development Internship is a 2‑month immersive program within the IT department of one of India's most prestigious public transport organizations.In just a few months, you'll contribute meaningfully to DMRC’s digital systems, enhance your coding and problem-solving abilities, and experience professional workflows in a high-impact environment."
  },
];

const socialImgs = [
  {
    name: "github",
    url:"https://github.com/Ayush0115D",
    imgPath: "/images/github.svg",
  },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    url:"https://www.linkedin.com/in/ayushdhakre/",
    imgPath: "/images/linkedin.png",
  },
  // {
  //   name:"gmail",
  //   url:"dhakreayush578@gmail.com",
  //   imgPath:"images/mail.png"
  // }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  certifications,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};