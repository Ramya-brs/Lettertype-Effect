/** 
Author: Build Rise Shine with Nyros (BRS) 
Created: 2023 
Library / Component: Script file
Description: Letter Type Effect
(c) Copyright by BRS with Nyros. 
**/

/* Get Our Elements */
const containerDiv = document.getElementById("content");
const resetBtn = document.getElementById("resetBtn");

// Default theme
let chathams_blue = "#1A4B84";

// function that sets the content
function setContent() {
  const content = `
  <div class="container">
  <div class="row">
    <h2 data-type data-type-min="100" data-type-max="300">
     FRONTEND DEVELOPER
    </h2>
    <p class="text-start lh-lg" data-type data-type-min="1" data-type-max="6">
   A front-end developer is a type of software developer who specializes in creating and designing 
   the user interface (UI) and user experience (UX) of websites and web applications. 
   The primary responsibility of a front-end developer is to ensure that the visual and interactive 
   aspects of a website or application are user-friendly, aesthetically pleasing, and functionally efficient.

   Front-end developers work with various technologies, tools, and languages, including:

   1. HTML (HyperText Markup Language):- The standard markup language used to create the structure and layout of web pages.
   2. CSS (Cascading Style Sheets):- A stylesheet language used to control the presentation, formatting,
   and appearance of web pages, such as colors, fonts, and layout.
   3. JavaScript:- A programming language that allows developers to add interactivity, 
   animations, and other dynamic elements to websites and web applications.
    </p>
  </div>
</div>
  `;
  containerDiv.innerHTML = content;
}

// delay
function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// get random number
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// recursion
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;

  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait);
    if (index <= text.length) {
      drawLetter();
    }
  }

  drawLetter();
}

// restart the effect
function restartTypeEffect(params) {
  containerDiv.innerHTML = "";
  setContent();
  document.querySelectorAll("[data-type]").forEach(draw);
}

// event listener for restart
resetBtn.addEventListener("click", restartTypeEffect);

// Init content 
setContent();
document.querySelectorAll("[data-type]").forEach(draw);

// theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
