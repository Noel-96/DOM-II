// Your code goes here
// ELEMENT SELECTORS 
const header = document.querySelector("header"); 
const logo = header.querySelector("h1"); 
const img = document.querySelector(".img-content img")
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const btn = document.querySelector(".destination")
const footerPara = footer.querySelector("p")
const textContent = document.querySelector(".text-content");
const contentDestination = document.querySelector(".content-destination");
const destination = contentDestination.querySelector("h2")


//EventListeners


window.addEventListener("load", function(event) {
    console.log("OK WE ARE AGO")
})


// mouseenter/out 
logo.addEventListener("mouseenter", event => {
event.target.style.fontSize = "5em";
event.target.style.transitionDuration = "1s";
});

logo.addEventListener("mouseover", function (event) {
    event.target.style.color = "goldenrod";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500)
});

logo.addEventListener("mouseout", event => {
    event.target.style.fontSize = "4em";
    event.target.style.transitionDuration = "2s";
});


const imgChange = document.querySelector(".intro img")
document.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        imgChange.setAttribute("src", "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
    }
})

// keydown/up event 
document.addEventListener("keydown", event =>{
if (event.key === "p"){
    body.style.color="#7970a1";
}
});

document.addEventListener("keyup", event =>{
    if (event.key === "p"){
        body.style.color="black";
    }
    });



// wheel event 

textContent.addEventListener("scroll", event => {
    this.style.color = "pink";
    });

// load 
destination.addEventListener("load", event => {
    event.target.style.color ="blue";
})

destination.addEventListener("dblclick", event => {
    event.target.style.color ="red";
})


Array.from(document.links).forEach(function (link) {
    link.addEventListener("click", function (event) {
        console.log("STOP")
        event.preventDefault() 
    }) 
})

body.addEventListener("click", function(event){
    console.log("propagation test!")
})


btn.addEventListener("click", function(event){
    event.stopPropagation()
})

// CONSOLE CHECK ====== 
console.log(destination)