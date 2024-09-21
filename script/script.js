

// let expandedSection = null; // This variable will remember which section is currently expanded

// // This function is used to expand the section that is clicked
// function expandSection(sectionNumber) {
//     // Get the section that was clicked by using its ID
//     let sectionToExpand = document.getElementById("section" + sectionNumber);

//     // If the clicked section is already expanded, just return and do nothing
//     if (expandedSection === sectionNumber) {
//         return; // Exit the function early
//     }

//     // If some other section is expanded, we will collapse it first
//     if (expandedSection !== null) {
//         let previousSection = document.getElementById("section" + expandedSection);
//         previousSection.classList.remove("expanded"); // Remove the 'expanded' class to collapse it
//     }

//     // Now, expand the clicked section by adding the 'expanded' class
//     sectionToExpand.classList.add("expanded");

//     // Bring the clicked section to the front by giving it a higher z-index
//     sectionToExpand.style.zIndex = 10;

//     // If there was a previously expanded section, reset its z-index back to normal
//     if (expandedSection !== null) {
//         let previousSection = document.getElementById("section" + expandedSection);
//         previousSection.style.zIndex = expandedSection; // Reset its z-index to its section number
//     }

//     // Finally, remember which section is now expanded
//     expandedSection = sectionNumber;
// }

// let expandedSection = null; // Track the currently expanded section

// // Function to expand the clicked section
// function expandSection(sectionNumber) {
//     // Get the clicked section element
//     let sectionToExpand = document.getElementById(`section${sectionNumber}`);

//     // If the clicked section is already expanded, do nothing
//     if (expandedSection === sectionNumber) {
//         return;
//     }

//     // If another section is currently expanded, collapse it
//     if (expandedSection !== null) {
//         let prevExpanded = document.getElementById(`section${expandedSection}`);
//         prevExpanded.classList.remove('expanded');
//     }

//     // Bring the clicked section to the top by assigning a high z-index
//     sectionToExpand.classList.add('expanded');
//     sectionToExpand.style.zIndex = 10; // Highest z-index

//     // Set the previously expanded section's z-index back to its original value (but don't reset other sections)
//     if (expandedSection !== null) {
//         let prevSection = document.getElementById(`section${expandedSection}`);
//         prevSection.style.zIndex = expandedSection; // Use the section number as the original z-index
//     }

//     expandedSection = sectionNumber;
// }


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
