// ========================================
// 1. HIDE LOADING SCREEN ON LOAD
// ========================================
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  if (loading) loading.style.display = "none";
});

/* --------------------------------------------------------------
   2. HEADER – MOBILE vs DESKTOP + ALWAYS-VISIBLE TITLE
   -------------------------------------------------------------- */
const header = document.querySelector("header");
let isMobile = window.innerWidth <= 768;

/* ----- TITLE that never disappears ----- */
const titleHTML = `<div id="name"><p>POPUP</p></div>`;

/* ----- Mobile header (title + more button) ----- */
const mobileHeaderHTML = `
  ${titleHTML}
  <div id="more" onclick="openNav()">
    <img src="./assets/media/more.png" alt="Menu">
  </div>
`;

/* ----- Desktop header (title + two nav sections) ----- */
const desktopHeaderHTML = `
  <div class="header-wrapper">
    <div id="sec1"><nav><ul>
      <li><a class="nav-link" href="./index.html">Home</a></li>
      <li><a class="nav-link" href="./services.html">Services</a></li>
      <li><a class="nav-link" href="./shop.html">Shop</a></li>
    </ul></nav></div>
    ${titleHTML}
    <div id="sec2"><nav><ul>
      <li><a class="nav-link" href="./reviews.html">Reviews</a></li>
      <li><a class="nav-link" href="./contact.html">Contact</a></li>
      <li><a class="nav-link" href="./basket.html">Basket</a></li>
    </ul></nav></div>
  </div>
`;

/* ----- Render initial header ----- */
header.innerHTML = isMobile ? mobileHeaderHTML : desktopHeaderHTML;

/* --------------------------------------------------------------
   3. NAVIGATION – OPEN / CLOSE (smooth)
   -------------------------------------------------------------- */
function openNav() {
  // Keep the title, replace everything else
  header.innerHTML = titleHTML;

  // Close button
  const closeBtn = Object.assign(document.createElement("div"), {
    id: "close",
    innerHTML: `<img src="./assets/media/close.png" alt="Close">`,
    onclick: closeNav
  });
  header.appendChild(closeBtn);

  // Nav overlay
  const nav = Object.assign(document.createElement("div"), {
    className: "nav-wrapper",
    innerHTML: `
      <nav>
        <ul>
          <li><a class="nav-link" href="./index.html">Home</a></li>
          <li><a class="nav-link" href="./services.html">Services</a></li>
          <li><a class="nav-link" href="./shop.html">Shop</a></li>
          <li><a class="nav-link" href="./reviews.html">Reviews</a></li>
          <li><a class="nav-link" href="./contact.html">Contact</a></li>
          <li><a class="nav-link" href="./basket.html">Basket</a></li>
        </ul>
      </nav>
    `
  });
  header.appendChild(nav);

  requestAnimationFrame(() => {
    nav.classList.add("show");
    closeBtn.classList.add("show");
  });
}

function closeNav() {
  const nav      = document.querySelector(".nav-wrapper");
  const closeBtn = document.getElementById("close");

  if (!nav) {
    header.innerHTML = mobileHeaderHTML;
    return;
  }

  nav.classList.remove("show");
  closeBtn.classList.remove("show");

  const onEnd = () => {
    header.innerHTML = mobileHeaderHTML;
    nav.removeEventListener("transitionend", onEnd);
  };
  nav.addEventListener("transitionend", onEnd);
}

/* --------------------------------------------------------------
   4. RESIZE – REBUILD HEADER ON SCREEN CHANGE
   -------------------------------------------------------------- */
window.addEventListener("resize", () => {
  const nowMobile = window.innerWidth <= 768;
  if (nowMobile !== isMobile) {
    isMobile = nowMobile;
    header.innerHTML = isMobile ? mobileHeaderHTML : desktopHeaderHTML;
  }
});

/* --------------------------------------------------------------
   5. SVG LOADING: SHOP PAGE
   -------------------------------------------------------------- */
if (location.pathname.includes("shop.html")) {
  const svgMap = {
    arch1: "arch1single.svg",
    arch2: "arch1double.svg",
    arch3: "arch1triple.svg",
    arch4: "arch2single.svg",
    arch5: "arch2double.svg",
    arch6: "arch2triple.svg",
    arch7: "arch3single.svg",
    arch8: "arch3double.svg",
    arch9: "arch3triple.svg"
  };

  Object.entries(svgMap).forEach(([id, file]) => {
    fetch(`assets/media/${file}`)
      .then(res => res.text())
      .then(svg => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = svg;
      });
  });

  document.querySelectorAll(".content").forEach(container => {
    const arch = container.closest(".archContainer");
    container.addEventListener("mouseover", () => arch.classList.add("hovered"));
    container.addEventListener("mouseout", () => arch.classList.remove("hovered"));
    container.addEventListener("click", handleClick);
  });
}

