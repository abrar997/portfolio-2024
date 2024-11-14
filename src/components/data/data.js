const DataComponents = {
  menu: [
    { id: 1, title: "home", to: "/" },
    { id: 3, title: "skills", to: "skills" },
    { id: 4, title: "experience", to: "experience" },
    { id: 5, title: "projects", to: "projects" },
    { id: 6, title: "contact us", to: "contact" },
  ],
  skillsData: {
    frontend: [
      { id: 1, name: "HTML,HTML5" },
      { id: 13, name: "CSS,CSS3" },
      { id: 14, name: "Java script" },
      { id: 15, name: "Typescript" },
      { id: 16, name: "React JS" },
      { id: 2, name: "Next JS" },
      { id: 3, name: "Context API" },
      { id: 4, name: "Redux" },
      { id: 5, name: "Redux Toolkit" },
      { id: 6, name: "Tailwind css" },
      { id: 7, name: "Bootstrap" },
      { id: 8, name: "Framer motion" },
      { id: 9, name: "Headless UI" },
      { id: 10, name: "Swiper JS" },
      { id: 11, name: "React Hook Form" },
      { id: 12, name: "clsx" },
    ],
    language: [
      { id: 1, name: "Java script" },
      { id: 2, name: "Typescript" },
    ],
    tools: [
      { id: 1, name: "Github" },
      { id: 2, name: "Bitbucket" },
      { id: 3, name: "Jira" },
      { id: 4, name: "Netlify" },
      { id: 5, name: "Vercel" },
      { id: 6, name: "Figma" },
    ],
  },
  experienceData: [
    {
      id: 1,
      for: "Plly",
      city: "Manila",
      job: "Frontend",
      type: "remotely",
      date: "2022-Aug / 2023-Nov",
      responsibilities: [
        {
          id: 1,
          item: "Developed a dynamic website builder's front-end using React.js, focusing on responsiveness and user-friendliness.",
        },
        {
          id: 2,
          item: "Create components to different categories.",
        },
        { id: 3, item: "Design templates by using components." },
        {
          id: 4,
          item: "Design 3d components by using 3d models and fix it by blinder app then develop it.",
        },
      ],
      skillsUsed:
        "React js , tailwind css , framer motion , headless UI , Babylon js , Next js, Figma ,Swiper JS, clsx , react-hook-form , css , Blind",
    },
    {
      id: 2,
      for: "Techboom",
      city: "Manila",
      job: "Frontend",
      type: "remotely",
      date: "2023-Des / 2024-Mar",
      responsibilities: [
        {
          id: 1,
          item: "Developed a dynamic website builder's front-end using React.js, focusing on responsiveness and user-friendliness.",
        },
        {
          id: 2,
          item: "Update editor page , components and develop templates as websites",
        },
      ],
      skillsUsed:
        "React js , tailwind css , framer motion , headless UI , react-hook-form , css",
    },
    {
      id: 3,
      for: "Accommodation Network",
      city: "New York",
      job: "Frontend",
      type: "remotely",
      date: "2024-Feb",
      link: "https://www.accommodation.network/",
      responsibilities: [
        {
          id: 1,
          item: "Frontend developer for this website  ",
        },
        {
          id: 2,
          item: "update UI design and check it with customer",
        },
      ],
      skillsUsed:
        "Next JS , framer motion , react icons , react scroll , react-spinners",
    },
  ],
  projects: [
    {
      id: 1,
      title: "Furniture Ecommerrece",
      url: "./assets/furniture.png",
      skillsUsed: "HTML , CSS , JS , Tailwind css",
      github: "https://github.com/abrar997/furniture-ecom.git",
      demo: "https://abrar997.github.io/furniture-ecom/register.html",
    },
    {
      id: 2,
      title: "Accommodation Network",
      url: "./assets/tech.png",
      skillsUsed:
        "Next js ,tailwind css , typescript , framer-motion , headless UI , react-scroll , react-spinners",
      demo: "https://www.accommodation.network/",
    },
    {
      id: 3,
      title: "Todo App",
      url: "./assets/crud.png",
      skillsUsed: "HTML , CSS , JS",
      github: "https://github.com/abrar997/crud",
      demo: "https://crud-delta-tawny.vercel.app/",
    },
    {
      id: 4,
      title: "3D Portfolio",
      url: "./assets/port.png",
      skillsUsed: "Next js , babylon js , tailwind css , typescript",
      github: "https://github.com/abrar997/3d-first",
      demo: "https://3d-first.vercel.app/",
    },
    {
      id: 5,
      title: "FA nursery",
      url: "./assets/FA.png",
      skillsUsed:
        "Next js , Babylon js , tailwind css , Typescript , Framer-motion",
      github: "https://github.com/abrar997/3d-project2",
      demo: "https://3d-project2.vercel.app/",
    },
    {
      id: 6,
      title: "Template Ecommerce for shopping",
      url: "./assets/ecom.png",
      skillsUsed: "HTML , CSS , JS , tailwind css , Swiper js",
      github: "https://github.com/abrar997/ecommerce-js",
      demo: "https://ecommerce-js-vt44.vercel.app/",
    },

    {
      id: 7,
      title: "Crud system management",
      url: "./assets/crud2.png",
      skillsUsed: "React Js , Tailwind css , react icons",
      github: "https://github.com/abrar997/crud-system-managment.git",
      demo: "https://crud-system-managment.vercel.app/",
    },
    {
      id: 8,
      title: "Portfolio",
      url: "./assets/port2.png",
      skillsUsed: "React js , css , tailwind css , framer-motion , ",
      github: "https://github.com/abrar997/test",
      demo: "https://test-abrar997.vercel.app/",
    },
  ],
  contact: {
    social: [
      {
        id: 1,
        title: "email",
        url: "abraralrawi997@gmail.com",
        text: "abraralrawi997@gmail.com",
      },
      { id: 2, title: "phone", url: "9647831190254", text: "+9647831190254" },
      {
        id: 3,
        title: "github",
        url: "https://github.com/abrar997",
        text: "Abrar Muthana",
      },
    ],
    inputs: [
      {
        id: 1,
        label: "name",
        placeholder: "Muthana",
        type: "text",
        for: "name",
      },
      {
        id: 2,
        label: "email",
        placeholder: "abraralrawi997@gmail.com",
        type: "email",
        for: "email",
      },
      {
        id: 3,
        label: "message",
        placeholder: "Hello Abrar '-' , ",
        type: "textarea",
        for: "message",
      },
    ],
  },
};

export default DataComponents;
