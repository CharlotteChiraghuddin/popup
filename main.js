//onload hide loading screen
window.onload =function(){
    document.getElementById("loading").style.display="none";
}

//fetching arch1 images
fetch("assets/media/arch1single.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch1").innerHTML=svg;
});

fetch("assets/media/arch1double.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch2").innerHTML=svg;
});

fetch("assets/media/arch1triple.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch3").innerHTML=svg;
    document.getElementById("arch9").innerHTML=svg;
});

//fetching arch2 images
fetch("assets/media/arch2single.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch4").innerHTML=svg;
});

fetch("assets/media/arch2double.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch5").innerHTML=svg;
});

fetch("assets/media/arch2triple.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch6").innerHTML=svg;
});

//fetching arch3 images

fetch("assets/media/arch3single.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch7").innerHTML=svg;
});

fetch("assets/media/arch3double.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch8").innerHTML=svg;
});

fetch("assets/media/arch3triple.svg")
.then(response=> response.text())
.then(svg=>{
    document.getElementById("arch9").innerHTML=svg;
});

//Delare all gloabal variables
//colors
let blacks = document.querySelectorAll(".black");
let whites = document.querySelectorAll(".white");
let reds = document.querySelectorAll(".red");
let oranges = document.querySelectorAll(".orange");
let yellows = document.querySelectorAll(".yellow");
let greens = document.querySelectorAll(".green");
let blues = document.querySelectorAll(".blue");
let indigos = document.querySelectorAll(".indigo");
let violets = document.querySelectorAll(".violet");
let welcomeText = ["Your event, your style — we make it happen","No matter the occasion, we make it special","Designed for every moment worth celebrating","Whatever the celebration, we’re here to elevate it"];

let seeMoreBtn = document.querySelectorAll(".seeMore");
let containers = document.querySelectorAll(".container");

let currentSelection ={"firstColor":null, "secondColor":null, "thirdColor":null}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href").slice(1) === entry.target.id);
      });
    }
  });
}, {
  threshold: 0.3
});

sections.forEach(section => observer.observe(section));
//--------------------------------------------------------------------------------------------------ROTATE THE WELCOME TEXT-------------------------------------------------------------------------------------------------------------------------------------------

let welcomeTextIndex = 0;
function rotateWelcomeText() {
  const el = document.getElementById("welcome-text");
  
  // Fade out
  el.style.opacity = 0;

  setTimeout(() => {
    // Change text after fade out
    welcomeTextIndex = (welcomeTextIndex + 1) % welcomeText.length;
    el.innerText = welcomeText[welcomeTextIndex];

    // Fade in
    el.style.opacity = 1;
  }, 500); 
}

setInterval(rotateWelcomeText, 4000);