/* --------------------------------------------------------------
   6. SVG LOADING: SEE MORE PAGE
   -------------------------------------------------------------- */
if (location.pathname.includes("seeMore.html")) {
  const params = new URLSearchParams(location.search);
  const archId = params.get("archId");
  const idToFile = {
    arch1Single: "arch1single.svg",
    arch1Double: "arch1double.svg",
    arch1Triple: "arch1triple.svg",
    arch2Single: "arch2single.svg",
    arch2Double: "arch2double.svg",
    arch2Triple: "arch2triple.svg",
    arch3Single: "arch3single.svg",
    arch3Double: "arch3double.svg",
    arch3Triple: "arch3triple.svg"
  };

  if (archId && idToFile[archId]) {
    fetch(`assets/media/${idToFile[archId]}`)
      .then(res => res.text())
      .then(svg => {
        const img = document.getElementById("archSelectionImage");
        if (img) img.innerHTML = svg;
      });
  }

  document.querySelectorAll(".colors").forEach(btn => {
    const color = btn.dataset.color;
    Object.assign(btn.style, {
      backgroundColor: color,
      width: "30px",
      height: "30px",
      cursor: "pointer",
      margin: "1%",
      border: "none",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)"
    });

    btn.addEventListener("mouseover", () => btn.style.transform = "scale(1.1)");
    btn.addEventListener("mouseout", () => btn.style.transform = "scale(1)");
  });
}

/* --------------------------------------------------------------
   7. TOP SELLERS (INDEX)
   -------------------------------------------------------------- */
if (location.pathname.includes("index.html")) {
  const topSellerSVGs = ["arch1triple.svg", "arch2triple.svg", "arch3triple.svg"];
  const ids = ["arch3", "arch6", "arch9"];

  topSellerSVGs.forEach((file, i) => {
    fetch(`assets/media/${file}`)
      .then(res => res.text())
      .then(svg => {
        const el = document.getElementById(ids[i]);
        if (el) el.innerHTML = svg;
      });
  });
}

/* --------------------------------------------------------------
   8. GLOBAL VARIABLES & NAV ACTIVE
   -------------------------------------------------------------- */
const welcomeText = [
  "Your event, your style — we make it happen",
  "No matter the occasion, we make it special",
  "Designed for every moment worth celebrating",
  "Whatever the celebration, we’re here to elevate it"
];

let currentSelection = { firstColor: null, secondColor: null, thirdColor: null };

document.querySelectorAll(".nav-link").forEach(link => {
  const href = link.getAttribute("href").replace("./", "");
  if (href === location.pathname.split("/").pop()) {
    link.classList.add("active");
  }
});

/* --------------------------------------------------------------
   9. WELCOME TEXT ROTATION (INDEX)
   -------------------------------------------------------------- */
if (location.pathname.includes("index.html")) {
  let index = 0;
  const el = document.getElementById("welcome-text");

  const rotate = () => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = welcomeText[index = (index + 1) % welcomeText.length];
      el.style.opacity = 1;
    }, 500);
  };

  setInterval(rotate, 4000);
  rotate();
}

/* --------------------------------------------------------------
   10. SEE MORE PAGE: LOGIC
   -------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  if (!location.pathname.includes("seeMore.html")) return;

  const params = new URLSearchParams(location.search);
  const archId = params.get("archId");
  const target = document.getElementById("archSelection");
  if (!target || !archId) return;

  target.id = archId;
  const statement = document.querySelector("#arrowContainer .statement");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");

  if (archId.includes("Single")) {
    [leftArrow, rightArrow].forEach(a => a.classList.add("hide"));
    statement.textContent = "Pick your color";
  } else {
    [leftArrow, rightArrow].forEach(a => a.classList.remove("hide"));
    statement.textContent = "Pick your first color";
  }

  document.getElementById("rightArrow").onclick = rightArrowClick;
  document.getElementById("leftArrow").onclick = leftArrowClick;

  const handler = archId.includes("Single") ? handleColorClick :
                  archId.includes("Double") ? handleColorClickDouble :
                  handleColorClickTriple;

  document.querySelectorAll(".colors").forEach(btn => {
    btn.addEventListener("click", handler);
  });

  document.getElementById("back").onclick = goBack;
});

/* --------------------------------------------------------------
   11. COLOR HANDLERS
   -------------------------------------------------------------- */
function handleColorClick(e) {
  document.querySelectorAll(".colors").forEach(c => c.classList.remove("selected"));
  e.target.classList.add("selected");

  const svg = e.target.closest(".archContainer").querySelector(".arch svg");
  const ellipses = svg.querySelectorAll("ellipse");
  const { color, outline } = e.target.dataset;

  ellipses.forEach(el => {
    if (el.getAttribute("inkscape:label") === "grey") {
      el.style.fill = color;
      el.style.stroke = outline;
    }
  });
}

