document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");
  document
    .getElementById("techSearch")
    .addEventListener("input", filterProjects);
  // Initial project data
  const projects = [
    {
      name: "HostelHub",
      techStack: "HTML, CSS, JavaScript, Bootstrap",
      imageUrl:
        "https://th.bing.com/th/id/OIP.k14JkTl5O_hImfhkeCE3HQHaD5?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "eMart",
      techStack: "Flutter, Firebase",
      imageUrl:
        "https://th.bing.com/th/id/OIP.JzWR2BgiZ0DoQE6NxuDdDQHaFk?rs=1&pid=ImgDetMain",
    },
    {
      name: "Daily Planner",
      techStack: "Flutter, Dart",
      imageUrl:
        "https://private-user-images.githubusercontent.com/99090844/248790991-6bd5d831-8bf6-4d6e-8c9a-42b6c8bb47de.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDA5MDgxMjcsIm5iZiI6MTcwMDkwNzgyNywicGF0aCI6Ii85OTA5MDg0NC8yNDg3OTA5OTEtNmJkNWQ4MzEtOGJmNi00ZDZlLThjOWEtNDJiNmM4YmI0N2RlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTI1VDEwMjM0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg5NzE2OGEwMDA3OTMxZjI3NTViNGUwMjE5ODlkMzFjMmUyZjE1YmMxYmYwZThiOWQwOTlhZGQ2NzJmYThhM2YmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.52B80v78NeLxelVsupqsZgAQvgJBljJfFIYEuAA32fQ",
    },
    {
      name: "Sorting Visualizer",
      techStack: "Python, Algorithms",
      imageUrl:
        "https://th.bing.com/th/id/OIP.fdPLJhDt7K3Gohnbcnuw7QHaDt?w=315&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      name: "Age Calculator",
      techStack: "HTML, CSS, JavaScript",
      imageUrl:
        "https://th.bing.com/th/id/R.c5ada8de753f42d210c9874c810b669b?rik=HZfTkiCrT2ISDg&pid=ImgRaw&r=0",
    },
    {
      name: "Coffee Shop",
      techStack: "Flutter",
      imageUrl:
        "https://th.bing.com/th/id/OIP.e8sCcJEm8ZazYpseru2zvAHaE6?w=294&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    // Add more projects as needed
  ];

  // Function to display projects based on technology search
  function filterProjects() {
    const searchInput = document
      .getElementById("techSearch")
      .value.toLowerCase();
    const projectContainer = document.getElementById("projectContainer");

    // Clear existing projects
    projectContainer.innerHTML = "";

    // Filter projects based on technology search
    const filteredProjects = projects.filter((project) =>
      project.techStack.toLowerCase().includes(searchInput)
    );

    // Display filtered projects
    filteredProjects.forEach((project) => {
      const projectElement = createProjectElement(project);
      projectContainer.appendChild(projectElement);
    });
  }

  // Function to create project elements
  function createProjectElement(project) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    const imgElement = document.createElement("img");
    imgElement.src = project.imageUrl;
    imgElement.alt = project.name;
    imgElement.className = "project-img";

    const nameElement = document.createElement("p");
    nameElement.textContent = project.name;

    const techStackElement = document.createElement("p");
    techStackElement.textContent = project.techStack;

    projectDiv.appendChild(imgElement);
    projectDiv.appendChild(nameElement);
    projectDiv.appendChild(techStackElement);

    return projectDiv;
  }

  // Initial display of all projects
  projects.forEach((project) => {
    const projectElement = createProjectElement(project);
    document.getElementById("projectContainer").appendChild(projectElement);
  });
});
