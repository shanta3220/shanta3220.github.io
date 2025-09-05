export const experienceData = [
  {
    title: "Software Developer",
    subTitle: "Heartline.App",
    location: "Calgary, AB, Canada",
    year: "May 2025 - Jul 2025",
    description: `• Took initiative to structure the TutorMatch project, breaking Figma designs into 50+ backend and frontend tasks in Microsoft Planner, cutting ramp-up time by 2+ weeks and improving workflow clarity.
    • Led a 5-member cross-functional team, ensuring aligned delivery through daily standups and structured workflows.
    • Built a modular backend in Go and PostgreSQL for dashboards; created utilities such as BlobStorage.go to streamline Azure Blob Storage uploads, improving reusability and reducing 2 days of dev time on Azure-integrated modules.
    • Owned the full-stack Stripe/Visa payment system, enabling session-based bundle purchases across backend and frontend.
    • Created responsive front-end pages in Next.js, focusing on usability and structured data-fetching.
    • Improved team productivity by promoting continuous Git commits, enforcing PR review practices, and launching a shared Postman API workspace, reducing miscommunication and accelerating API handoff.`,
    website: "https://heartline.app",
  },
  {
    title: "Teaching Assistant, Software Engineering",
    subTitle: "BrainStation",
    location: "Toronto, ON",
    year: "Jan 2025 - March 2025",
    description: `• Provided technical 1-on-1 mentorship to a cohort of 26 students, assisting with debugging and optimizing full-stack applications built using JavaScript, React, Node.js, Express, MySQL, HTML, CSS, and Git.
    • Led a week-long project as Project Manager, using Jira and 4-5 daily check-ins to fix blockers. Team earned a 95% grade.
    • Logged daily 1-on-1 student support and outcomes in Excel to ensure transparency and track individual progress.
    • Participated in weekly TA standups to align on expectations and reviewed demo projects using a standardized rubric.
    • Guided 3 hackathon teams through rapid planning and task coordination to maximize output in a one-day sprint.
    • Reviewed 10 weekly project submissions; feedback boosted code quality and raised assignment scores from 80% to 90%.`,
    website: "https://brainstation.io",
  },
  {
    title: "Software Developer",
    subTitle: "Nudge Nudge Games GmbH",
    location: "Berlin, DE",
    year: "Feb 2020 - Jun 2024",
    description: `• Progressed from Junior to Intermediate Developer over 4 years, leading UI development and major product features.
    • Built 30+ user interfaces from scratch in Unity3D and C#, following the MVC pattern in Visual Studio; achieved the highest task completion rate on Trello (949 tasks).
    • Delivered complex interfaces such as an Asset Mode for creating/exporting assets to the Unity Asset Store, and a Loader Client for pre-launch mod downloads—work showcased in a YouTube video with 400K+ views.
    • Reviewed 100+ GitHub PRs, resolving ~25% of flagged issues pre-merge, strengthening code quality and stability.
    • Integrated third-party weapon and animation systems into the voxel engine; refactored UI components into reusable modules, reducing implementation time by 15%.
    • Contributed to team growth from 5 to 30+ members by shipping critical product features during scale-up.
    • Mentored a junior developer and onboarded new hires by introducing system architecture, improving ramp-up speed by ~1 week.`,
    website: "https://www.nimoyd.com",
    skills: [
      "Unity3D",
      "C#",
      "Visual Studio C++",
      "Git",
      "SourceTree",
      "Trello",
    ],
    media: [
      {
        type: "image",
        src: "/medias/nimoyd/chest_inventory_ui.webp",
        title: "Chest Inventory Screen",
        shortDescription:
          "Chest inventory featuring player inventory in the middle and chest inventory on the left.",
        longDescription: `Implemented the Chest Inventory UI:
          • Added drag-and-drop functionality for items.
          • Enabled item swapping and dynamic updates to inventory.
          • Ensured responsiveness across mobile and desktop.`,
        year: "2022",
      },
      {
        type: "image",
        src: "/medias/nimoyd/main_ui.png",
        title: "Main Screen",
        shortDescription: "Default main screen during gameplay.",
        longDescription: `Implemented core UI elements for gameplay:
          • Added quick item slots at the bottom with keyboard shortcuts.
          • Developed bottom-left mouseover voxel item name, dynamically updating based on mouse position.
          • Created health bar and notification cells on the left.
          • Interactive behavior for the right minimap and clock.
          • Ensured responsive design for multiple devices.`,
        year: "2022",
      },
      {
        type: "image",
        src: "/medias/nimoyd/world_map_ui.jpg",
        title: "World Map Screen",
        shortDescription:
          "Clickable building icons with details on interaction.",
        longDescription: `Implemented interactivity for the world map:
          • Updated building icons and ensured dynamic interactions.
          • Integrated functionality to display detailed information on click.
          • Ensured responsiveness across devices.`,
        year: "2023",
      },
      {
        type: "image",
        src: "/medias/nimoyd/npc_conversation_ui.png",
        title: "NPC Quest Screen",
        shortDescription: "Interact with NPCs and view their details.",
        longDescription: `Implemented NPC Quest UI features:
          • Built the UI from scratch with responsive design.
          • Added animations for interactive elements.
          • Ensured camera alignment with NPCs during interactions.`,
        year: "2022",
      },
      {
        type: "image",
        src: "/medias/nimoyd/worker_selection_ui.png",
        title: "Worker Selection Screen",
        shortDescription: "Displays Worker NPCs in a circular grid.",
        longDescription: `Implemented dynamic worker selection features:
          • Created UI to update the worker list based on active category.
          • Added building detail information on the right.
          • Ensured responsive design across devices.`,
        year: "2023",
      },
      {
        type: "image",
        src: "/medias/nimoyd/world_creation_ui.jpg",
        title: "World Creation Screen",
        shortDescription: "UI for creating a new game world.",
        longDescription: `Implemented features for world creation:
          • Added dynamic updates for info based on categories such as General and Weather.
          • Ensured functionality of all buttons.
          • Modified backend logic to support seamless UI interactions.`,
        year: "2023",
      },
      {
        type: "image",
        src: "/medias/nimoyd/character_ui.jpg",
        title: "Character Screen",
        shortDescription: "Track character progress and stats.",
        longDescription: `Implemented character UI:
          • Included user's current progress and stats upgrade features.
          • Added UI animations for interactivity.
          • Ensured the UI was fully responsive across devices.`,
        year: "2021",
      },
      {
        type: "image",
        src: "/medias/nimoyd/character_selection_ui.webp",
        title: "Character Creation Screen",
        shortDescription:
          "Select a character to play in the game, set traits and gender.",
        longDescription: `Implemented character customization features:
          • Built a dynamic UI for character creation.
          • Enabled dynamic updates for traits and gender selection.
          • Ensured data saved to the game database and responsive design.`,
        year: "2022",
      },
      {
        type: "image",
        src: "/medias/nimoyd/social_journal_ui.jpg",
        title: "Social Journal Screen",
        shortDescription: "Track Quest NPCs based on factions.",
        longDescription: `Implemented faction-based journal features:
          • Built a grid-based UI to dynamically display NPC profiles by faction.
          • Ensured consistent layout and responsive design.`,
        year: "2022",
      },
      {
        type: "image",
        src: "/medias/nimoyd/excavation_site_ui.jpg",
        title: "Excavation Site Screen",
        shortDescription: "Excavate different excavation site buildings.",
        longDescription: `Implemented excavation UI with stage-based interactions:
          • Developed a UI stage system for excavated, available, and locked states.
          • Ensured the design dynamically adapts based on active stage.
          • Made the UI fully responsive.`,
        year: "2021",
      },
      {
        type: "image",
        src: "/medias/nimoyd/building_mode_ui.png",
        title: "Building Grid Screen",
        shortDescription:
          "Create templates or place buildings in the game world.",
        longDescription: `Implemented the building grid UI:
          • Developed the UI to display buildings based on categories and subcategories.
          • Updated item details dynamically based on user selections and interactions.
          • Ensured full responsiveness across devices.`,
        year: "2022",
      },
      {
        type: "image",
        src: "/medias/nimoyd/building_crafting_ui.png",
        title: "Building Details Screen",
        shortDescription: "Craft items and generate energy in buildings.",
        longDescription: `Implemented the building details UI:
          • Added features to update recipes and player inventory based on the building's category.
          • Developed the UI to display crafting progress and item details dynamically.
          • Ensured smooth interactions for crafting actions and item generation.
          • Made the UI fully responsive across devices.`,
        year: "2022",
      },
      {
        type: "image",
        src: "/medias/nimoyd/journal_ui.jpg",
        title: "Journal Screen",
        shortDescription: "Check conversation logs and quest progress.",
        longDescription: `Implemented journal tracking system:
          • Built a responsive journal UI where quests and notes update dynamically based on user actions.
          • Ensured consistent layout and synchronized data with user progress.`,
        year: "2021",
      },
    ],
  },
  {
    title: "Software Engineer",
    subTitle: "Arcade Studios",
    location: "Dhaka, BD",
    year: "Jan 2020 - Sep 2020",
    description: `• Started with a small role in core feature development and quickly progressed to leading a personal mobile application within a month.
    • Worked closely with the project manager during the planning phase to develop a pet simulation demo, including a mockup UI and gameplay features, effectively showcasing the core functionality.
    • Collaborated with 10 engineers on GitHub, reviewing, testing, and ensuring seamless integration.
    • Improved code quality and reduced integration issues by 25%.`,
    website: "https://www.facebook.com/arcadestudiosbd",
    skills: [
      "Unity3D",
      "C#",
      "Visual Studio C++",
      "Git",
      "SourceTree",
      "Trello",
    ],
    media: [
      {
        type: "image",
        src: "/medias/cute_puppy_love/puppy_selection.jpeg",
        title: "Puppy Selection Screen",
        shortDescription: "Select the puppy's breed.",
        longDescription: `Implemented the Puppy Selection UI:
          • Created the initial mockup UI, which served as the foundation for the designer's final implementation.
          • Replaced the mockup with final UI assets.
          • Added animated puppy models.
          • Ensured responsiveness across mobile devices.`,
        year: "2020",
      },
      {
        type: "image",
        src: "/medias/cute_puppy_love/puppy_play.jpeg",
        title: "Puppy Play Screen",
        shortDescription: "Play with the puppy.",
        longDescription: `Implemented the gameplay and UI:
          • Created ball-throwing mechanics using drag and release gestures.
          • Integrated and maintained the animation controller.
          • Developed the gameplay UI.
          • Ensured responsiveness across mobile devices.`,
        year: "2020",
      },
      {
        type: "image",
        src: "/medias/cute_puppy_love/puppy_feed.jpeg",
        title: "Puppy Feed Screen",
        shortDescription: "Feed the puppy.",
        longDescription: `Implemented the gameplay and UI:
          • Developed the gameplay UI.
          • Added various food items with unique energy levels.
          • Implemented energy restoration mechanics when the puppy eats.
          • Ensured responsiveness across mobile devices.`,
        year: "2020",
      },
    ],
  },
];
