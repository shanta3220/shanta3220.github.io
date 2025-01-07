export const projectsData = [
  {
    title: "JiffyGames",
    year: "Dec 2024",
    shortDescription:
      "Instant access to browser-based games with social features like leaderboards and profiles.",
    description: `Created a Full-Stack web application as a solo developer from scratch for my BrainStation's capstone project.
   • Designed and create all page templates on Canva
   • Implement Login, Signup, Home, Game, Game List Leaderboard, Leaderboard List and Game List pages on Vite-React Application.
   • Connected the frontend with backend using Axios for the all pages such as User Profile, sign up and game pages
   • Integrate Personal Unity3D WebGL games in the react application
   • Create Backend endpoints with Node.js, Express.js
   • Create a MySQL database for all the games, leaderbord-scores, users and comments tables and used Knex.js to fetch the data from the database`,
    skills: [
      "React.js",
      "JavaScript",
      "Sass",
      "Node.js",
      "Express.js",
      "Knex.js",
      "MySQL",
      "Unity3D",
      "C#",
      "Git",
      "Github",
    ],
    media: [{ type: "image", src: "/medias/jiffygames/jiffygames.png" }],
    category: "Web",
  },
  {
    title: "InStock",
    year: "Nov 2024",
    shortDescription:
      "A web-based platform for real-time warehouse and inventory tracking and management",
    description: `Collaborated with BrainStation classmates in creating the Full-Stack Application. My contributions include as Full-Stack Developer:
    • Implemented the Warehouse Details, Add New Warehouse responsive pages from scratch. 
    • Helped peers in fixing issues with Inventory and Inventory page.
    • Setup and create routes and database controllers for warehouse and inventory.
    • Create Mysql database and seed data with Knex.js
    • Created backend GET, POST, PUT endpoints with Node.js and Knex.js, for seamless data connectivity
    • Tested rigorously frontend UI issues to ensure a smooth user experience.`,

    skills: [
      "JavaScript",
      "Vite",
      "Jira",
      "React.js",
      "Sass",
      "React Router Dom",
      "Node.js",
      "Express.js",
      "MySQL",
      "Knex.js",
      "Git",
      "Postman",
      "Team Collaboration",
      "Task Prioritization",
    ],
    media: [{ type: "image", src: "/medias/instock/instock.png" }],
    category: "Web",
  },
  {
    title: "Just for Laughs",
    year: "Nov 2024",
    shortDescription:
      "Full-stack app generating personalized images based on user inputs with OpenAI integration.",
    description: `Developed during a 24-hour hackathon judged by Meta panelists. My contributions include:
  • Collaborated in building a full-stack app using React and Express, where the backend handled personalized jokes stored in a MySQL database.
  • Utilized OpenAI for generating AI-powered images based on user inputs like hobbies, age, mood, and humor type.
  • Created Jokes, and all categories like hobbbies, age, mood, humor type tables seed data in a MySql database
  • Created backend GET endpoints, for seamless data connectivity and debugged frontend UI issues to ensure a smooth user experience.`,
    skills: [
      "React.js",
      "JavaScript",
      "Sass",
      "Node.js",
      "Express.js",
      "MySQL",
      "OpenAI",
      "AI Integration",
      "Git",
      "Team Collaboration",
      "Problem-Solving",
    ],
    media: [
      { type: "image", src: "/medias/just_for_laughs/just_for_laughs.jpg" },
    ],
    category: "Web",
  },
  {
    title: "BrainFlix",
    year: "Oct 2023",
    shortDescription:
      "Responsive platform with video playback, comments, and dynamic rendering.",
    description: `Features responsive design for seamless viewing across devices.
  Includes video playback, a comment section, and dynamic content rendering.
  Provides users with an engaging and interactive video experience.`,
    skills: [
      "JavaScript",
      "Sass",
      "Vite",
      "React.js",
      "Node.js",
      "Express.js",
      "Github",
    ],
    media: [{ type: "image", src: "/medias/brainflix/brainflix.png" }],
    category: "Web",
  },
  {
    title: "CoffeeShop",
    year: "Sep 2023",
    shortDescription:
      "Static, browser-based website providing users with information about premium coffee products.",
    description: `Static, browser-based website providing users with information about premium coffee products.
  Features sections like 'Our Products' and 'We're Different' to highlight offerings.
  Serves as a straightforward platform for users to learn about Nitro Coffee's products and promotions.`,
    skills: ["HTML", "CSS"],
    media: [{ type: "image", src: "/medias/coffeeshop/coffeeshop.png" }],
    category: "Web",
  },
  {
    title: "BandSite",
    year: "Oct 2023",
    shortDescription:
      "Responsive application for band profiles, with DOM manipulation and API integration.",
    description: `Responsive web application developed using front-end technologies.
  Demonstrates proficiency in DOM manipulation and API integration.
  Features sections for band information and user engagement.`,
    skills: ["JavaScript", "Axios", "HTML", "Sass"],
    media: [{ type: "image", src: "/medias/bandsite/bandsite.gif" }],
    category: "Web",
  },

  {
    title: "Nimoyd",
    year: "Feb 2020 - June 2024",
    shortDescription:
      "Responsive application for band profiles, with DOM manipulation and API integration.",
    description: `Implemented UI into the game, iterating multiple times to enhance usability and visual consistency.",
      • Completed 949 tasks in Trello—the highest in the team due to long tenure.",
      • Mentored a junior developer to contribute significantly to key game features.",
      • Worked with a team of over 30 contributors, including current and former members, to ensure design consistency and cohesive execution.",
      • Resolved 30% of reported bugs, improving game stability, and conducted code reviews to ensure high-quality code.`,
    skills: [
      "Unity3D",
      "C#",
      "Trello",
      "Github",
      "SourceTree",
      "Team Collaboration",
    ],
    media: [
      {
        type: "image",
        src: "/medias/nimoyd/chest_inventory_ui.webp",
        title: "Chest Inventory Screen",
        shortDescription:
          "Chest inventory featuring player inventory in the middle and chest inventory on the left.",
        longDescription:
          "Implemented the Chest Inventory UI:\n• Added drag-and-drop functionality for items.\n• Enabled item swapping and dynamic updates to inventory.\n• Ensured responsiveness across mobile and desktop.",
        year: "2022",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/main_ui.png",
        title: "Main Screen",
        shortDescription: "Default main screen during gameplay.",
        longDescription:
          "Implemented core UI elements for gameplay:\n• Added quick item slots at the bottom with keyboard shortcuts.\n• Developed bottom-left mouseover voxel item name, dynamically updating based on mouse position.\n• Created health bar and notification cells on the left.\n• Interactive behavior for the right minimap and clock.\n• Ensured responsive design for multiple devices.",
        year: "2022",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/world_map_ui.jpg",
        title: "World Map Screen",
        shortDescription:
          "Clickable building icons with details on interaction.",
        longDescription:
          "Implemented interactivity for the world map:\n• Updated building icons and ensured dynamic interactions.\n• Integrated functionality to display detailed information on click.\n• Ensured responsiveness across devices.",
        year: "2023",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/npc_conversation_ui.png",
        title: "NPC Quest Screen",
        shortDescription: "Interact with NPCs and view their details.",
        longDescription:
          "Implemented NPC Quest UI features:\n• Built the UI from scratch with responsive design.\n• Added animations for interactive elements.\n• Ensured camera alignment with NPCs during interactions.",
        year: "2022",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/worker_selection_ui.png",
        title: "Worker Selection Screen",
        shortDescription: "Displays Worker NPCs in a circular grid.",
        longDescription:
          "Implemented dynamic worker selection features:\n• Created UI to update the worker list based on active category.\n• Added building detail information on the right.\n• Ensured responsive design across devices.",
        year: "2023",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/world_creation_ui.jpg",
        title: "World Creation Screen",
        shortDescription: "UI for creating a new game world.",
        longDescription:
          "Implemented features for world creation:\n• Added dynamic updates for info based on categories such as General and Weather.\n• Ensured functionality of all buttons.\n• Modified backend logic to support seamless UI interactions.",
        year: "2023",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/character_ui.jpg",
        title: "Character Screen",
        shortDescription: "Track character progress and stats.",
        longDescription:
          "Implemented character UI:\n• Included user's current progress and stats upgrade features.\n• Added ui animations for interactivity.\n• Ensured the UI was fully responsive across devices.",
        year: "2021",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/character_selection_ui.webp",
        title: "Character Creation Screen",
        shortDescription:
          "Select a character to play in the game, set traits and gender.",
        longDescription:
          "Implemented character customization features:\n• Built a dynamic UI for character creation.\n• Enabled dynamic updates for traits and gender selection.\n• Ensured data saved to the game database and responsive design.",
        year: "2022",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/social_journal_ui.jpg",
        title: "Social Journal Screen",
        shortDescription: "Track Quest NPCs based on factions.",
        longDescription:
          "Implemented faction-based journal features:\n• Built a grid-based UI to dynamically display NPC profiles by faction.\n• Ensured consistent layout and responsive design.",
        year: "2022",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/excavation_site_ui.jpg",
        title: "Excavation Site Screen",
        shortDescription: "Excavate different excavation site buildings.",
        longDescription:
          "Implemented excavation UI with stage-based interactions:\n• Developed a UI stage system for excavated, available, and locked states.\n• Ensured the design dynamically adapts based on active stage.\n• Made the UI fully responsive.",
        year: "2021",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/building_mode_ui.png",
        title: "Building Grid Screen",
        shortDescription:
          "Create templates or place buildings in the game world.",
        longDescription:
          "Implemented the building grid UI:\n• Developed the UI to display buildings based on categories and subcategories.\n• Updated item details dynamically based on user selections and interactions.\n• Ensured full responsiveness across devices.",
        year: "2022",
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/building_crafting_ui.png",
        title: "Building Details Screen",
        shortDescription: "Craft items and generate energy in buildings.",
        longDescription:
          "Implemented the building details UI:\n• Added features to update recipes and player inventory based on the building's category.\n• Developed the UI to display crafting progress and item details dynamically.\n• Ensured smooth interactions for crafting actions and item generation.\n• Made the UI fully responsive across devices.",
        year: "2022",
        github: null,
        website: "https://www.nimoyd.com",
        skills: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "/medias/nimoyd/journal_ui.jpg",
        title: "Journal Screen",
        shortDescription: "Check conversation logs and quest progress.",
        longDescription:
          "Implemented journal tracking system:\n• Built a responsive journal UI where quests and notes update dynamically based on user actions.\n• Ensured consistent layout and synchronized data with user progress.",
        year: "2021",
        github: null,
        website: "https://www.nimoyd.com",
        skills: [
          "Unity3D",
          "C#",
          "Visual Studio C++,",
          "Git",
          "SourceTree",
          "Trello",
        ],
      },
    ],
    category: "Games",
  },
];

const categories = [
  "All",
  ...new Set(projectsData.map((project) => project.category)),
];

export const getProjectsByCategory = (category) => {
  if (!categories) {
    categories.warn("no categories, add categories to projects");
    return [];
  }
  if (!category) {
    categories.console.error("category is undefined");
    return [];
  }
  if (category === "All") {
    return projectsData;
  }
  return projectsData.filter((project) => project.category === category);
};

export const getAllCategories = () => {
  return categories;
};
