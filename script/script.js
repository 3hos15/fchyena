console.log("hi");

let theButton = document.querySelector("header button");
let theNav = document.querySelector("nav");

theButton.onclick = toggleMenu;

function toggleMenu() {
  theNav.classList.toggle("toonMenu");
  theButton.classList.toggle("toonMenu")
}

//bron: ChatGPT
//promt: Could you write js code for this so that when you press on one of the stacked sections, it comes to the front. here is my code (html + css toegevoegd)
//link naar gesprek https://chatgpt.com/share/66f27b39-9704-8002-8881-439e48489956

// Select all the section elements inside the main container
let sections = document.querySelectorAll('main > section > section');

// Function to handle bringing the clicked section to the front
sections.forEach(section => {
    section.addEventListener('click', function() {
        // Remove the expanded class from all sections
        sections.forEach(s => s.classList.remove('expanded'));
        
        // Increase z-index and add the expanded class to the clicked section
        this.classList.add('expanded');
        this.style.zIndex = 10;  // Bring to the front

        // Reset the z-index of all other sections
        sections.forEach(s => {
            if (s !== this) {
                s.style.zIndex = '';  // Reset to default
            }
        });
    });
});
