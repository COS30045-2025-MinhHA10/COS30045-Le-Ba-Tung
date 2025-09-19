document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const links = document.querySelectorAll(".navbar a");
  const logo = document.getElementById("logo");

  // Page content dictionary
  const pages = {
    home: `
      <h1>Welcome to the Energy Webpage</h1>
      <p>This site explores appliance energy consumption in the Australian market.</p>
    `,
    televisions: `
      <h1>Televisions and Energy Consumption</h1>
      <p>Televisions are a major source of household energy use. 
      Energy consumption depends on screen size, technology, and efficiency ratings.</p>
    `,
    about: `
      <h1>About Us</h1>
      <p>This project demonstrates basic web development and explores
      energy efficiency data in the Australian market.</p>
    `
  };

  // Handle navigation clicks
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove active class from all links
      links.forEach(l => l.classList.remove("active"));

      // Add active class to clicked link
      link.classList.add("active");

      // Get target page
      const page = link.getAttribute("data-page");

      // Update content
      content.innerHTML = pages[page];
    });
  });

  // Logo click returns to Home
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = pages["home"];
    links.forEach(l => l.classList.remove("active"));
    document.querySelector('[data-page="home"]').classList.add("active");
  });
});
