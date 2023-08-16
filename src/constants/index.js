import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pluralsight,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Responsive Design",
    icon: web,
  },
  {
    title: "State Management",
    icon: mobile,
  },
  {
    title: "Unit Testing",
    icon: backend,
  },
  {
    title: "Dynamic Interfaces",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const courses = [
  {
    title: "JavaScript: Getting Started",
    company_name: "Pluralsight",
    icon: pluralsight,
    iconBg: "#383E56",
    date: "March 2021",
    description:
      "JavaScript is the popular programming language which powers web pages and web applications. If you are new to programming or just new to the language, this course will get you started coding in JavaScript.",
    credentialID: "804837c6-ac3c-4698-aebd-bc15f629e64e",
  },
  {
    title: "Angular: Getting Started",
    company_name: "Pluralsight",
    icon: pluralsight,
    iconBg: "#E6DEDD",
    date: "July 2022",
    description:
      "Angular is one of the fastest, most popular open source web app frameworks today, and knowing how to use it is essential for developers. You'll learn how to create components and user interfaces, data-binding, retrieving data using HTTP, and more.",
    credentialID: "12d7d1cc-b3ec-40b2-b13e-3c35e8ba07a5",
  },
  {
    title: "Angular Forms",
    company_name: "Pluralsight",
    icon: pluralsight,
    iconBg: "#383E56",
    date: "July 2022",
    description:
      "This course will cover the fundamentals of working with forms in Angular. You'll learn how to create forms, style them, and use data binding and validation. You'll be able to post a form to a server, and work with third-party form controls.",
    credentialID: "604a909e-ed7f-4d4b-949d-b341dc1d5046",
  },
  {
    title: "React 18: Fundamentals",
    company_name: "Pluralsight",
    icon: pluralsight,
    iconBg: "#E6DEDD",
    date: "December 2022",
    description:
      "Are you ready to write structured single page applications with one of the most popular JavaScript UI libraries around? This course teaches you everything that’s needed to write efficient and shining UIs for your web applications.",
    credentialID: "9a3771fa-626e-4708-8634-c49cc8616922",
  },
  {
    title: "React 18: Components",
    company_name: "Pluralsight",
    icon: pluralsight,
    iconBg: "#E6DEDD",
    date: "February 2023",
    description:
      "This course will teach you how to build React apps that use components in the best possible way while minimizing computer resources and maximizing browser UI experience.",
    credentialID: "7a535a45-10d4-4774-88a9-be02c7d98012",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, courses, testimonials, projects };
