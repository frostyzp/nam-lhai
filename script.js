/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-btn");
  const content = document.querySelector(".instructions-content");
  const arrow = document.querySelector(".arrow");

  toggleBtn.addEventListener("click", () => {
    console.log("button clicked");
    content.classList.toggle("hidden");

    if (content.classList.contains("hidden")) {
      arrow.textContent = "▼";
    } else {
      arrow.textContent = "▲";
    }

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "i") {
        e.preventDefault(); // Prevent default browser behavior
        console.log("shortcut press");

        content.classList.toggle("hidden");
      }
    });
  });

  // DOWNLOADING IMG --------------------------------------------------------
  const textInput = document.getElementById("textInput");
  const downloadBtn = document.getElementById("downloadBtn");

  downloadBtn.addEventListener("click", downloadAsImage);

  if (!textInput || !downloadBtn) {
    console.error("Could not find required elements");
    return;
  }

  // Changes in the text area
  function downloadAsImage() {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 600;

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // context.fillStyle = 'black'
    context.font = "5rem HK Grotesk";

    function wrapText(text, x, y, maxWidth, lineHeight) {
      const words = text.split(" "); // Split text into array of words
      let line = ""; // Current line being built
      let posY = y; // Current vertical position

      for (const word of words) {
        const testLine = line + word + " "; // Try adding next word
        const metrics = context.measureText(testLine); // Measure width

        if (metrics.width > maxWidth && line !== "") {
          context.fillText(line, x, posY);
          line = word + " ";
          posY += lineHeight;
        } else {
          // If line still fits, add the word
          line = testLine;
        }
      }
      // Draw the last line
      context.fillText(line, x, posY);
    }

    // Draw text
    const text = textInput.value;
    wrapText(text, 40, 40, canvas.width - 80, 24);
    console.log(text);

    // Convert to image and download
    const link = document.createElement("a");
    link.download = "text-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  
  const arrowLeft = document.querySelector(".arrowLeft");
  arrowLeft.addEventListener("click", nextImg);

  const keyboardImg = document.querySelector(".keyboardImg"); // if using class
  let keyboardArrNum = 0;
  

  let keyboardArr = [
    "https://cdn.glitch.global/7ecfe128-fa62-47d9-9ae8-7efbddec66fc/keyboard_weaving_instructions.png?v=1733456342109",
    "https://cdn.glitch.global/7ecfe128-fa62-47d9-9ae8-7efbddec66fc/keyboard_weaving02.png?v=1733456359098",
    "https://cdn.glitch.global/7ecfe128-fa62-47d9-9ae8-7efbddec66fc/keyboard_weaving01.png?v=1733456356895",
    "https://cdn.glitch.global/7ecfe128-fa62-47d9-9ae8-7efbddec66fc/keyboard_weaving01-1.png?v=1733456355387"
  ];
  
    keyboardImg.src = keyboardArr[0];


  function nextImg() {
    if (keyboardArrNum == keyboardArr.length - 1) {
      keyboardArrNum = 0;
    } else {
      keyboardArrNum += 1;
    }
    keyboardImg.src = keyboardArr[keyboardArrNum];
  }
  
  const lowercaseBtn = document.querySelector('.sidebarFilter small:first-child');
const uppercaseBtn = document.querySelector('.sidebarFilter small:last-child');
const sidebarLower = document.querySelector('.sidebarLower');  // Replace .X with your actual class
const sidebarUpper = document.querySelector('.sidebarUpper');  // Replace .X with your actual class


lowercaseBtn.addEventListener('click', () => {
  console.log('hehe');
  sidebarLower.classList.remove('hide');
  sidebarUpper.classList.add('hide');
  
    lowercaseBtn.classList.add('current');
  uppercaseBtn.classList.remove('current');
    
});

uppercaseBtn.addEventListener('click', () => {
  sidebarUpper.classList.remove('hide');
  sidebarLower.classList.add('hide');

uppercaseBtn.classList.add('current');
  lowercaseBtn.classList.remove('current');

});

})