//--------------------------------------------------------------------------------------------------HANDLE CLICK OF SEE MORE BUTTON-------------------------------------------------------------------------------------------------------------------------------------------
function handleClick(e){        
        let currentContainerId = e.target.parentNode.parentNode.parentNode.id;
        e.target.classList.add("hide");
        console.log(e.target.parentNode.parentNode.closest(".goBack"));
        containers.forEach(container=>{
            if(container.id === currentContainerId){
                container.classList.add("maximise");
                document.getElementById("home").style.display="none";
                container.querySelector(".back").classList.remove("hide");
                container.querySelector(".save").classList.remove("hide");
                container.querySelector(".share").classList.remove("hide");
                container.querySelector(".back").addEventListener("click", goBack);
//-------------------------------------------------------------------------------------------------------UPDATE ARROWS-------------------------------------------------------------------------------------------------------------------------------------------------------
                let picks = container.querySelector(".picks");
                if(currentContainerId.includes("Single")){
                    picks.innerHTML = 
                            `<div id="arrowContainer">
                                <button id="leftArrow" class="hide"><img src="./assets/media/leftArrow.svg"></button>
                                <p class="statement">Pick your color</p>
                                <button id="rightArrow" class="hide"><img src="./assets/media/rightArrow.svg"></button>
                            </div>`
                }else{
                    picks.innerHTML = 
                            `<div id="arrowContainer">
                                <button id="leftArrow"><img src="./assets/media/leftArrow.svg"></button>
                                <p class="statement">Pick your first color</p>
                                <button id="rightArrow"><img src="./assets/media/rightArrow.svg"></button>
                            </div>`
                }
                let rightArrow = document.getElementById("rightArrow");
                let leftArrow = document.getElementById("leftArrow");
                rightArrow.addEventListener("click",rightArrowClick);
                leftArrow.addEventListener("click",leftArrowClick);


//-------------------------------------------------------------------------------------------------------UPDATE COLOR OPTIONS-------------------------------------------------------------------------------------------------------------------------------------------------------                
                const target = container.querySelector(".hideOptions");
                if (target) {
                target.classList.remove("hideOptions");
                target.insertAdjacentHTML("beforeend",`
                    <div id="buttons">
                        <button type="button" class="colors" data-color="#000000ff" data-outline="#ffffff" aria-label="Black"></button> <!-- black -->
                        <button type="button" class="colors" data-color="#ffffffff" data-outline="#000000ff" aria-label="White"></button> <!-- white -->
                        <button type="button" class="colors" data-color="#FFD700" data-outline="#000000ff" aria-label="Gold"></button> <!-- gold -->
                        <button type="button" class="colors" data-color="#ADD8E6" data-outline="#000000ff" aria-label="Baby Blue"></button> <!-- baby blue -->
                        <button type="button" class="colors" data-color="#FFB6C1" data-outline="#000000ff" aria-label="Baby Pink"></button> <!-- baby pink -->
                        <button type="button" class="colors" data-color="#194D19" data-outline="#000000ff" aria-label="Deep Forest Green"></button> <!-- deep forest green -->
                        <button type="button" class="colors" data-color="#19294D" data-outline="#000000ff" aria-label="Midnight Blue"></button> <!-- midnight blue -->
                        <button type="button" class="colors" data-color="#4D1919" data-outline="#000000ff" aria-label="Oxblood"></button> <!-- oxblood -->
                        <button type="button" class="colors" data-color="#E2C7A6" data-outline="#000000ff" aria-label="Warm Beige"></button> <!-- warm beige -->
                        <button type="button" class="colors" data-color="#A67C52" data-outline="#000000ff" aria-label="Warm Taupe"></button> <!-- warm taupe -->
                        <button type="button" class="colors" data-color="#C2B280" data-outline="#000000ff" aria-label="Muted Khaki"></button> <!-- muted khaki -->
                        <button type="button" class="colors" data-color="#B0A8B9" data-outline="#000000ff" aria-label="Dusty Lavender"></button> <!-- dusty lavender -->
                        <button type="button" class="colors" data-color="#8FA9B9" data-outline="#000000ff" aria-label="Slate Blue"></button> <!-- slate blue -->
                        <button type="button" class="colors" data-color="#7D9F94" data-outline="#000000ff" aria-label="Muted Teal"></button> <!-- muted teal -->
                        <button type="button" class="colors" data-color="#A3B18A" data-outline="#000000ff" aria-label="Olive Green"></button> <!-- olive green -->
                        <button type="button" class="colors" data-color="#D4A373" data-outline="#000000ff" aria-label="Terracotta"></button> <!-- terracotta -->
                        <button type="button" class="colors" data-color="#E6CCB2" data-outline="#000000ff" aria-label="Sand"></button> <!-- sand -->
                        <button type="button" class="colors" data-color="#B5838D" data-outline="#000000ff" aria-label="Muted Rose"></button> <!-- muted rose -->
                        <button type="button" class="colors" data-color="#6D6875" data-outline="#000000ff" aria-label="Smoky Plum"></button> <!-- smoky plum -->
                        <button type="button" class="colors" data-color="#9CA3AF" data-outline="#000000ff" aria-label="Cool Grey"></button> <!-- cool grey -->
                        <button type="button" class="colors" data-color="#94A3B8" data-outline="#000000ff" aria-label="Steel Blue"></button> <!-- steel blue -->
                        <button type="button" class="colors" data-color="#64748B" data-outline="#000000ff" aria-label="Graphite Blue"></button> <!-- graphite blue -->
                        <button type="button" class="colors" data-color="#F5E6CC" data-outline="#000000ff" aria-label="Peach Cream"></button> <!-- peach cream -->
                        <button type="button" class="colors" data-color="#A2C2A2" data-outline="#000000ff" aria-label="Sage Green"></button> <!-- sage green -->
                    </div>`);
                const colors = container.querySelectorAll(".colors");

                colors.forEach(color=>{
                    color.addEventListener("click", (event)=>{
                        if(currentContainerId.includes("Single")){
                            handleColorClick(event);
                        }else if(currentContainerId.includes("Double")){
                            handleColorClickDouble(event);
                        }else if(currentContainerId.includes("Triple")){
                            handleColorClickTriple(event);
                        }
                })
                })

                document.querySelectorAll(".colors").forEach(btn => {
                    const color = btn.dataset.color;
                    btn.style.backgroundColor = color;
                    btn.style.border = "1px solid #000"; 
                    btn.style.width = "30px";            
                    btn.style.height = "30px";
                    btn.style.cursor = "pointer";
                    btn.style.margin = "1%";
                    });

                } else {
                console.warn("No element with .hideOptions found inside container");
                }
            }else{
                container.classList.add("hide");
            }
        })}

