// ------------------------------------------------------------
// instructions.js - Instructions Screen
// ------------------------------------------------------------
// This file defines:
// 1) drawInstr() → what the instructions screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------------------------------------
// Main draw function for instructions screen
// ------------------------------------------------------------
function drawInstr() {
  // Dark parchment-style background
  background(60, 50, 40);

  // ---- Screen title ----
  noStroke();
  fill(255, 240, 200);
  textAlign(CENTER, TOP);
  textSize(40);
  text("How to Play", width / 2, 80);

  // ---- Instruction text ----
  textSize(20);
  fill(220, 210, 180);
  textAlign(CENTER, TOP);

  const instructions = [
    "Welcome, traveler, to The Mysterious Forest.",
    "",
    "Your journey will present you with choices.",
    "Each decision affects your KARMA.",
    "",
    "Good deeds increase karma (+1)",
    "Selfish acts decrease karma (-1)",
    "",
    "Your final karma determines your ending:",
    "Karma >= 1 : Good Ending",
    "Karma < 1 : Bad Ending",
    "",
    "Choose wisely, for the forest remembers all.",
  ];

  let yPos = 160;
  for (let line of instructions) {
    text(line, width / 2, yPos);
    yPos += 30;
  }

  // ---- Back button ----
  const backBtn = {
    x: width / 2,
    y: 620,
    w: 220,
    h: 70,
    label: "BACK",
  };

  drawInstrButton(backBtn);

  // ---- Footer hint ----
  fill(150, 140, 120);
  textSize(14);
  text("Press ESC or B to go back", width / 2, 710);

  cursor(isHover(backBtn) ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for instructions screen
// ------------------------------------------------------------
function instrMousePressed() {
  const backBtn = { x: width / 2, y: 620, w: 220, h: 70 };

  if (isHover(backBtn)) {
    currentScreen = "start";
  }
}

// ------------------------------------------------------------
// Keyboard input for instructions screen
// ------------------------------------------------------------
function instrKeyPressed() {
  if (keyCode === ESCAPE) {
    currentScreen = "start";
  }

  if (key === "b" || key === "B") {
    currentScreen = "start";
  }
}

// ------------------------------------------------------------
// Button drawing helper (instructions screen)
// ------------------------------------------------------------
function drawInstrButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(180, 160, 120, 230);
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = color(200, 180, 140);
  } else {
    fill(140, 120, 80, 200);
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(100, 80, 50);
  }

  rect(x, y, w, h, 12);
  drawingContext.shadowBlur = 0;

  fill(255, 250, 230);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
