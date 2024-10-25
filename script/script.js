console.log("Welkom!!!!!!!!!!!!!!!!!!!!!! :D");

let theButton = document.querySelector("nav button");
let theNav = document.querySelector("body > nav");

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


const linksEersteSection = document.querySelectorAll('section section:nth-of-type(1) a')

linksEersteSection.forEach(linkEersteSection =>{
    linkEersteSection.onfocus = makeSectionEersteActive;
})

const linksTweedeSection = document.querySelectorAll('section section:nth-of-type(2) a');

linksTweedeSection.forEach(linkTweedeSection =>{
    linkTweedeSection.onfocus = makeSectionTweedeActive;
})

const linksDerdeSection = document.querySelectorAll('section section:nth-of-type(3) a')

linksDerdeSection.forEach(linkDerdeSection =>{
    linkDerdeSection.onfocus = makeSectionDerdeActive;
})

const linksVierdeSection = document.querySelectorAll('section section:nth-of-type(4) a')

linksVierdeSection.forEach(linkVierdeSection =>{
    linkVierdeSection.onfocus = makeSectionVierdeActive;
})




// const navFilms = document.getElementById('films')

// navFilms.forEach(linkNavFilms =>{
//     linkNavFilms.onclick = makeSectionEersteActive;
// })

// const navFilms = document.getElementById('films');

// navFilms.onclick = makeSectionEersteActive;



const navFilms = document.querySelector("body > nav a:nth-of-type(1)");

navFilms.onclick = makeSectionEersteActive;


// const navEten = document.querySelector("body > nav a:nth-of-type(2)");
const navEten = document.getElementById(eten);
navEten.onclick = makeSectionTweedeActive;


const navNieuws = document.querySelector("body > nav a:nth-of-type(3)");
navNieuws.onclick = makeSectionDerdeActive;

const navInfo = document.querySelector("body > nav a:nth-of-type(4)");

navInfo.onclick = makeSectionVierdeActive;










