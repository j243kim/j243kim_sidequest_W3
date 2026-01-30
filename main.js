// ------------------------------------------------------------
// main.js = the "router" (traffic controller) for the whole game
// ------------------------------------------------------------
//
// This project has multiple screens representing story scenes.
// Each screen lives in its own file and defines:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen and game state
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

// ------------------------------
// Global game state
// ------------------------------
// Current screen tracking
let currentScreen = "start";
// Possible values: "start" | "instr" | "scene1" | "scene2_good" | "scene2_bad" | "ending_good" | "ending_bad"

// BONUS: Karma stat that persists across scenes
// Positive karma = good choices, Negative karma = bad choices
let karma = 0;

// ------------------------------
// setup() runs ONCE at the beginning
// ------------------------------
function setup() {
  createCanvas(800, 800);
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame
// ------------------------------
// This is the core "router" for visuals.
function draw() {
  if (currentScreen === "start") drawStart();
  else if (currentScreen === "instr") drawInstr();
  else if (currentScreen === "scene1") drawScene1();
  else if (currentScreen === "scene2_good") drawScene2Good();
  else if (currentScreen === "scene2_bad") drawScene2Bad();
  else if (currentScreen === "ending_good") drawEndingGood();
  else if (currentScreen === "ending_bad") drawEndingBad();
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "instr") instrMousePressed();
  else if (currentScreen === "scene1") scene1MousePressed();
  else if (currentScreen === "scene2_good") scene2GoodMousePressed();
  else if (currentScreen === "scene2_bad") scene2BadMousePressed();
  else if (currentScreen === "ending_good") endingGoodMousePressed();
  else if (currentScreen === "ending_bad") endingBadMousePressed();
}

// ------------------------------
// keyPressed() runs once each time a key is pressed
// ------------------------------
function keyPressed() {
  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "instr") instrKeyPressed();
  else if (currentScreen === "scene1") scene1KeyPressed?.();
  else if (currentScreen === "scene2_good") scene2GoodKeyPressed?.();
  else if (currentScreen === "scene2_bad") scene2BadKeyPressed?.();
  else if (currentScreen === "ending_good") endingGoodKeyPressed?.();
  else if (currentScreen === "ending_bad") endingBadKeyPressed?.();
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
// Checks whether the mouse is inside a rectangle (CENTER mode).
// Input:  an object with { x, y, w, h }
// Output: true if mouse is over the rectangle, otherwise false
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

// ------------------------------------------------------------
// Shared helper function: drawKarmaStat()
// ------------------------------------------------------------
// Displays the karma stat in the top-left corner
function drawKarmaStat() {
  push();
  fill(0);
  textSize(18);
  textAlign(LEFT, TOP);

  // Display karma with a visual indicator
  let karmaText = "Karma: " + karma;
  if (karma > 0) karmaText += " ✦";
  else if (karma < 0) karmaText += " ✧";

  text(karmaText, 20, 20);
  pop();
}

// ------------------------------------------------------------
// Shared helper function: resetGame()
// ------------------------------------------------------------
// Resets the game state for a new playthrough
function resetGame() {
  karma = 0;
  currentScreen = "start";
}

// ------------------------------------------------------------
// Shared helper function: drawStoryButton()
// ------------------------------------------------------------
// Draws a styled button for story scenes
function drawStoryButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 220, 180, 230);
    drawingContext.shadowBlur = 18;
    drawingContext.shadowColor = color(255, 200, 150);
  } else {
    fill(255, 245, 220, 200);
    drawingContext.shadowBlur = 6;
    drawingContext.shadowColor = color(200, 200, 200);
  }

  rect(x, y, w, h, 12);
  drawingContext.shadowBlur = 0;

  fill(50, 40, 30);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
