//onload hide loading screen
window.onload =function(){
    document.getElementById("loading").style.display="none";
}

if (window.location.pathname.includes("shop.html")) {
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

//--------------------------------------------------------------------------------------------------HOVER CONTAINER BEHAVIOUR-------------------------------------------------------------------------------------------------------------------------------------------
const content = document.querySelectorAll(".content");
content.forEach(container=>{
    container.addEventListener("mouseover", ()=>{
        let currentContainer = container.closest(".archContainer");
        currentContainer.classList.add("hovered");
    });
    container.addEventListener("mouseout", ()=>{
        let currentContainer = container.closest(".archContainer");
        currentContainer.classList.remove("hovered");
    });
    container.addEventListener("click", (event) => {
        handleClick(event);
    });
})

}

if (window.location.pathname.includes("seeMore.html")) {
  const params = new URLSearchParams(window.location.search);
  const archId = params.get("archId");

switch(archId){
    case "arch1Single":
        fetch("assets/media/arch1single.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
    case "arch1Double":
        fetch("assets/media/arch1double.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
    
    case "arch1Triple":
        fetch("assets/media/arch1triple.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
        
    case "arch2Single":
        fetch("assets/media/arch2single.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
    case "arch2Double":
        fetch("assets/media/arch2double.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
    case "arch2Triple":
        fetch("assets/media/arch2triple.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
    case "arch3Single":
        fetch("assets/media/arch3single.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
    case "arch3Double":
        fetch("assets/media/arch3double.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
    case "arch3Triple":
        fetch("assets/media/arch3triple.svg")
        .then(response=> response.text())
        .then(svg=>{
            document.getElementById("archSelectionImage").innerHTML=svg;
        });
        break;
    default:
        console.error("Invalid archId parameter");
        break;

}
  document.querySelectorAll(".colors").forEach(btn => {
    const color = btn.dataset.color;
    btn.style.backgroundColor = color;
    btn.style.width = "30px";            
    btn.style.height = "30px";
    btn.style.cursor = "pointer";
    btn.style.margin = "1%";
    btn.style.border = "none";
    btn.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.2)";
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });
  
}

//Delare all gloabal variables
let welcomeText = ["Your event, your style — we make it happen","No matter the occasion, we make it special","Designed for every moment worth celebrating","Whatever the celebration, we’re here to elevate it"];
let containers = document.querySelectorAll(".archContainer");
let currentSelection ={"firstColor":null, "secondColor":null, "thirdColor":null}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");


//--------------------------------------------------------------------------------------------------NAV LINKS ACTIVE STATE-------------------------------------------------------------------------------------------------------------------------------------------
//change nav style when in different section
navLinks.forEach(link=>{
    const linkHref = link.getAttribute("href").replace("./", "");
    const currentPage = window.location.pathname.split("/").pop();

  if(linkHref === currentPage){
    link.classList.add("active");
  }
})
//--------------------------------------------------------------------------------------------------ROTATE THE WELCOME TEXT-------------------------------------------------------------------------------------------------------------------------------------------
if (window.location.pathname.includes("index.html")) {

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
}

//--------------------------------------------------------------------------------------------------HANDLE CLICK OF SEE MORE BUTTON-------------------------------------------------------------------------------------------------------------------------------------------
function handleClick(e){
  const arch=e.target.closest(".archContainer");
  const archId = arch.id;
  console.log(archId);
  window.location.href = `seeMore.html?archId=${archId}`;
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("seeMore.html")) {
    const params = new URLSearchParams(window.location.search);
    const newID = params.get("archId");

    if (newID) {
      const target = document.getElementById("archSelection");
      if (target) {
        target.id = newID;
        if(newID.includes("Single")){
          document.getElementById("arrowContainer").querySelector("#leftArrow").classList.add("hide");
          document.getElementById("arrowContainer").querySelector("#rightArrow").classList.add("hide");
          document.getElementById("arrowContainer").querySelector(".statement").textContent="Pick your color";
        }else if(newID.includes("Double")||newID.includes("Triple")){
          document.getElementById("arrowContainer").querySelector(".statement").textContent="Pick your first color";
          document.getElementById("arrowContainer").querySelector("#leftArrow").classList.remove("hide");
          document.getElementById("arrowContainer").querySelector("#rightArrow").classList.remove("hide");
        }
    }
  

  let rightArrow = document.getElementById("rightArrow");
  let leftArrow = document.getElementById("leftArrow");
  rightArrow.addEventListener("click",rightArrowClick);
  leftArrow.addEventListener("click",leftArrowClick);

                const colors = document.querySelectorAll(".colors");
                const currentContainerId = new URLSearchParams(window.location.search).get("archId");
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
              }
    document.getElementById("back").addEventListener("click", goBack);}
});

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
  const layer = e.target.closest(".archContainer").querySelector(".arch svg");
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
  const layer = e.target.closest(".archContainer").querySelector(".arch svg");
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
  let currentContainer = statement.closest(".archContainer");
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
    if(statement.closest(".archContainer").id.includes("Double")){
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
    if(statement.closest(".archContainer").id.includes("Double")){
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
  //reset all saved color selections
  currentSelection = {"firstColor":null, "secondColor":null, "thirdColor":null};
  window.location.href = "shop.html";
}

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

