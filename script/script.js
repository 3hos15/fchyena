console.log("hi");

let theButton = document.querySelector("header button");
let theNav = document.querySelector("nav");

theButton.onclick = toggleMenu;

function toggleMenu() {
  theNav.classList.toggle("toonMenu");
  theButton.classList.toggle("toonMenu")
}

// bron: ChatGPT
// promt: Could you write js code for this so that when you press on one of the stacked sections, it comes to the front. here is my code (html + css toegevoegd)
// link naar gesprek https://chatgpt.com/share/66f27b39-9704-8002-8881-439e48489956

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

// const eersteSection = document.querySelector("section section:nth-of-type(1)");
// const tweedeSection = document.querySelector("section section:nth-of-type(2)");
// const derdeSection = document.querySelector("section section:nth-of-type(3)");
// const vierdeSection = document.querySelector("section section:nth-of-type(4)");

// function makeSectionEersteActive() {
// 	eersteSection.classList.add("active");
// 	tweedeSection.classList.remove("active");
//     derdeSection.classList.remove("active");
//     vierdeSection.classList.remove("active");
//     console.log("Section 1 is actief");
// }

// eersteSection.onclick = makeSectionEersteActive;

// function makeSectionTweedeActive() {
// 	tweedeSection.classList.add("active");
// 	eersteSection.classList.remove("active");
//     derdeSection.classList.remove("active");
//     vierdeSection.classList.remove("active");
//     console.log("Section 2 is actief");
// }

// tweedeSection.onclick = makeSectionTweedeActive;

// function makeSectionDerdeActive() {
//     derdeSection.classList.add("active");
//     eersteSection.classList.remove("active");
// 	tweedeSection.classList.remove("active");
//     vierdeSection.classList.remove("active");
//     console.log("Section 3 is actief");
// }

// derdeSection.onclick = makeSectionDerdeActive;

// function makeSectionVierdeActive() {
//     vierdeSection.classList.add("active");  
//     eersteSection.classList.remove("active");
// 	tweedeSection.classList.remove("active");
//     derdeSection.classList.remove("active"); 
//     console.log("Section 4 is actief");
// }

// vierdeSection.onclick = makeSectionVierdeActive;

// Select all the section elements inside the main container
// let sections = document.querySelectorAll('main > section > section');

// // Add a click event listener to each section
// sections.forEach((section, index) => {
//     section.addEventListener('click', function() {
//         // Remove the active class from all sections
//         sections.forEach(s => s.classList.remove('active'));

//         // Add the active class to the clicked section
//         section.classList.add('active');

//         // Optionally, you can adjust z-index if you want to bring the clicked section to the front
//         sections.forEach(s => s.style.zIndex = '');
//         section.style.zIndex = '9999';  // Bring to the front
//     });
// });
