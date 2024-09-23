console.log("hi");

let theButton = document.querySelector("header button");
let theNav = document.querySelector("nav");

theButton.onclick = toggleMenu;

function toggleMenu() {
  theNav.classList.toggle("toonMenu");
  theButton.classList.toggle("toonMenu")
}



let expandedSection = null; // Track the currently expanded section

// Function to expand the clicked section
function expandSection(sectionElement) {
    // If the clicked section is already expanded, do nothing
    if (sectionElement.classList.contains('expanded')) {
        return;
    }

    // If another section is currently expanded, collapse it
    if (expandedSection !== null) {
        let prevExpanded = document.querySelector('.expanded');
        if (prevExpanded) {
            prevExpanded.classList.remove('expanded');
            prevExpanded.style.zIndex = ""; // Reset z-index
        }
    }

    // Expand the clicked section
    sectionElement.classList.add('expanded');
    sectionElement.style.zIndex = 10; // Bring it to the front

    expandedSection = sectionElement; // Update the currently expanded section
}

// Attach click event listeners to sections
document.querySelectorAll('section > section').forEach(section => {
    section.addEventListener('click', function() {
        expandSection(this);
    });
});

// Ensure clicking on any section brings it to the front
document.querySelectorAll('section > section').forEach(section => {
    section.addEventListener('click', function() {
        // Remove expanded class from previously expanded section if it's not the clicked one
        if (expandedSection !== this) {
            expandSection(this);
        }
    });
});