function handleColorClickDouble(e) {
  const colors = document.querySelectorAll(".colors");
  const svg = e.target.closest(".archContainer").querySelector(".arch svg");
  const ellipses = svg.querySelectorAll("ellipse");
  const { color, outline } = e.target.dataset;
  const text = document.querySelector("#arrowContainer .statement").textContent;

  colors.forEach(c => c.classList.remove("selected"));
  e.target.classList.add("selected");

  ellipses.forEach(el => {
    const label = el.getAttribute("inkscape:label");
    if (
      (label === "grey" && text === "Pick your first color") ||
      (label === "white" && text === "Pick your second color")
    ) {
      el.style.fill = color;
      el.style.stroke = outline;
      saveSelection(text, color);
    }
  });
}

function handleColorClickTriple(e) {
  const colors = document.querySelectorAll(".colors");
  const svg = e.target.closest(".archContainer").querySelector(".arch svg");
  const ellipses = svg.querySelectorAll("ellipse");
  const { color, outline } = e.target.dataset;
  const text = document.querySelector("#arrowContainer .statement").textContent;

  colors.forEach(c => c.classList.remove("selected"));
  e.target.classList.add("selected");

  ellipses.forEach(el => {
    const label = el.getAttribute("inkscape:label");
    if (
      (label === "black" && text === "Pick your first color") ||
      (label === "grey" && text === "Pick your second color") ||
      (label === "white" && text === "Pick your third color")
    ) {
      el.style.fill = color;
      el.style.stroke = outline;
      saveSelection(text, color);
    }
  });
}

/* --------------------------------------------------------------
   12. ARROW NAVIGATION
   -------------------------------------------------------------- */
function updateStatementText(newText, direction) {
  const statement = document.querySelector("#arrowContainer .statement");
  const buttons = document.querySelector("#buttons");
  if (!statement || !buttons) return;

  buttons.classList.remove("animate-left", "animate-right");
  void buttons.offsetWidth;
  buttons.classList.add(`animate-${direction}`);

  statement.classList.add("fade-out");
  setTimeout(() => {
    statement.textContent = newText;
    statement.classList.remove("fade-out");
  }, 300);
}

function saveSelection(position, color) {
  if (position.includes("first")) currentSelection.firstColor = color;
  else if (position.includes("second")) currentSelection.secondColor = color;
  else if (position.includes("third")) currentSelection.thirdColor = color;
}

function rightArrowClick() {
  const statement = document.querySelector("#arrowContainer .statement");
  const text = statement.textContent;
  const colors = document.querySelectorAll(".colors");
  const archId = statement.closest(".archContainer").id;

  if (text === "Pick your first color") {
    updateStatementText("Pick your second color", "right");
    selectColor(colors, currentSelection.secondColor);
  } else if (text === "Pick your second color") {
    if (archId.includes("Double")) {
      updateStatementText("Pick your first color", "right");
      selectColor(colors, currentSelection.firstColor);
    } else {
      updateStatementText("Pick your third color", "right");
      selectColor(colors, currentSelection.thirdColor);
    }
  } else {
    updateStatementText("Pick your first color", "right");
    selectColor(colors, currentSelection.firstColor);
  }
}

function leftArrowClick() {
  const statement = document.querySelector("#arrowContainer .statement");
  const text = statement.textContent;
  const colors = document.querySelectorAll(".colors");
  const archId = statement.closest(".archContainer").id;

  if (text === "Pick your first color") {
    if (archId.includes("Double")) {
      updateStatementText("Pick your second color", "left");
      selectColor(colors, currentSelection.secondColor);
    } else {
      updateStatementText("Pick your third color", "left");
      selectColor(colors, currentSelection.thirdColor);
    }
  } else if (text === "Pick your second color") {
    updateStatementText("Pick your first color", "left");
    selectColor(colors, currentSelection.firstColor);
  } else {
    updateStatementText("Pick your second color", "left");
    selectColor(colors, currentSelection.secondColor);
  }
}

function selectColor(colors, savedColor) {
  colors.forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.color === savedColor);
  });
}

/* --------------------------------------------------------------
   13. GO BACK & SCROLL REVEAL
   -------------------------------------------------------------- */
function goBack() {
  currentSelection = { firstColor: null, secondColor: null, thirdColor: null };
  location.href = "shop.html";
}

function handleClick(e) {
  const arch = e.target.closest(".archContainer");
  if (arch) location.href = `seeMore.html?archId=${arch.id}`;
}

// Scroll reveal
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const onScroll = () => {
    const h = window.innerHeight;
    reveals.forEach(el => {
      el.classList.toggle("visible", el.getBoundingClientRect().top < h - 50);
    });
  };
  window.addEventListener("scroll", onScroll);
  onScroll();
});