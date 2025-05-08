export const personalInfo = {
  firstName: "Itesh",
  lastName: "Singh",
  fullName: "Itesh Singh",
  role: "Software Engineer",
  description: "Aspiring Software Developer and Tech Enthusiast with real-world experience in full-stack development, AI integration, and automation. Eager to keep learning and contribute to projects at the intersection of software engineering and artificial intelligence.",
  location: "60 B Block, Sector 30, Noida, Uttar Pradesh 144411",
  email: "petrioteer007@gmail.com",
  phone: "+91 6262803216",
  github: "https://github.com/petrioteer",
  linkedin: "https://linkedin.com/in/petrioteer",
  resumeLink: "https://drive.google.com/file/d/1eFgkN_vedqHOzGcb8Euvjq9LVS-GeYkk/view?usp=sharing",
};

export const navigationLinks = [
  { id: "home", name: "Home", href: "/" },
  { id: "experience", name: "Experience", href: "/experience" },
  { id: "projects", name: "Projects", href: "/projects" },
  { id: "contact", name: "Contact", href: "/contact" },
];

export const skills = {
  technical: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "React.js", 
    "Node.js", 
    "TypeScript", 
    "HTML5/CSS3", 
    "Tailwind CSS", 
    "MongoDB",
    "Git",
    "SQL",
    "Next.js"
  ],
  softSkills: [
    "Problem Solving",
    "Technical Leadership", 
    "Team Collaboration",
    "Project Management",
    "Critical Thinking",
    "Communication"
  ]
};

