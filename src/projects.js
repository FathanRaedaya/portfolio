const projects = [
  {
    id: 1,
    title: "GetTyping",
    overview: "A website for users to practice and improve their typing or for those who just bought a new keyboard. " +
              "Every test is different where users can change the difficulty and duration of it.",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    features: [
      "Customisable test duration (15, 30, 60, or 120 seconds)",
      "3 Difficulty levels",
      "WPM calculation and accuracy tracking",
      "Character-by-character error highlighting",
      "Dynamic cursor movement and text scrolling"
    ],
    highlights: [
      "DOM manipulation for text processing and validation",
      "Event handling system for keyboard input management",
      "Dynamic UI updates like precise cursor positioning",
      "Modular class architecture for maintainable and scalable code structure",
      "Flexible difficulty system using separate word arrays for easy customization"
    ],
    future: [
      "Leaderboard and user accounts",
      "Performance statistics and progress tracking",
      "Custom word lists and programming snippets",
      "Additional practice modes and challenges"
    ],
    video: "gettyping.mp4",
    demo: "https://typingtest.fathanraedaya.com",
    repo: "https://github.com/FathanRaedaya/typing-test"
  },
  {
    id: 2,
    title: "University Module Portal",
    overview: "An enhanced university module system featuring a recommender system that suggests interface adjustments based on user behaviour and preferences. " +
              "Built with accessibility in mind, it supports keyboard, mouse, and screen readers, while allowing users to customise the interface and track course progression.",
    techStack: ["React", "HTML", "CSS", "JavaScript", "SQLite"],
    features: [
      "Interface recommendations based on user preferences and behaviour",
      "Keyboard, mouse, and screen reader support",
      "Customisable interface (font, font size, line spacing, etc.)",
      "Course progression tracker"
    ],
    highlights: [
      "Guards against breaking usability",
      "Single, consistent layer for handling API responses and errors",
      "Hybrid recommender system combining content-based and rule-based filtering",
      "Three-tier state persistence architecture",
      "Research-based recommendation engine"
    ],
    video: "uni.mp4",
  },
  {
    id: 3,
    title: "Expense Tracker",
    overview: "A Flask-based web app to track your expenses, income and goals. " +
              "",
    techStack: ["Python/Flask", "SQLite", "HTML/CSS"],
    features: [
      "Income, expense and balance tracking",
      "Goal setting and progress monitoring"
    ],
    highlights: [
      "Database management for storing and retrieving data",
      "Architectural boundaries between components to ease maintenance of app"
    ],
    video: "budget-tracker.mp4",
    repo: "https://github.com/FathanRaedaya/budget-tracker"
  },
  {
    id: 4,
    title: "Router - GPX",
    overview: "A Flask-based web app that allows users to share and track their routes with friends using GPX files." +
              " This project was developed as a collaborative effort by myself and 5 other " +
              "students for a university module.",
    techStack: ["Python/Flask", "JavaScript", "SQLite", "HTML/CSS"],
    features: [
      "Upload, store and view routes for yourself and others (GPX)",
      "Different subscriptions for different features (design purposes)",
      "Interactive map visualisation",
      "Admin panel for user and subscription management"
    ],
    highlights: [
      "User authentication with role-based access control",
      "Encrypted payment processing system",
      "Relationships between profiles to allow route sharing"
    ],
    video: "router.mp4",
    repo: "https://github.com/FathanRaedaya/router"
  },
];

  $(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get("id")) || 1;

    const project = projects.find(p => p.id === projectId);

    if (project) {
        $("#project-container").html(`
          <div class="w-4/5 mx-auto mt-8 min-h-screen bg-gradient-to-br from-black via-slate-900 to-zinc-900 text-white font-[merri] antialiased rounded-lg">
            <div class="w-full max-w-full sm:max-w-2/3 mx-auto px-4 sm:px-0 mt-8 mb-6">
              <a href="../index.html#projects" 
                class="group flex items-center text-white/70 hover:text-white transition-colors duration-300">
                
                <div class="flex items-center mr-3">
                  <div class="w-12 sm:w-16 h-[1px] bg-white/70 group-hover:bg-white transition-colors duration-300"></div>
                </div>
                <span class="text-sm font-light tracking-wide">Back to projects</span>
              </a>
            </div>
            <h1 class="text-4xl font-[merri] mb-8">${project.title}</h1>
            <p class="text-md mb-6 leading-loose opacity-85">${project.overview}</p>
            <div class="rounded-lg overflow-hidden mb-8">
                <video class="w-full aspect-video object-cover" autoplay loop muted playsinline>
                  <source src="assets/videos/${project.video}" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
            </div>
            
            <div class="mb-8">
              <h3 class="text-lg sm:text-xl font-semibold mb-3">Features</h3>
              <ul class="list-disc pl-6 space-y-2">
                ${project.features.map(feature => `<li class="text-gray-300">${feature}</li>`).join('')}
              </ul>
            </div>
            
                         <div class="mb-8">
               <h3 class="text-lg sm:text-xl font-semibold mb-3">Technical Highlights</h3>
               ${Array.isArray(project.highlights) ? `
                 <ul class="list-disc pl-6 space-y-2">
                   ${project.highlights.map(highlight => `<li class="text-gray-300">${highlight}</li>`).join('')}
                 </ul>
               ` : `
                 <p class="text-gray-300">${project.highlights}</p>
               `}
             </div>

            <div class="mb-8">
              <h3 class="text-lg sm:text-xl font-semibold mb-3">Tech Stack</h3>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                ${project.techStack.map(tech => `
                  <div class="p-3 sm:p-4 bg-gray-700 rounded-lg text-center">
                    <span class="font-medium">${tech}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            ${(project.repo && project.repo.trim() !== '') || (project.demo && project.demo.trim() !== '') ? `
            <div class="mb-8">
              <h3 class="text-lg sm:text-xl font-semibold mb-3">Project Links</h3>
              <p class="text-gray-300 mb-4">
                ${project.repo && project.repo.trim() !== '' ? `
                  View the source code on 
                  <a href="${project.repo}" class="text-white relative inline-block hover:after:w-full after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300" target="_blank" rel="noopener">
                    GitHub
                  </a>
                ` : ''}
                ${(project.repo && project.repo.trim() !== '') && (project.demo && project.demo.trim() !== '') ? ' or ' : ''}
                ${project.demo && project.demo.trim() !== '' ? `
                  try the 
                  <a href="${project.demo}" class="text-white relative inline-block hover:after:w-full after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300" target="_blank" rel="noopener">
                    live application
                  </a>
                ` : ''}
                .
              </p>
            </div>
            ` : ''}

            ${project.future && (Array.isArray(project.future) ? project.future.length > 0 : project.future.trim() !== '') ? `
            <div class="mb-8">
              <h3 class="text-lg sm:text-xl font-semibold mb-3">What's next</h3>
              ${Array.isArray(project.future) ? `
                <ul class="list-disc pl-6 space-y-2">
                  ${project.future.map(future => `<li class="text-gray-300">${future}</li>`).join('')}
                </ul>
              ` : `
                <p class="text-gray-300">${project.future}</p>
              `}
            </div>
            ` : ''}
        `);
    } else {
        $("#project-container").html("<p>Project not found.</p>");
    }
});
