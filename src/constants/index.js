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
  { value: 7, suffix: "+", label: "Completed Projects" },
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
  {
    imgPath: "/images/logos/express-js.svg",
  },
  {
    imgPath: "/images/logos/Postman.png",
  },
  {
    imgPath: "/images/logos/MongoDB.png",
  },
  {
    imgPath: "/images/logos/next.js.svg",
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
    review: "Developed an interview practice platform featuring a real AI voice agent powered by Vapi. Built a responsive and optimized website using Node.js and Tailwind CSS, with Firebase integrated for real-time data management.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/web.svg",
    title: "Web Developer",
    date: "Jan 2025 - Present",
    responsibilities: [
      "Built and maintained user-facing features with focus on speed and scalability.",
      "Developed an interview website with AI voice agent using Next.js.",
      "Created a Lost & Found portal for Delhi Metro Rail Corporation (DMRC)",
      "Proficient in Git/GitHub and follow best practices for seamless user experiences..",
    ],
  },
  {
    review: "Solved a variety of Core Java and DSA problems to strengthen algorithmic thinking and enhance problem-solving skills.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/Java.png",
    title: "JAVA Developer",
    date: "October 2023 - Present",
    responsibilities: [
      "A dedicated coder with strong proficiency in Java and in Data Structures and Algorithms (DSA).",
      " I have wide range of knowledge on core data structures such as arrays, linked lists, stacks, queues, trees, and hashmaps. I am well-aware about algorithmic techniques including recursion,backtracking, sorting, searching.",
      " My Java skills also include understanding of object-oriented programming (OOP), collections framework, and exception handling.",
    ],
  },
  {
    review: "Built an optimized and responsive portfolio website using React and Tailwind CSS. Integrated 3D models with Three.js and enhanced visual appeal with smooth animations using GSAP.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/react.png",
    title: "Frontend Developer",
    date: " November 2023- Present",
    responsibilities: [
      "I have hands-on experience with core web technologies including HTML5, CSS3, and JavaScript, work with modern libraries and frameworks such as React.js and Tailwind CSS .",
      "My skill set includes creating reusable components, managing state, handling APIs, and implementing responsive design for cross-device compatibility." ,
      "Build a Currency Converter which fetches real-time exchange rates using an API to convert between different currencies. ",
      "Build a ToDoApp with Redux Toolkit and Games like TicTacToe and Stone,Paper and Scissors etc. ",
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
    description:" A 4-week project-based certification program focused on front-end web development. Built websites using HTML, CSS, JavaScript, React and GitHub while collaborating in a team-based environment."
  },
  {
    name:"DMRC Internship ",
   description:"The DMRC (Delhi Metro Rail Corporation) Web Development Internship is a 1‑month immersive program within the IT department of one of India's most prestigious public transport organizations . There I Developed a Lost & Found portal to report and retrieve lost items through a secure online system Enabled item verification and handover by DMRC officials using a structured request and validation workflow.It was built with using ReactJS, TailwindCSS, Express, MongoDB, and JWT authentication."
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