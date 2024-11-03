console.log("Welkom!!!!!!!!!!!!!!!!!!!!!! :D");

//Menu
let theButton = document.querySelector("nav button");
let theNav = document.querySelector("body > nav");

theButton.onclick = toggleMenu;

function toggleMenu() {
  theNav.classList.toggle("toonMenu");
  theButton.classList.toggle("toonMenu")
};

//Sections naar voren halen als er in het menu wordt geklikt
const navFilms = document.querySelector("nav ul li:nth-of-type(1) a");
const navEten = document.querySelector("nav ul li:nth-of-type(2) a");
const navInfo = document.querySelector("nav ul li:nth-of-type(3) a");
const navNieuws = document.querySelector("nav ul li:nth-of-type(4) a"); 

navFilms.onclick = function() {
    makeSectionEersteActive();
    toggleMenu();
};

navEten.onclick = function() {
    makeSectionTweedeActive();
    toggleMenu();
};

navInfo.onclick = function() {
    makeSectionVierdeActive();
    toggleMenu();
};

navNieuws.onclick = function() {
    makeSectionDerdeActive();
    toggleMenu();
};

//Sections naar voren halen bij het klikken op de section + line onder geselecteerde section in de nav
const eersteSection = document.querySelector("section section:nth-of-type(1)");
const tweedeSection = document.querySelector("section section:nth-of-type(2)");
const derdeSection = document.querySelector("section section:nth-of-type(3)");
const vierdeSection = document.querySelector("section section:nth-of-type(4)");

function makeSectionEersteActive() {
	eersteSection.classList.add("active");
	tweedeSection.classList.remove("active");
    derdeSection.classList.remove("active");
    vierdeSection.classList.remove("active");

    navFilms.classList.add("underline")
    navEten.classList.remove("underline") 
    navInfo.classList.remove("underline") 
    navNieuws.classList.remove("underline")  
};

eersteSection.onclick = makeSectionEersteActive;

function makeSectionTweedeActive() {
	tweedeSection.classList.add("active");
	eersteSection.classList.remove("active");
    derdeSection.classList.remove("active");
    vierdeSection.classList.remove("active");

    navFilms.classList.remove("underline")
    navEten.classList.add("underline") 
    navInfo.classList.remove("underline") 
    navNieuws.classList.remove("underline") 
};

tweedeSection.onclick = makeSectionTweedeActive;

function makeSectionDerdeActive() {
    derdeSection.classList.add("active");
    eersteSection.classList.remove("active");
	tweedeSection.classList.remove("active");
    vierdeSection.classList.remove("active");

    navFilms.classList.remove("underline")
    navEten.classList.remove("underline") 
    navInfo.classList.remove("underline") 
    navNieuws.classList.add("underline") 
};

derdeSection.onclick = makeSectionDerdeActive;

function makeSectionVierdeActive() {
    vierdeSection.classList.add("active");  
    eersteSection.classList.remove("active");
	tweedeSection.classList.remove("active");
    derdeSection.classList.remove("active"); 

    navFilms.classList.remove("underline")
    navEten.classList.remove("underline") 
    navInfo.classList.add("underline") 
    navNieuws.classList.remove("underline") 
};

vierdeSection.onclick = makeSectionVierdeActive;

//Video laten spelen en stoppen
let vidImage = document.querySelector("section section div div img");
let fcVideo = document.querySelector("section section div div video");
let vidButton = document.querySelector("section section div div button");
let isPlaying = false;

vidButton.addEventListener('click', function() {
    if (!isPlaying) {
        vidImage.style.display = 'none';
        fcVideo.style.display = 'block';
        fcVideo.play();
        vidButton.classList.add('smallButton');
        isPlaying = true; 
    } else {
        fcVideo.pause();
        fcVideo.style.display = 'none';
        vidImage.style.display = 'block';
        vidButton.classList.remove('smallButton');
        isPlaying = false; 
    }
});

//Sections naar voren halen bij het tabben in de linkjes
const linksEersteSection = document.querySelectorAll('section section:nth-of-type(1) a')
linksEersteSection.forEach(linkEersteSection =>{
    linkEersteSection.onfocus = makeSectionEersteActive;
});

const linksTweedeSection = document.querySelectorAll('section section:nth-of-type(2) a');
linksTweedeSection.forEach(linkTweedeSection =>{
    linkTweedeSection.onfocus = makeSectionTweedeActive;
});

const linksDerdeSection = document.querySelectorAll('section section:nth-of-type(3) a')
linksDerdeSection.forEach(linkDerdeSection =>{
    linkDerdeSection.onfocus = makeSectionDerdeActive;
});

const linksVierdeSection = document.querySelectorAll('section section:nth-of-type(4) a')
linksVierdeSection.forEach(linkVierdeSection =>{
    linkVierdeSection.onfocus = makeSectionVierdeActive;
});

// const filmButtonPrev = document.getElementsByClassName("previous");
// const filmButtonNext = document.getElementsByClassName("next");

// function nextImage() {

// }

// function prevImage() {
    
// }


const gallery = document.querySelector('.gallery');
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const scrollAmount = 1080; 

// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
prevButton.addEventListener('click', function() {
    gallery.scrollBy({ left: -scrollAmount});
});

nextButton.addEventListener('click', function() {
    gallery.scrollBy({ left: scrollAmount});
});


const galleryFilm = document.querySelector('#actueel article:nth-of-type(1) ul');
const prevButtonFilm = document.querySelector('.previous-film');
const nextButtonFilm = document.querySelector('.next-film');
const scrollAmountFilm = 600;

prevButtonFilm.addEventListener('click', function() {
    galleryFilm.scrollBy({ left: -scrollAmountFilm});
});

nextButtonFilm.addEventListener('click', function() {
    galleryFilm.scrollBy({ left: scrollAmountFilm});
});


// const mediaQuery = window.matchMedia('(max-width: 47.9em)');
// if (mediaQuery.matches) {
//     console.log("Dit werkt");
// } else {
//     console.log("Dit werkt ook");
// }