class ProjectCard {
    constructor(title, description, imageRef, proj_link="project_cards.html"){
        this.title = title;
        this.description = description;
        this.imageRef = imageRef;
        this.proj_link = proj_link;
    }
}

var projects = [];
var card_index = 0;

let project_tetris = new ProjectCard("Tetris", "A simple Tetris demo with JS", "tetris.png", "https://americastopwebdev.github.io/Tetris/");
let project_odin_recipes = new ProjectCard("Recipes Site", "The first page I ever built, with 1990s style html", "pbnj.jpg");
let project_github_link = new ProjectCard("My GitHub Account", "See my other posted projects", "GitHub-Mark.png", "https://github.com/AmericasTopWebDev")

projects.push(project_tetris);
projects.push(project_github_link);

// const currCard = document.getElementsByClassName("review");
const currTitle = document.getElementById("a-title");
const currInfo = document.getElementById("info");
const currImg = document.getElementById("card-img");
const currLink = document.getElementById("proj-link");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function refreshCard() {
    currTitle.textContent = projects[card_index].title;
    currInfo.textContent = projects[card_index].description;
    currImg.src = "photos/"+projects[card_index].imageRef;
    currLink.href = projects[card_index].proj_link;
}

function goBack() {
    if(card_index > 0){
        card_index-= 1;
        refreshCard();
    }
}

function goForth() {
    if(card_index < projects.length -1 ){
        card_index++;
        refreshCard();
        
    }
}

prevBtn.addEventListener("click", goBack);
nextBtn.addEventListener("click", goForth);

refreshCard();