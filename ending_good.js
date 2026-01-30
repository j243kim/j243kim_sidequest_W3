// ------------------------------------------------------------
// ending_good.js - Good Ending Screen
// ------------------------------------------------------------
// This file defines:
// 1) drawEndingGood() → what the good ending looks like
// 2) input handlers → how the player returns to start

// ------------------------------------------------------------
// Main draw function for Good Ending
// ------------------------------------------------------------
function drawEndingGood() {
  // Bright, golden sunrise background
  background(255, 230, 180);

  drawGoodEndingBackground();

  // Draw final karma stat
  drawKarmaStat();

  // ---- Ending title ----
  fill(80, 60, 30);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("The Light Prevails", width / 2, 150);

  // ---- Ending narrative ----
  textSize(20);
  fill(100, 80, 50);

  const story = [
    "Your kindness has illuminated the forest.",
    "",
    "The spirits recognize your pure heart and",
    "guide you safely out of the woods.",
    "",
    "As you emerge into the sunlight, you feel",
    "a warmth inside that money cannot buy.",
    "",
    "The forest will always remember your deeds.",
    "You are welcome here, now and forever.",
  ];

  let yPos = 240;
  for (let line of story) {
    text(line, width / 2, yPos);
    yPos += 32;
  }

  // ---- Final karma display ----
  textSize(24);
  fill(60, 100, 60);
  text("Final Karma: " + karma, width / 2, 580);

  // ---- Play again button ----
  const playAgainBtn = {
    x: width / 2,
    y: 670,
    w: 260,
    h: 70,
    label: "PLAY AGAIN",
  };

  drawEndingButton(playAgainBtn, true);

  // ---- Hint text ----
  fill(120, 100, 70);
  textSize(14);
  text("Press R to restart", width / 2, 730);

  cursor(isHover(playAgainBtn) ? HAND : ARROW);
}

// ------------------------------------------------------------
// Good ending background decorations
// ------------------------------------------------------------
function drawGoodEndingBackground() {
  noStroke();

  // Sun
  let sunPulse = sin(frameCount * 0.02) * 10;
  fill(255, 220, 100, 150);
  ellipse(width / 2, 80, 180 + sunPulse, 180 + sunPulse);
  fill(255, 240, 150, 200);
  ellipse(width / 2, 80, 120 + sunPulse * 0.5, 120 + sunPulse * 0.5);

  // Sun rays
  fill(255, 240, 180, 50);
  for (let i = 0; i < 12; i++) {
    push();
    translate(width / 2, 80);
    rotate(i * PI / 6 + frameCount * 0.005);
    triangle(-15, -100, 15, -100, 0, -250);
    pop();
  }

  // Green meadow
  fill(150, 200, 130);
  rect(0, 850, width + 800, 480);

  // Flowers
  for (let i = 0; i < 10; i++) {
    let x = 50 + i * 80;
    let y = 720 + sin(i * 2) * 15;

    // Stem
    stroke(80, 150, 80);
    strokeWeight(2);
    line(x, y, x, y + 30);

    // Petals
    noStroke();
    fill(255, 200, 220);
    for (let j = 0; j < 5; j++) {
      let angle = j * TWO_PI / 5;
      ellipse(x + cos(angle) * 8, y + sin(angle) * 8, 12, 12);
    }
    fill(255, 255, 100);
    ellipse(x, y, 10, 10);
  }
}

// ------------------------------------------------------------
// Mouse input for Good Ending
// ------------------------------------------------------------
function endingGoodMousePressed() {
  const playAgainBtn = { x: width / 2, y: 670, w: 260, h: 70 };

  if (isHover(playAgainBtn)) {
    resetGame();
  }
}

// ------------------------------------------------------------
// Keyboard input for Good Ending
// ------------------------------------------------------------
function endingGoodKeyPressed() {
  if (key === "r" || key === "R") {
    resetGame();
  }
}

// ------------------------------------------------------------
// Helper: Draw ending button (good style)
// ------------------------------------------------------------
function drawEndingButton({ x, y, w, h, label }, isGood) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (isGood) {
    if (hover) {
      fill(150, 220, 150, 240);
      drawingContext.shadowBlur = 20;
      drawingContext.shadowColor = color(100, 200, 100);
    } else {
      fill(120, 180, 120, 200);
      drawingContext.shadowBlur = 10;
      drawingContext.shadowColor = color(80, 150, 80);
    }
  }

  rect(x, y, w, h, 14);
  drawingContext.shadowBlur = 0;

  fill(40, 60, 40);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
