import {
  mobile,
  backend,
  creator,
  web,
  delivery,
  anime,
  outdoors,
  pluralsight,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certificate",
    title: "Certificates",
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

const courses = [
  {
    title: "JavaScript: Getting Started",
    course_link:
      "https://app.pluralsight.com/library/courses/javascript-getting-started/table-of-contents",
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
    course_link:
      "https://app.pluralsight.com/library/courses/angular-2-getting-started-update/table-of-contents",
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
    course_link:
      "https://app.pluralsight.com/library/courses/angular-forms/table-of-contents",
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
    course_link:
      "https://app.pluralsight.com/library/courses/react-18-fundamentals/table-of-contents",
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
    course_link:
      "https://app.pluralsight.com/library/courses/react-18-working-components/table-of-contents",
    company_name: "Pluralsight",
    icon: pluralsight,
    iconBg: "#E6DEDD",
    date: "February 2023",
    description:
      "This course will teach you how to build React apps that use components in the best possible way while minimizing computer resources and maximizing browser UI experience.",
    credentialID: "7a535a45-10d4-4774-88a9-be02c7d98012",
  },
];

const projects = [
  {
    name: "Outdoors Website",
    description:
      "The homepage of a hiking shop's website that provides information about their products, how customers feel, and what they plan to do next.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: outdoors,
    source_code_link: "https://github.com/JaimeHerreraa/Outdoors-Website",
  },
  {
    name: "Delivery App",
    description:
      "Website for a delivery app that works on mobile devices. It looks good and has nice animations. It tells you about the services and benefits.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "bem",
        color: "green-text-gradient",
      },
      {
        name: "animations",
        color: "pink-text-gradient",
      },
    ],
    image: delivery,
    source_code_link: "https://github.com/JaimeHerreraa/Delivery-APP-Website",
  },
  {
    name: "My Anime App",
    description:
      "This web-based anime wiki boasts a vast collection of content and incorporates advanced features such as infinity scroll and pagination.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "ngrx",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: anime,
    source_code_link: "https://github.com/JaimeHerreraa/My-Anime-App",
  },
];

export { services, courses, projects };
