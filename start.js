// ------------------------------------------------------------
// start.js - Start/Menu Screen
// ------------------------------------------------------------
// This file defines:
// 1) drawStart() → what the start screen looks like
// 2) input handlers → what happens on click / key press
// 3) helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
function drawStart() {
  // Mystical forest-themed background
  background(40, 60, 50);

  // Draw decorative trees in background
  drawForestBackground();

  // ---- Title text ----
  fill(255, 245, 220);
  textSize(52);
  textAlign(CENTER, CENTER);
  text("The Mysterious Forest", width / 2, 150);

  // Subtitle
  fill(200, 220, 200);
  textSize(20);
  text("A Tale of Choices and Consequences", width / 2, 210);

  // ---- Buttons ----
  const beginBtn = {
    x: width / 2,
    y: 380,
    w: 260,
    h: 80,
    label: "BEGIN JOURNEY",
  };

  const instrBtn = {
    x: width / 2,
    y: 490,
    w: 260,
    h: 80,
    label: "INSTRUCTIONS",
  };

  drawMenuButton(beginBtn);
  drawMenuButton(instrBtn);

  // ---- Footer text ----
  fill(150, 170, 150);
  textSize(14);
  text("Press ENTER to begin or I for instructions", width / 2, 620);

  // ---- Cursor feedback ----
  const over = isHover(beginBtn) || isHover(instrBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Decorative forest background
// ------------------------------------------------------------
function drawForestBackground() {
  // Draw some simple tree silhouettes
  fill(30, 45, 35);
  noStroke();

  // Left trees
  triangle(80, 800, 120, 400, 160, 800);
  triangle(50, 800, 100, 450, 150, 800);

  // Right trees
  triangle(640, 800, 680, 380, 720, 800);
  triangle(680, 800, 720, 420, 760, 800);

  // Center distant trees
  fill(35, 52, 42);
  triangle(300, 800, 340, 500, 380, 800);
  triangle(420, 800, 460, 480, 500, 800);

  // Stars/fireflies
  fill(255, 255, 200, 150);
  for (let i = 0; i < 8; i++) {
    let x = 100 + i * 80;
    let y = 280 + sin(frameCount * 0.02 + i) * 20;
    ellipse(x, y, 4, 4);
  }
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
function startMousePressed() {
  const beginBtn = { x: width / 2, y: 380, w: 260, h: 80 };
  const instrBtn = { x: width / 2, y: 490, w: 260, h: 80 };

  if (isHover(beginBtn)) {
    // Reset karma when starting a new game
    karma = 0;
    currentScreen = "scene1";
  } else if (isHover(instrBtn)) {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
function startKeyPressed() {
  if (keyCode === ENTER) {
    karma = 0;
    currentScreen = "scene1";
  }

  if (key === "i" || key === "I") {
    currentScreen = "instr";
  }
}

// ------------------------------------------------------------
// Helper: drawMenuButton()
// ------------------------------------------------------------
function drawMenuButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(120, 180, 140, 230);
    drawingContext.shadowBlur = 25;
    drawingContext.shadowColor = color(100, 200, 150);
  } else {
    fill(80, 120, 90, 200);
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = color(50, 80, 60);
  }

  rect(x, y, w, h, 14);
  drawingContext.shadowBlur = 0;

  fill(255, 250, 240);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