//add event listener to each option for click
seeMoreBtn.forEach(btn=>{
    btn.addEventListener("click", (event) => handleClick(event));
});
//add event listener to right arrow

//--------------------------------------------------------------------------------------------------HANDLE COLOUR CLICKS-------------------------------------------------------------------------------------------------------------------------------------------
function handleColorClick(e){
    let colors = document.querySelectorAll(".colors");
    colors.forEach(color=>{
        color.classList.remove("selected");
    })
    e.target.classList.add("selected");
    let layer = e.target.parentNode.parentNode.parentNode.querySelector(".arch svg");
    console.log(layer);
    let ellipses = layer.querySelectorAll("ellipse");
    console.log(ellipses);
    let selectedColor = e.target.dataset.color;
    let outline = e.target.dataset.outline;
    console.log(selectedColor);
    ellipses.forEach(circle=>{
      if(circle.getAttribute("inkscape:label") === "grey"){
        circle.style.fill = selectedColor;
        circle.style.stroke = outline;
      }
    })
}

function handleColorClickDouble(e){
   const colors = document.querySelectorAll(".colors");
  const layer = e.target.closest(".container").querySelector(".arch svg");
  const ellipses = layer.querySelectorAll("ellipse");
  const selectedColor = e.target.dataset.color;
  const outline = e.target.dataset.outline;
  const statement = document.querySelector("#arrowContainer p");
  const text = statement.textContent;

  // Clear previous selection
  colors.forEach(color => color.classList.remove("selected"));

  // Highlight clicked button
  e.target.classList.add("selected");

  // Apply fill to correct ellipse
  ellipses.forEach(circle => {
    const label = circle.getAttribute("inkscape:label");
    if (
      (label === "grey" && text === "Pick your first color") ||
      (label === "white" && text === "Pick your second color")
    ) {
      circle.style.fill = selectedColor;
      circle.style.stroke = outline;
      saveSelection(text, selectedColor);
    }
  });
}

function handleColorClickTriple(e) {
  const colors = document.querySelectorAll(".colors");
  const layer = e.target.closest(".container").querySelector(".arch svg");
  const ellipses = layer.querySelectorAll("ellipse");
  const selectedColor = e.target.dataset.color;
  const outline = e.target.dataset.outline;
  const statement = document.querySelector("#arrowContainer p");
  const text = statement.textContent;

  // Clear previous selection
  colors.forEach(color => color.classList.remove("selected"));

  // Highlight clicked button
  e.target.classList.add("selected");

  // Apply fill to correct ellipse
  ellipses.forEach(circle => {
    const label = circle.getAttribute("inkscape:label");
    if (
      (label === "black" && text === "Pick your first color") ||
      (label === "grey" && text === "Pick your second color") ||
      (label === "white" && text === "Pick your third color")
    ) {
      circle.style.fill = selectedColor;
      circle.style.stroke = outline;
      saveSelection(text, selectedColor);
    }
  });
}

//--------------------------------------------------------------------------------------------------UPDATE TEXT---------------------------------------------------------------------------------------------------------------------------------------------------
function updateStatementText(newText, direction) {
  const statement = document.querySelector("#arrowContainer .statement");
  let currentContainer = statement.closest(".container");
  console.log(currentContainer);
  const buttons = document.querySelector("#buttons");
  const options = buttons.parentNode.querySelector(".picks");
  if (!statement || !buttons || !options) return;

  buttons.classList.remove("animate-left", "animate-right");
  void buttons.offsetWidth; // force reflow
  buttons.classList.add(`animate-${direction}`);

  statement.classList.add("fade-out");
  setTimeout(() => {
    statement.textContent = newText;
    statement.classList.remove("fade-out");
  }, 300);
}

