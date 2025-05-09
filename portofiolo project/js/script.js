const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener('click', (e) => {
    // e.preventDefault();

    sections.forEach(section => {
      section.classList.remove('active');
    });

    const tragetId = link.getAttribute('data-target');
    const sectionId = document.getElementById(tragetId);
    if (sectionId) {
      document.getElementById(tragetId).classList.add('active');
    } else {
      console.error('not work done!')
    }
  });
});