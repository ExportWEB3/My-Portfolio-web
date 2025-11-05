import formualAiImg from "./assets/formula-ai-4ylf.vercel.app_.png"
import localhostImg from "./images/localhost_3000__5.webp"

export const testimonials = [
  {
    id: 1,
    name: "Michael Kurt ",
    role: "CEO, Luxe Interiors",
    image: "https://plus.unsplash.com/premium_photo-1661440102417-fe9ea01d0518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    quote: "The website is stunning — better than we imagined!",
    description:
      "Working with you was the best decision we made for our brand. The site you built not only looks premium, it runs flawlessly. Clients have praised how easy it is to use. You paid attention to every detail, and we truly love the final result.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Founder, FinSecure",
    image: "https://plus.unsplash.com/premium_photo-1661687347038-12b853e464bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    quote: "Impressed by the security and speed of the site.",
    description:
      "As a fintech startup, security was our biggest concern — and you delivered beyond expectations. The backend is rock solid, and load times are lightning fast. You took time to understand our goals and nailed every requirement.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mark Oslen",
    role: "Creative Director, Bloom Agency",
    image: "https://images.unsplash.com/photo-1601933552406-c6ea0739a098?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbiUyMGNvbXB1dGVyfGVufDB8fDB8fHww",
    quote: "Top-tier quality and such a smooth experience!",
    description:
      "From the UI design to mobile responsiveness, everything was executed beautifully. You brought my vision to life with precision and style. The animations are clean, the layout is intuitive, and the site feels super professional.",
    rating: 5,
  }
];

export const projects = [
  {
    id: 1,
    title: 'Tildette',
    date: 'May 15, 2025',
    description: 'Landing page built with Typescript and Tailwind for Tildette project.',
    image: '/src/images/proj1.png',
    tags: ['Typescript', 'Tailwind / Css', 'Landing Page', "Responsiveness"] ,
    link: 'https://exportweb3.github.io/Ad-Projects/',
     roles: [
      'Led frontend architecture and component design using React + TypeScript',
      'Built reusable, accessible UI components with Tailwind CSS and semantic HTML',
      'Implemented responsive layouts and cross-browser compatibility',
      'Optimized performance (code-splitting, lazy loading, image optimization)',
    ]
  },
  {
    id: 2,
    title: 'Formual Ai',
    date: 'May 15, 2025',
    description: 'Ai Assiatance that fixes every Spreadsheet related Problems.',
    image: formualAiImg,
    tags: ['Backend', 'Notification', 'OTP integration', 'Register/Login Page'],
    link: 'https://formula-ai-4ylf.vercel.app/',
     roles: [
      'Designed and implemented RESTful APIs and GraphQL endpoints',
      'Built robust backend services with Node.js/Express (or Nest) and integrated with databases',
      'Architected and maintained the database schema MongoDB and optimized queries',
      'Implemented authentication and authorization (JWT, OAuth) and secure session handling',
      'Integrated third‑party services (email, SMS/notification providers)',
      'Optimized performance and scalability (caching, indexing, load testing)',
      'Monitored app health (logging, error tracking, performance monitoring) and fixed production issues',
      'Collaborated with frontend to define APIs, handle edge cases and ensure smooth integration',
    ]
  },
  {
    id: 3,
    title: 'Mitsubscription',
    date: 'October 10, 2025',
    description: 'Description for Project Three.',
    image: localhostImg,
    tags: ['FrontEnd', 'UI/UX Dev', 'Responsive Design', "Accessibility"],
    roles: [
      'Led frontend architecture and component design using React + TypeScript',
      'Built reusable, accessible UI components with Tailwind CSS and semantic HTML',
      'Implemented responsive layouts and cross-browser compatibility',
      'Optimized performance (code-splitting, lazy loading, image optimization)',
    ]
  }
];

export const services = [
  {
    title: 'Full-Stack Development',
    bullets: [
      'Responsive UI/UX',
      'APIs & Integrations',
      'Performance Optimization',
      'Accessibility (WCAG) & Semantic HTML',
      'Automated Testing (unit, integration)',
      'CI/CD, deployments & environment management',
      'Monitoring, logging & error tracking',
      'Scalability & caching strategies'
    ],
    cta: 'Get In Touch'
  },
];


export const servicesDropdown = [
  {
    title: "Digital Web Development",
    No: "01",
    span: {
      first: "Portfolio Websites",
      second: "Agency Websites",
      third: "SaaS Websites",
      fourth: "Personal Branding Sites",
    },
    toggelText: "I create polished digital experiences that align with your brand and engage your audience—across websites, apps, and marketing visuals."
  },
  {
    title: "UI Kits & Design Systems",
    No: "02",
    span: {
      first: "Custom UI Kits",
      second: "Design Systems For Agencies",
      third: "Component Libraries",
      fourth: "Brand Style Guides",
    },
    toggelText: "I design cohesive UI kits and design systems that ensure consistency across all your digital products—enhancing brand identity and user experience."
  },
  {
    title: "E-commerce Development",
    No: "03",
    span: {
      first: "Shopify Stores",
      second: "WooCommerce Sites",
      third: "Custom E-commerce Solutions",
      fourth: "Payment Gateway Integration",
    },
    toggelText: "I build seamless e-commerce platforms that provide intuitive shopping experiences, secure transactions, and easy management—helping you grow your online presence."
  }
]

export const discoveryCards = [
  {
    title: "Discovery",
    description:
      "Understanding your goals, audience, and vision to set a clear direction before Web development begins.",
    variant: "card",
  },
  {
    title: "OnBoarding",
    description:
      "Outlining timelines, deliverables, and communication channels to ensure a smooth, aligned workflow from day one.",
    variant: "card",
  },
  {
    title: "Strategy",
    description:
      "Translating insights into structure—defining layout, content hierarchy, and user flow to guide the Website.",
    variant: "card",
  },
  {
    title: "Launch",
    description:
      "Bringing your vision to life—developing, testing, and refining the final product for a successful launch.",
    variant: "card",
  },
];

export const ctaCard = [
    {
    eyebrow: "Book your free audit call today",
    title: "Grab the Opportunity",
    subTitle: "Get Started today",
    subText: "Full-Stack Development",
    note: "( Get in touch )",
  },
]

export const faqs = [
  {
    title: "How customizable is the solution you’ll build for me?",
    answer:
      "Everything I build is fully customizable. Whether you need a unique design, custom API integration, or tailored backend logic, I’ll structure it to match your exact business goals.",
  },
  {
    title: "Will the website or app work on all devices?",
    answer:
      "Absolutely. I always build with responsive design in mind, so your site or app will look and function perfectly across mobile, tablet, and desktop.",
  },
  {
    title: "How soon can you launch my project?",
    answer:
      "Depending on the complexity, I can get a basic MVP live in a few days. For fully customized platforms, I’ll share a clear timeline upfront — and I stick to it.",
  },
  {
    title: "Can you support multi-language content if I need it?",
    answer:
      "Absolutely. I can implement multi-language support using best practices, ensuring your content is accessible to a global audience.",
  },
  {
    title: "Can you connect it to my existing tools or backend?",
    answer:
      "Definitely. I can integrate your system with any third-party service, internal backend, or custom API — whether it's REST, GraphQL, or something more specialized.",
  },
  {
    title: "What about security — is that something you handle?",
    answer:
      "Absolutely. I follow industry best practices to secure your application — from input validation and HTTPS enforcement to auth layers like JWT or OAuth.",
  },
];


export const stackCard = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];