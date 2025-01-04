import profileImage2 from "../assets/images/pic01.jpg";

export const experienceData = [
  {
    title: "Freelance Game Programmer",
    company: "Nudge Nudge Games GmbH",
    location: "Berlin, DE",
    year: "Feb 2020 - Jun 2024",
    description: [
      "Implemented UI into the game, iterating multiple times to enhance usability and visual consistency.",
      "Completed 949 tasks in Trello—the highest in the team due to long tenure.",
      "Mentored a junior developer to contribute significantly to key game features.",
      "Collaborated with a 30-person team on a major project, ensuring design consistency and cohesive execution.",
      "Resolved 30% of reported bugs, improving game stability, and conducted code reviews to ensure high-quality code.",
    ],
    website: "https://www.nimoyd.com",
    media: [
      {
        type: "image",
        src: "src/assets/projects/nimoyd/chest_inventory_ui.webp",
        title: "Chest Inventory Screen",
        shortDescription:
          "Chest inventory featuring player inventory in the middle and chest inventory on the left.",
        longDescription:
          "Implemented the Chest Inventory UI:\n• Added drag-and-drop functionality for items.\n• Enabled item swapping and dynamic updates to inventory.\n• Ensured responsiveness across mobile and desktop.",
        year: "2022",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/main_ui.png",
        title: "Main Screen",
        shortDescription: "Default main screen during gameplay.",
        longDescription:
          "Implemented core UI elements for gameplay:\n• Added quick item slots at the bottom with keyboard shortcuts.\n• Developed bottom-left mouseover voxel item name, dynamically updating based on mouse position.\n• Created health bar and notification cells on the left.\n• Interactive behavior for the right minimap and clock.\n• Ensured responsive design for multiple devices.",
        year: "2022",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/world_map_ui.jpg",
        title: "World Map Screen",
        shortDescription:
          "Clickable building icons with details on interaction.",
        longDescription:
          "Implemented interactivity for the world map:\n• Updated building icons and ensured dynamic interactions.\n• Integrated functionality to display detailed information on click.\n• Ensured responsiveness across devices.",
        year: "2023",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/npc_conversation_ui.png",
        title: "NPC Quest Screen",
        shortDescription: "Interact with NPCs and view their details.",
        longDescription:
          "Implemented NPC Quest UI features:\n• Built the UI from scratch with responsive design.\n• Added animations for interactive elements.\n• Ensured camera alignment with NPCs during interactions.",
        year: "2022",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/worker_selection_ui.png",
        title: "Worker Selection Screen",
        shortDescription: "Displays Worker NPCs in a circular grid.",
        longDescription:
          "Implemented dynamic worker selection features:\n• Created UI to update the worker list based on active category.\n• Added building detail information on the right.\n• Ensured responsive design across devices.",
        year: "2023",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/world_creation_ui.jpg",
        title: "World Creation Screen",
        shortDescription: "UI for creating a new game world.",
        longDescription:
          "Implemented features for world creation:\n• Added dynamic updates for info based on categories such as General and Weather.\n• Ensured functionality of all buttons.\n• Modified backend logic to support seamless UI interactions.",
        year: "2023",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/character_ui.jpg",
        title: "Character Screen",
        shortDescription: "Track character progress and stats.",
        longDescription:
          "Implemented character UI:\n• Included user's current progress and stats upgrade features.\n• Added ui animations for interactivity.\n• Ensured the UI was fully responsive across devices.",
        year: "2021",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/character_selection_ui.webp",
        title: "Character Creation Screen",
        shortDescription:
          "Select a character to play in the game, set traits and gender.",
        longDescription:
          "Implemented character customization features:\n• Built a dynamic UI for character creation.\n• Enabled dynamic updates for traits and gender selection.\n• Ensured data saved to the game database and responsive design.",
        year: "2022",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/social_journal_ui.jpg",
        title: "Social Journal Screen",
        shortDescription: "Track Quest NPCs based on factions.",
        longDescription:
          "Implemented faction-based journal features:\n• Built a grid-based UI to dynamically display NPC profiles by faction.\n• Ensured consistent layout and responsive design.",
        year: "2022",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/excavation_site_ui.jpg",
        title: "Excavation Site Screen",
        shortDescription: "Excavate different excavation site buildings.",
        longDescription:
          "Implemented excavation UI with stage-based interactions:\n• Developed a UI stage system for excavated, available, and locked states.\n• Ensured the design dynamically adapts based on active stage.\n• Made the UI fully responsive.",
        year: "2021",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/building_mode_ui.png",
        title: "Building Grid Screen",
        shortDescription:
          "Create templates or place buildings in the game world.",
        longDescription:
          "Implemented the building grid UI:\n• Developed the UI to display buildings based on categories and subcategories.\n• Updated item details dynamically based on user selections and interactions.\n• Ensured full responsiveness across devices.",
        year: "2022",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/building_crafting_ui.png",
        title: "Building Details Screen",
        shortDescription: "Craft items and generate energy in buildings.",
        longDescription:
          "Implemented the building details UI:\n• Added features to update recipes and player inventory based on the building's category.\n• Developed the UI to display crafting progress and item details dynamically.\n• Ensured smooth interactions for crafting actions and item generation.\n• Made the UI fully responsive across devices.",
        year: "2022",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
      {
        type: "image",
        src: "src/assets/projects/nimoyd/journal_ui.jpg",
        title: "Journal Screen",
        shortDescription: "Check conversation logs and quest progress.",
        longDescription:
          "Implemented journal tracking system:\n• Built a responsive journal UI where quests and notes update dynamically based on user actions.\n• Ensured consistent layout and synchronized data with user progress.",
        year: "2021",
        github: null,
        website: "https://www.nimoyd.com",
        technologies: ["Unity3D", "C#"],
      },
    ],
  },
  {
    title: "Part-Time Software Engineer",
    company: "Arcade Studios",
    location: "Dhaka, BD",
    year: "Jan 2020 - Sep 2020",
    description: [
      "Started with a small role in core feature development and quickly progressed to leading a personal project within a month.",
      "Collaborated with 10 engineers on GitHub, reviewing, testing, and ensuring seamless integration.",
      "Improved code quality and reduced integration issues by 25%.",
    ],
    website: "https://www.facebook.com/arcadestudiosbd",
  },
];
