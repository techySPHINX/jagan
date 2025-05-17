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
    name: "Testimonials",
    link: "#testimonials",
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
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
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
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },

  {
    name: "FullStack Developer",
    modelPath: "/models/node-transformed_backend.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "DevOps Engineer",
    modelPath: "/models/3d_github_logo.glb",
    scale: 5,
    rotation: [0, 0, 0],
  },
  {
    name: "Cloud Engineer",
    modelPath: "/models/aws_logo.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  // {
  //   name: "Project Manager",
  //   modelPath: "/models/git-svg-transformed.glb",
  //   scale: 0.05,
  //   rotation: [0, -Math.PI / 4, 0],
  // },
];

const expCards = [
  {
    companyName: "ConvertAPI", // ✅ Added for styled text
    review:
      "Jagan's internship at ConvertAPI showcased his ability to drive impactful improvements. His strategic contributions led to significant SEO and revenue growth, and his development work expanded the platform's reach.",
    logoPath: "/images/logo1.png",
    title: "Software Engineer Intern",
    date: "October 2024 - January 2025",
    responsibilities: [
      "Increased SEO performance by 30% through strategic optimizations.",
      "Successfully deployed affiliate services, contributing to a 15% revenue increase.",
      "Expanded user base by 25,000+ (20% growth) via new service development.",
    ],
  },
  {
    companyName: "LectureNotes", // ✅ Added for styled text
    review:
      "Jagan made a strong impact at LectureNotes by streamlining DevOps workflows. His automation of CI/CD pipelines and infrastructure optimizations greatly improved deployment speed and reliability.",
    logoPath: "/images/logo2.png",
    title: "DevOps Engineer",
    date: "May 2024 - June 2024",
    responsibilities: [
      "Automated CI/CD pipelines for Docker, reducing deployment time by 40%.",
      "Optimized infrastructure management, improving issue resolution by 35%.",
    ],
  },
  {
    companyName: "Intel", // ✅ Added for styled text
    review:
      "Jagan's time at Intel was marked by a strong drive to learn and improve. His collaborative approach and testing efforts led to measurable improvements in product quality and efficiency.",
    logoPath: "/images/logo3.png",
    title: "Industrial Trainee (Remote)",
    date: "May 2024 - July 2024",
    responsibilities: [
      "Enhanced practical knowledge by 15% through industry collaborations.",
      "Improved product quality and reduced downtime by 30% via testing and support.",
    ],
  },
  {
    companyName: "ZinfyTechWeb", // ✅ Added for styled text
    review:
      "Jagan demonstrated strong backend development skills at ZinfyTechWeb Solutions. His work on automation and scalable systems significantly enhanced development efficiency.",
    logoPath: "/images/logo4.png",
    title: "Backend Developer",
    date: "February 2024 - March 2024",
    responsibilities: [
      "Developed scalable backend solutions using Nest.js, Express.js, PostgresSql and GraphQL.",
      "Automated workflows, reducing manual effort by 40% with AWS and improving efficiency.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/3.png",
  },
  {
    name: "logo4",
    imgPath: "/images/4.png",
  },
];

const testimonials = [
  {
    name: "Shesh Kumar Sharma",
    mentions: "@sheshsharma",
    review:
      "I can’t say enough good things about Jagan. He was able to take our complex project requirements and turn them into a seamless, functional website and helped in Zoho. His problem-solving abilities are outstanding.",
  },
  {
    name: "Abhinash Thakur",
    mentions: "@thakurabhinash",
    review:
      "Working with Jagan was a fantastic experience. He transformed our outdated platform into a modern, infrastructure platform with all scalability and reliability. Highly recommend him for any backend and cloud projects.",
  },
  {
    name: "Logesh Chandran",
    mentions: "@logesh",
    review:
      "Collaborating with Jagan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. ",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "medium",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
