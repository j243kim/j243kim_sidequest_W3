// ------------------------------------------------------------
// ending_bad.js - Bad Ending Screen
// ------------------------------------------------------------
// This file defines:
// 1) drawEndingBad() → what the bad ending looks like
// 2) input handlers → how the player returns to start

// ------------------------------------------------------------
// Main draw function for Bad Ending
// ------------------------------------------------------------
function drawEndingBad() {
  // Dark, gloomy background
  background(40, 35, 45);

  drawBadEndingBackground();

  // Draw final karma stat
  drawKarmaStat();

  // ---- Ending title ----
  fill(200, 180, 180);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("Lost in Darkness", width / 2, 150);

  // ---- Ending narrative ----
  textSize(20);
  fill(180, 170, 170);

  const story = [
    "Your selfish choices have consequences.",
    "",
    "The forest spirits turn their backs on you.",
    "You wander deeper into the endless woods.",
    "",
    "The path home fades from memory.",
    "The darkness becomes your only companion.",
    "",
    "Perhaps in another life, you will choose",
    "compassion over greed...",
  ];

  let yPos = 240;
  for (let line of story) {
    text(line, width / 2, yPos);
    yPos += 32;
  }

  // ---- Final karma display ----
  textSize(24);
  fill(180, 100, 100);
  text("Final Karma: " + karma, width / 2, 580);

  // ---- Try again button ----
  const tryAgainBtn = {
    x: width / 2,
    y: 670,
    w: 260,
    h: 70,
    label: "TRY AGAIN",
  };

  drawBadEndingButton(tryAgainBtn);

  // ---- Hint text ----
  fill(120, 110, 120);
  textSize(14);
  text("Press R to restart", width / 2, 730);

  cursor(isHover(tryAgainBtn) ? HAND : ARROW);
}

// ------------------------------------------------------------
// Bad ending background decorations
// ------------------------------------------------------------
function drawBadEndingBackground() {
  noStroke();

  // Fog/mist layers
  for (let i = 0; i < 6; i++) {
    fill(60, 55, 70, 40);
    let yOffset = sin(frameCount * 0.008 + i * 0.5) * 30;
    let xOffset = cos(frameCount * 0.01 + i) * 20;
    ellipse(i * 160 + xOffset, 400 + yOffset, 250, 120);
  }

  // Dark ground
  fill(25, 22, 30);
  rect(0, 850, width + 800, 480);

  // Dead trees
  fill(30, 25, 35);
  // Left tree
  beginShape();
  vertex(80, 800);
  vertex(60, 500);
  vertex(40, 400);
  vertex(30, 350);
  vertex(50, 380);
  vertex(70, 300);
  vertex(90, 400);
  vertex(120, 350);
  vertex(100, 450);
  vertex(130, 500);
  vertex(120, 800);
  endShape(CLOSE);

  // Right tree
  beginShape();
  vertex(680, 800);
  vertex(700, 480);
  vertex(720, 380);
  vertex(740, 320);
  vertex(720, 360);
  vertex(680, 420);
  vertex(660, 350);
  vertex(680, 450);
  vertex(720, 800);
  endShape(CLOSE);

  // Eerie eyes in the darkness
  let blink = frameCount % 180 < 10 ? 0 : 1;
  if (blink) {
    fill(180, 50, 50, 150);
    ellipse(150, 450, 12, 8);
    ellipse(180, 450, 12, 8);

    ellipse(620, 400, 10, 6);
    ellipse(645, 400, 10, 6);

    ellipse(350, 380, 8, 5);
    ellipse(370, 380, 8, 5);
  }
}

// ------------------------------------------------------------
// Mouse input for Bad Ending
// ------------------------------------------------------------
function endingBadMousePressed() {
  const tryAgainBtn = { x: width / 2, y: 670, w: 260, h: 70 };

  if (isHover(tryAgainBtn)) {
    resetGame();
  }
}

// ------------------------------------------------------------
// Keyboard input for Bad Ending
// ------------------------------------------------------------
function endingBadKeyPressed() {
  if (key === "r" || key === "R") {
    resetGame();
  }
}

// ------------------------------------------------------------
// Helper: Draw ending button (bad style)
// ------------------------------------------------------------
function drawBadEndingButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(180, 120, 120, 240);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(200, 100, 100);
  } else {
    fill(140, 90, 90, 200);
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = color(120, 60, 60);
  }

  rect(x, y, w, h, 14);
  drawingContext.shadowBlur = 0;

  fill(255, 240, 240);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
