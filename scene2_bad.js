// ------------------------------------------------------------
// scene2_bad.js - Bad Path Branch (Scene 2)
// ------------------------------------------------------------
// This file defines:
// 1) drawScene2Bad() → the scene after ignoring the traveler
// 2) input handlers → final choice before ending

// ------------------------------------------------------------
// Main draw function for Scene 2 (Bad Path)
// ------------------------------------------------------------
function drawScene2Bad() {
  // Dark, ominous forest background
  background(35, 45, 40);

  drawScene2BadBackground();

  // Draw karma stat
  drawKarmaStat();

  // ---- Story text ----
  fill(255, 250, 230);
  textAlign(CENTER, TOP);
  textSize(28);
  text("Lost in the Dark", width / 2, 60);

  // Story narrative
  textSize(18);
  fill(200, 200, 180);

  const story = [
    "You walk past the elderly traveler without",
    "a word. But the forest seems to shift around you.",
    "",
    "Hours pass. The trees look the same everywhere.",
    "You are hopelessly lost in the dark woods.",
    "",
    "A forest spirit appears before you.",
    '"You ignored one in need. Now you need help.',
    'Will you ask humbly, or demand it?"',
  ];

  let yPos = 120;
  for (let line of story) {
    text(line, width / 2, yPos);
    yPos += 28;
  }

  // ---- Choice buttons ----
  const choiceA = {
    x: width / 2,
    y: 480,
    w: 420,
    h: 70,
    label: "A: Ask humbly (+1 Karma)",
  };

  const choiceB = {
    x: width / 2,
    y: 580,
    w: 420,
    h: 70,
    label: "B: Demand rudely (-1 Karma)",
  };

  drawStoryButton(choiceA);
  drawStoryButton(choiceB);

  const over = isHover(choiceA) || isHover(choiceB);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Scene 2 Bad background decorations
// ------------------------------------------------------------
function drawScene2BadBackground() {
  noStroke();

  // Fog effect
  for (let i = 0; i < 8; i++) {
    fill(80, 90, 85, 30);
    let yOffset = sin(frameCount * 0.01 + i) * 20;
    ellipse(i * 120, 500 + yOffset, 200, 80);
  }

  // Dark ground
  fill(30, 40, 35);
  rect(0, 850, width + 800, 350);

  // Twisted trees
  fill(25, 35, 30);
  beginShape();
  vertex(100, 700);
  vertex(80, 400);
  vertex(60, 300);
  vertex(100, 350);
  vertex(120, 280);
  vertex(140, 380);
  vertex(160, 400);
  vertex(140, 700);
  endShape(CLOSE);

  beginShape();
  vertex(660, 700);
  vertex(680, 380);
  vertex(720, 300);
  vertex(700, 360);
  vertex(740, 280);
  vertex(720, 400);
  vertex(700, 700);
  endShape(CLOSE);

  // Forest spirit (glowing orb)
  let pulse = sin(frameCount * 0.05) * 20;
  fill(180, 220, 255, 100);
  ellipse(400, 720, 80 + pulse, 80 + pulse);
  fill(200, 240, 255, 150);
  ellipse(400, 720, 50 + pulse * 0.5, 50 + pulse * 0.5);
  fill(255, 255, 255, 200);
  ellipse(400, 720, 20, 20);
}

// ------------------------------------------------------------
// Mouse input for Scene 2 Bad
// ------------------------------------------------------------
function scene2BadMousePressed() {
  const choiceA = { x: width / 2, y: 480, w: 420, h: 70 };
  const choiceB = { x: width / 2, y: 580, w: 420, h: 70 };

  if (isHover(choiceA)) {
    // Ask humbly - good karma
    karma += 1;
    goToEndingFromBad();
  } else if (isHover(choiceB)) {
    // Demand help - bad karma
    karma -= 1;
    goToEndingFromBad();
  }
}

// ------------------------------------------------------------
// Keyboard input for Scene 2 Bad
// ------------------------------------------------------------
function scene2BadKeyPressed() {
  if (key === "a" || key === "A" || key === "1") {
    karma += 1;
    goToEndingFromBad();
  }

  if (key === "b" || key === "B" || key === "2") {
    karma -= 1;
    goToEndingFromBad();
  }
}

// ------------------------------------------------------------
// Helper: Determine ending based on karma
// ------------------------------------------------------------
function goToEndingFromBad() {
  if (karma >= 1) {
    currentScreen = "ending_good";
  } else {
    currentScreen = "ending_bad";
  }
}
