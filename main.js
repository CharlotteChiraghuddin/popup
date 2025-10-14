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


let seeMoreBtn = document.querySelectorAll(".seeMore");
let containers = document.querySelectorAll(".container");


let statementsSingle =["Pick your color"];
let statementsDouble =["Pick your first color", "Pick your second color"];
let statementsTriple =["Pick your first color", "Pick your second color", "Pick your third color"];

//--------------------------------------------------------------------------------------------------HANDLE CLICK OF SEE MORE BUTTON-------------------------------------------------------------------------------------------------------------------------------------------
function handleClick(e){        
        let currentContainerId = e.target.parentNode.parentNode.parentNode.id;
        e.target.classList.add("hide");
        console.log(e.target.parentNode.parentNode.closest(".goBack"));
        containers.forEach(container=>{
            if(container.id === currentContainerId){
                container.classList.add("maximise");
//-------------------------------------------------------------------------------------------------------UPDATE ARROWS-------------------------------------------------------------------------------------------------------------------------------------------------------
                let picks = container.querySelector(".picks");
                if(currentContainerId.includes("Single")){
                    picks.innerHTML = 
                            `<div id="arrowContainer">
                                <button id="leftArrow class="hide"><img src="./assets/media/leftArrow.svg"></button>
                                <p class="statement">${statementsSingle[0]}</p>
                                <button id="rightArrow calss="hide"><img src="./assets/media/rightArrow.svg"></button>
                            </div>`
                }else if(currentContainerId.includes("Double")){
                    picks.innerHTML = 
                            `<div id="arrowContainer">
                                <button id="leftArrow"><img src="./assets/media/leftArrow.svg"></button>
                                <p class="statement">${statementsDouble[0]}</p>
                                <button id="rightArrow"><img src="./assets/media/rightArrow.svg"></button>
                            </div>`
                }else if(currentContainerId.includes("Triple")){
                     picks.innerHTML = 
                            `<div id="arrowContainer">
                                <button id="leftArrow"><img src="./assets/media/leftArrow.svg"></button>
                                <p class="statement">${statementsTriple[0]}</p>
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
                    <div class="buttons">
                    <button type="button" class="colors" data-color="#000000ff" data-outline="#ffffff"></button> <!-- black -->
                    <button type="button" class="colors" data-color="#ffffffff" data-outline="#000000ff"></button> <!-- white -->
                    <button type="button" class="colors" data-color="#FFD700" data-outline="#000000ff"></button> <!-- gold -->
                    <button type="button" class="colors" data-color="#ADD8E6" data-outline="#000000ff"></button> <!-- baby blue -->
                    <button type="button" class="colors" data-color="#FFB6C1" data-outline="#000000ff"></button> <!-- baby pink -->
                    <button type="button" class="colors" data-color="#194D19" data-outline="#000000ff"></button> <!-- deep forest green -->
                    <button type="button" class="colors" data-color="#19294D" data-outline="#000000ff"></button> <!-- midnight blue -->
                    <button type="button" class="colors" data-color="#4D1919" data-outline="#000000ff"></button> <!-- oxblood -->
                    <button type="button" class="colors" data-color="#E2C7A6" data-outline="#000000ff"></button> <!-- warm beige -->
                    <button type="button" class="colors" data-color="#A67C52" data-outline="#000000ff"></button> <!-- warm taupe -->
                    <button type="button" class="colors" data-color="#C2B280" data-outline="#000000ff"></button> <!-- muted khaki -->
                    <button type="button" class="colors" data-color="#B0A8B9" data-outline="#000000ff"></button> <!-- dusty lavender -->
                    <button type="button" class="colors" data-color="#8FA9B9" data-outline="#000000ff"></button> <!-- slate blue -->
                    <button type="button" class="colors" data-color="#7D9F94" data-outline="#000000ff"></button> <!-- muted teal -->
                    <button type="button" class="colors" data-color="#A3B18A" data-outline="#000000ff"></button> <!-- olive green -->
                    <button type="button" class="colors" data-color="#D4A373" data-outline="#000000ff"></button> <!-- terracotta -->
                    <button type="button" class="colors" data-color="#E6CCB2" data-outline="#000000ff"></button> <!-- sand -->
                    <button type="button" class="colors" data-color="#B5838D" data-outline="#000000ff"></button> <!-- muted rose -->
                    <button type="button" class="colors" data-color="#6D6875" data-outline="#000000ff"></button> <!-- smoky plum -->
                    <button type="button" class="colors" data-color="#9CA3AF" data-outline="#000000ff"></button> <!-- cool grey -->
                    <button type="button" class="colors" data-color="#94A3B8" data-outline="#000000ff"></button> <!-- steel blue -->
                    <button type="button" class="colors" data-color="#64748B" data-outline="#000000ff"></button> <!-- graphite blue -->
                    <button type="button" class="colors" data-color="#F5E6CC" data-outline="#000000ff"></button> <!-- peach cream -->
                    <button type="button" class="colors" data-color="#A2C2A2" data-outline="#000000ff"></button> <!-- sage green -->
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
    let layer = e.target.parentNode.parentNode.parentNode.querySelector(".arch").querySelector("g");
    console.log(layer);
    let ellipses = layer.querySelectorAll("ellipse");
    console.log(ellipses);
    let selectedColor = e.target.dataset.color;
    let outline = e.target.dataset.outline;
    console.log(selectedColor);
    ellipses.forEach(circle=>{
        circle.style.fill = selectedColor;
        circle.style.stroke = outline;
        
    })
}

function handleColorClickDouble(e){
    console.log("its working for double!");
    let layer = e.target.parentNode.parentNode.parentNode.querySelector(".arch").querySelector("g");
    console.log(layer);
    let ellipses = layer.querySelectorAll("ellipse");
    let selectedColor = e.target.dataset.color;
    let outline = e.target.dataset.outline;
}

function handleColorClickTriple(e){
    console.log("its working for triple");
    let layer = e.target.parentNode.parentNode.parentNode.querySelector(".arch").querySelector("g");
    let ellipses = layer.querySelectorAll("ellipse");
    let selectedColor = e.target.dataset.color;
    let outline = e.target.dataset.outline;
    let statement = document.querySelector("#arrowContainer").querySelector("p");
    let text = statement.textContent;
    console.log(statement);
    ellipses.forEach(circle=>{
        const label = circle.getAttribute("inkscape:label");
        if(label === "black" && text==="Pick your first color"){
            circle.style.fill = selectedColor;
            circle.style.stroke = outline;
        }else if(label === "grey" && text==="Pick your second color"){
            circle.style.fill = selectedColor;
            circle.style.stroke = outline;
        }else if(label === "white" && text==="Pick your third color"){
            circle.style.fill = selectedColor;
            circle.style.stroke = outline;
        }
    })
}

//--------------------------------------------------------------------------------------------------HANDLE CLICK OF GO BACK BUTTON---------------------------------------------------------------------------------------------------------------------------------------------------
function updateStatementText(newText) {
  const statement = document.querySelector("#arrowContainer .statement");
  const options = document.querySelector("#arrowContainer").parentNode.parentNode;
  console.log(options);
  if (!statement) return;

  options.classList.add("fade-out");

  setTimeout(() => {
    statement.textContent = newText;
    options.classList.remove("fade-out");
  }, 300); // match CSS duration
}

function rightArrowClick() {
  const statement = document.querySelector("#arrowContainer .statement");
  const text = statement.textContent;

  if (text === "Pick your first color") {
    updateStatementText("Pick your second color");
  } else if (text === "Pick your second color") {
    updateStatementText("Pick your third color");
  } else {
    updateStatementText("Pick your first color");
  }
}

function leftArrowClick() {
  const statement = document.querySelector("#arrowContainer .statement");
  const text = statement.textContent;

  if (text === "Pick your first color") {
    updateStatementText("Pick your third color");
  } else if (text === "Pick your second color") {
    updateStatementText("Pick your first color");
  } else {
    updateStatementText("Pick your second color");
  }
}
//--------------------------------------------------------------------------------------------------HANDLE CLICK OF GO BACK BUTTON---------------------------------------------------------------------------------------------------------------------------------------------------
function goBack(e){
    let currentContainer = e.target.parentNode.id;
    containers.forEach((container)=>{
        container.classList.remove("hide");
        if(container.id === currentContainer){
            container.querySelector(".options").classList.add("hideOptions");
            container.classList.remove("maximise");
        }
    })
    
}

document.querySelector('a[href="#home"]').addEventListener("click", () => {
    location.reload();
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