export const experience = [
  {
    id: 1,
    title: "Full-Stack Web Developer",
    company: "SootraClothing.com",
    location: "Remote",
    date: "April 2025 - Present",
    description: [
      "Leading the development of a full-fledged e-commerce website for Sootra Clothing, a traditional fashion brand, using React.js for the frontend, Node.js for the backend, MongoDB for the database, and Tailwind CSS for styling.",
      "Building all core website pages from scratch, including the Homepage, Product Page, Shop Page, Cart, Login, Signup, and Purchase pages, while ensuring clean UI/UX and smooth user navigation.",
      "Currently working on the frontend, focusing on responsive layouts, reusable components, and user-friendly design that adapts well to both desktop and mobile screens.",
      "Collaborating closely with the client to align the technical structure with the brand's identity and business needs, while planning backend features such as order management, user authentication, and payment handling.",
      "Using Vercel for live deployment and continuous integration to test and publish changes quickly during development."
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Vercel", "JavaScript", "Git"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Dia Moderator",
    description: "A comprehensive multi-platform content moderation system for Discord, WhatsApp, and Telegram. It automatically warns, bans, and educates users on the fly based on customizable rules while keeping things fun and under control.",
    technologies: ["JavaScript", "React.js", "Node.js", "Discord.js", "Whatsapp-web.js", "Telegram Bot API", "Google Gemini AI"],
    github: "https://github.com/DiaLabs/dia-moderator",
    demo: "https://dia-moderator.up.railway.app/",
    image: "/fintrack.jpg",
    details: [
      "Built with a modern architecture featuring a React frontend and Node.js backend",
      "Integrated with multiple messaging platforms (Discord, WhatsApp, Telegram) from a single interface",
      "Implemented AI-powered interactions using Google's Gemini for natural language conversations",
      "Created a robust warning system with configurable thresholds for different violation types",
      "Designed a centralized dashboard to monitor all bots with real-time updates"
    ]
  },
  {
    id: 2,
    title: "Dia Therapist",
    description: "An AI-powered therapist tailored specifically for Gen Z users. Provides mental health support, conversation, and resources in a format that resonates with younger audiences.",
    technologies: ["TypeScript", "Next.js", "React.js", "CSS", "AI Integration"],
    github: "https://github.com/petrioteer/dia-therapist",
    demo: "https://dia-therapist.vercel.app",
    image: "/ecommerce.jpg",
    details: [
      "Created a responsive, modern user interface designed specifically for Gen Z users",
      "Implemented advanced natural language processing for therapeutic conversations",
      "Built with Next.js and TypeScript for optimal performance and type safety",
      "Deployed on Vercel for reliable hosting and automatic scaling"
    ]
  },
  {
    id: 3,
    title: "Velo Rapido",
    description: "A comprehensive web-based bike rental management system designed to streamline the process of renting bicycles, scooters, and motorcycles. Features intuitive interfaces for both customers and administrators.",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript", "Leaflet.js"],
    github: "https://github.com/petrioteer/velo-rapido",
    demo: "https://velo-rapido-demo.netlify.app",
    image: "/devcollab.jpg",
    details: [
      "Developed secure user registration and authentication system",
      "Created comprehensive admin features for fleet management, reservation tracking, and analytics",
      "Implemented map functionality using Leaflet.js for location-based services",
      "Designed a complete database schema with tables for users, bikes, reservations, payments, and maintenance"
    ]
  },
  {
    id: 4,
    title: "LPU WiFi Auto-Login",
    description: "A utility tool that automates the tedious process of logging into LPU WiFi network. Includes both a Python script and Chrome extension to save time and reduce hassle for university students.",
    technologies: ["JavaScript", "Python", "HTML", "CSS", "Chrome Extension API", "Selenium"],
    github: "https://github.com/petrioteer/lpu-wifi-automate-login",
    demo: "https://github.com/petrioteer/lpu-wifi-automate-login",
    image: "/healthtracker.jpg",
    details: [
      "Built a Chrome extension for one-click login to campus WiFi",
      "Created a Python automation script using Selenium for background login",
      "Implemented secure credential storage with proper encryption",
      "Designed the solution to run automatically at system startup"
    ]
  },
  {
    id: 5,
    title: "Sootra Clothing",
    description: "A modern e-commerce website for a clothing brand, featuring product browsing, shopping cart functionality, user authentication, and secure checkout process.",
    technologies: ["TypeScript", "Next.js", "React.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/petrioteer/sootra-clothing",
    demo: "https://sootra-clothing.vercel.app",
    image: "/fintrack.jpg",
    details: [
      "Built with Next.js and TypeScript for optimal performance and type safety",
      "Implemented responsive design with Tailwind CSS for a seamless experience across all devices",
      "Created modern UI components for product browsing and shopping experience",
      "Deployed on Vercel for reliable hosting with automatic scaling"
    ]
  }
];

export const about = {
  title: "About Me",
  description: [
    "I am a passionate Full Stack Developer with 6+ years of experience, specializing in building modern web applications using React.js, Node.js, and cloud technologies.",
    "With a strong foundation in both frontend and backend development, I enjoy architecting scalable solutions that deliver exceptional user experiences while solving complex business challenges.",
    "Throughout my career, i've led various projects from financial dashboards to collaboration platforms, applying my expertise in JavaScript/TypeScript ecosystems and cloud services.",
    "I'm committed to writing clean, maintainable code and staying current with industry best practices. When I'm not coding, I contribute to open-source projects and mentor junior developers to give back to the community."
  ]
};
export const education = [
  {
    id: 1,
    degree: "MSc in Computer Science",
    institution: "University of London",
    location: "London, UK",
    date: "2014 - 2016",
    description: "Specialized in software engineering and distributed systems. Graduated with distinction."
  },
  {
    id: 2,
    degree: "BSc in Computer Science",
    institution: "University of Manchester",
    location: "Manchester, UK",
    date: "2010 - 2014",
    description: "First-class honors with focus on programming fundamentals, data structures, and web technologies."
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    id: 2,
    name: "Professional React Developer",
    issuer: "Meta (Facebook)",
    date: "2022",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
  },
  {
    id: 3,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2021",
    link: "https://university.mongodb.com/certification"
  },
  {
    id: 4,
    name: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    date: "2020",
    link: "https://www.scrumalliance.org/certifications/practitioners/certified-scrummaster-csm"
  }
];