console.log("Welkom!!!!!!!!!!!!!!!!!!!!!! :D");

let theButton = document.querySelector("header button");
let theNav = document.querySelector("nav");

theButton.onclick = toggleMenu;

function toggleMenu() {
  theNav.classList.toggle("toonMenu");
  theButton.classList.toggle("toonMenu")
}

const eersteSection = document.querySelector("section section:nth-of-type(1)");
const tweedeSection = document.querySelector("section section:nth-of-type(2)");
const derdeSection = document.querySelector("section section:nth-of-type(3)");
const vierdeSection = document.querySelector("section section:nth-of-type(4)");

function makeSectionEersteActive() {
	eersteSection.classList.add("active");
	tweedeSection.classList.remove("active");
    derdeSection.classList.remove("active");
    vierdeSection.classList.remove("active");
    console.log("Section Films is actief");
}

eersteSection.onclick = makeSectionEersteActive;

function makeSectionTweedeActive() {
	tweedeSection.classList.add("active");
	eersteSection.classList.remove("active");
    derdeSection.classList.remove("active");
    vierdeSection.classList.remove("active");
    console.log("Section Eten is actief");
}

tweedeSection.onclick = makeSectionTweedeActive;

function makeSectionDerdeActive() {
    derdeSection.classList.add("active");
    eersteSection.classList.remove("active");
	tweedeSection.classList.remove("active");
    vierdeSection.classList.remove("active");
    console.log("Section Nieuws is actief");
}

derdeSection.onclick = makeSectionDerdeActive;

function makeSectionVierdeActive() {
    vierdeSection.classList.add("active");  
    eersteSection.classList.remove("active");
	tweedeSection.classList.remove("active");
    derdeSection.classList.remove("active"); 
    console.log("Section Info is actief");
}

vierdeSection.onclick = makeSectionVierdeActive;

// let vidImage = document.querySelector("section section div div img");
// let fcVideo = document.querySelector("section section div div video");
// let vidButton = document.querySelector("section section div div button");

// // Add click event to the button
// vidButton.addEventListener('click', function() {
//     // Hide the image
//     vidImage.style.display = 'none';
    
//     // Show the video
//     fcVideo.style.display = 'block';
    
//     // Play the video
//     fcVideo.play();
// });

// Bron: chatgpt 
// prompt: "can you make it so that the button acts as a toggle" + zelfgeschreven code hierboven, zelf classLists toegevoegd

let vidImage = document.querySelector("section section div div img");
let fcVideo = document.querySelector("section section div div video");
let vidButton = document.querySelector("section section div div button");

let isPlaying = false;

vidButton.addEventListener('click', function() {
    if (!isPlaying) {
        vidImage.style.display = 'none';
        fcVideo.style.display = 'block';
        fcVideo.play();
        vidButton.classList.add('smallButton')
        isPlaying = true; 
    } else {
        fcVideo.pause();
        fcVideo.style.display = 'none';
        vidImage.style.display = 'block';
        vidButton.classList.remove('smallButton')
        isPlaying = false; 
    }
});











// const linkFilms = document.getElementById("films")
// const linkEten = document.getElementById("eten")
// const linkInfo = document.getElementById("info")
// const linkNieuws = document.getElementById("nieuws")


// function clickSectionFilm() {
//     linkFilms.style.zIndex = "1000";
// }

// function clickSectionEten() {
//     linkEten.style.zIndex = "1000";
// }

// function clickSectionInfo() {
//     linkInfo.style.zIndex = "1000";
// }

// function clickSectionNieuws() {
    
//     linkNieuws.style.zIndex = "1000";
// }


// https://chatgpt.com/share/66fd93f6-1ba8-8002-8757-2da6e79198f5
// prompt: can you use a tags with ids to change content on screen
// function clickSection(activeId) {
//     // Reset z-index and hide all sections
//     const sections = ['films', 'eten', 'info', 'nieuws'];
//     sections.forEach(id => {
//         document.getElementById(id).style.zIndex = "0";
//     });

//     // Set z-index for the clicked section and make it visible
//     const activeSection = document.getElementById(activeId);
//     activeSection.style.zIndex = "10";
//     activeSection.style.display = "block"; // Show active section
// }