//--------------------------------------------------------------------------------------------------SAVE SELECTION TO VARIABLE---------------------------------------------------------------------------------------------------------------------------------------------------
function saveSelection(position, color) {
    if(position === "Pick your first color"){
        currentSelection.firstColor = color;
    }else if(position === "Pick your second color"){
        currentSelection.secondColor = color;
    }else if(position === "Pick your third color"){
        currentSelection.thirdColor = color;
    }
}
//--------------------------------------------------------------------------------------------------HANDLE ARROW CLICKS---------------------------------------------------------------------------------------------------------------------------------------------------
function rightArrowClick() {
  const statement = document.querySelector("#arrowContainer .statement");
  const text = statement.textContent;
  const colors = document.querySelectorAll(".colors");
  if (text === "Pick your first color") {
    updateStatementText("Pick your second color", "right");
    colors.forEach(colorBtn=>{
      colorBtn.classList.remove("selected");
      if(colorBtn.dataset.color === currentSelection.secondColor){
        colorBtn.classList.add("selected");
      }
    })
  } else if (text === "Pick your second color") {
    if(statement.closest(".container").id.includes("Double")){
      updateStatementText("Pick your first color", "right");
      colors.forEach(colorBtn=>{
        colorBtn.classList.remove("selected");
        if(colorBtn.dataset.color === currentSelection.firstColor){
          colorBtn.classList.add("selected");
        }
      });
      return;
    }
    updateStatementText("Pick your third color", "right");
    colors.forEach(colorBtn=>{
      colorBtn.classList.remove("selected");
      if(colorBtn.dataset.color === currentSelection.thirdColor){
        colorBtn.classList.add("selected");
      }
    });
  } else {
    updateStatementText("Pick your first color", "right");
    colors.forEach(colorBtn=>{
      colorBtn.classList.remove("selected");
      if(colorBtn.dataset.color === currentSelection.firstColor){
        colorBtn.classList.add("selected");
      }
    });
  }
}

function leftArrowClick() {
  const statement = document.querySelector("#arrowContainer .statement");
  const text = statement.textContent;
  const colors = document.querySelectorAll(".colors");
  if (text === "Pick your first color") {
    if(statement.closest(".container").id.includes("Double")){
      updateStatementText("Pick your second color", "left");
      colors.forEach(colorBtn=>{
        colorBtn.classList.remove("selected");
        if(colorBtn.dataset.color === currentSelection.secondColor){
          colorBtn.classList.add("selected");
        }
    });
      return;
    }
    updateStatementText("Pick your third color", "left");
    colors.forEach(colorBtn=>{
      colorBtn.classList.remove("selected");
      if(colorBtn.dataset.color === currentSelection.thirdColor){
        colorBtn.classList.add("selected");
      }
    });
  } else if (text === "Pick your second color") {
    updateStatementText("Pick your first color", "left");
    colors.forEach(colorBtn=>{
      colorBtn.classList.remove("selected");
      if(colorBtn.dataset.color === currentSelection.firstColor){
        colorBtn.classList.add("selected");
      }
    });
  } else {
    updateStatementText("Pick your second color", "left");
    colors.forEach(colorBtn=>{
      colorBtn.classList.remove("selected");
      if(colorBtn.dataset.color === currentSelection.secondColor){
        colorBtn.classList.add("selected");
      }
    });
  }
}

//--------------------------------------------------------------------------------------------------HANDLE CLICK OF GO BACK BUTTON---------------------------------------------------------------------------------------------------------------------------------------------------
function goBack() {
  containers.forEach(container => {
    container.classList.remove("maximise");
    container.classList.remove("hide");

    document.getElementById("home").style.display = "flex";
    const colors = document.getElementById("buttons");
    const backBtn = container.querySelector(".back");
    const saveBtn = container.querySelector(".save");
    const shareBtn = container.querySelector(".share");
    const picks = container.querySelector(".picks");
    const options = container.querySelector(".hideOptions");
    const seeMoreBtn = container.querySelector(".seeMore"); 

    if (colors) colors.remove();
    if (backBtn) backBtn.classList.add("hide");
    if (saveBtn) saveBtn.classList.add("hide");
    if (shareBtn) shareBtn.classList.add("hide");
    if (picks) picks.innerHTML = "";

    if (options) {
      options.classList.add("hideOptions");
      const buttons = options.querySelector("#buttons");
      if (buttons) buttons.remove();
    }

    if (seeMoreBtn) seeMoreBtn.querySelector("button").classList.remove("hide");
  });
}

const sectionIds = [
  "home",
  "services",
  "reviews",
  "contact",
  "gallery",
  "shop",
  "calendar",
  "basket"
];

sectionIds.forEach(id => {
  const link = document.querySelector(`a[href="#${id}"]`);
  const target = document.getElementById(id);

  if (link && target) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      goBack();
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
});
//--------------------------------------------------------------------------------------------------SCROLL FUNCTIONALITY-------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        el.classList.add("visible");
      }else if(elementTop > windowHeight - 50){
        el.classList.remove("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // trigger on load

});

