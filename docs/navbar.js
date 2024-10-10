const indicator = document.querySelector('.nav-indicator-wrapper');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
  });

  
  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  
  el.classList.add('is-active');
}

items.forEach((item) => {
  item.addEventListener('click', (e) => {
    handleIndicator(item)
  });

  item.classList.contains('is-active') && handleIndicator(item);
});

// Function to switch between sections
function switchSection(sectionId) {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Remove 'active' class from all sections
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none'; // Hide all sections
    });
    
    // Add 'active' class to the selected section and display it
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');
    targetSection.style.display = 'block'; // Show the selected section
}

items.forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent default anchor behavior
        event.preventDefault();

        // Remove 'is-active' from all navigation links
        items.forEach(nav => nav.classList.remove('is-active'));

        // Add 'is-active' class to the clicked navigation link
        this.classList.add('is-active');

        // Get the href attribute and switch to the corresponding section
        const sectionId = this.getAttribute('href').substring(1); // Remove the '#' from href
        switchSection(sectionId);
    });
});
