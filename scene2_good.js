// ------------------------------------------------------------
// scene2_good.js - Good Path Branch (Scene 2)
// ------------------------------------------------------------
// This file defines:
// 1) drawScene2Good() → the scene after helping the traveler
// 2) input handlers → final choice before ending

// ------------------------------------------------------------
// Main draw function for Scene 2 (Good Path)
// ------------------------------------------------------------
function drawScene2Good() {
  // Warm, welcoming forest background
  background(60, 80, 70);

  drawScene2GoodBackground();

  // Draw karma stat
  drawKarmaStat();

  // ---- Story text ----
  fill(255, 250, 230);
  textAlign(CENTER, TOP);
  textSize(28);
  text("The Hidden Treasure", width / 2, 60);

  // Story narrative
  textSize(18);
  fill(220, 220, 200);

  const story = [
    "The grateful traveler smiles warmly.",
    '"Thank you, kind soul. As a reward for your',
    'compassion, I will share a secret with you."',
    "",
    "They point to a hidden path. You follow it and",
    "discover a chest filled with golden coins!",
    "",
    "Another traveler approaches. They look desperate.",
    "What do you do with the treasure?",
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
    w: 380,
    h: 70,
    label: "A: Share the treasure (+1 Karma)",
  };

  const choiceB = {
    x: width / 2,
    y: 580,
    w: 380,
    h: 70,
    label: "B: Keep it all for yourself (-1 Karma)",
  };

  drawStoryButton(choiceA);
  drawStoryButton(choiceB);

  const over = isHover(choiceA) || isHover(choiceB);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Scene 2 Good background decorations
// ------------------------------------------------------------
function drawScene2GoodBackground() {
  noStroke();

  // Sunlight rays from top
  for (let i = 0; i < 7; i++) {
    fill(255, 255, 200, 20);
    push();
    translate(width / 2, -50);
    rotate(-0.5 + i * 0.17);
    rect(-25, 0, 50, 500);
    pop();
  }

  // Grass tufts at bottom
  fill(55, 95, 60);
  for (let i = 0; i < 30; i++) {
    let x = i * 28;
    triangle(x, 800, x + 10, 765, x + 20, 800);
  }

  // Flowers scattered on ground
  for (let i = 0; i < 12; i++) {
    let x = 50 + i * 65;
    let y = 710 + sin(i * 1.5) * 20;
    drawFlower(x, y, i);
  }

  // Glowing aura behind chest
  let pulse = sin(frameCount * 0.04) * 15;
  fill(255, 215, 100, 40);
  ellipse(400, 720, 200 + pulse, 100 + pulse * 0.5);
  fill(255, 230, 150, 50);
  ellipse(400, 720, 150 + pulse * 0.7, 70 + pulse * 0.3);

  // Treasure chest - main body
  fill(101, 67, 33); // dark wood
  rect(340, 695, 120, 70, 8);

  // Chest lid (open)
  fill(120, 80, 40);
  beginShape();
  vertex(335, 695);
  vertex(345, 650);
  vertex(455, 650);
  vertex(465, 695);
  endShape(CLOSE);

  // Lid inner
  fill(80, 50, 25);
  beginShape();
  vertex(345, 690);
  vertex(352, 658);
  vertex(448, 658);
  vertex(455, 690);
  endShape(CLOSE);

  // Gold coins pile
  fill(255, 215, 0);
  ellipse(400, 710, 90, 40);
  fill(255, 200, 50);
  ellipse(385, 705, 20, 20);
  ellipse(415, 708, 18, 18);
  ellipse(400, 700, 22, 22);
  ellipse(370, 712, 16, 16);
  ellipse(430, 710, 17, 17);

  // Coin shine
  fill(255, 255, 200);
  ellipse(398, 698, 6, 6);
  ellipse(383, 703, 4, 4);
  ellipse(418, 705, 5, 5);

  // Chest metal bands
  fill(180, 150, 50);
  rect(340, 720, 120, 8, 2);
  rect(340, 745, 120, 8, 2);

  // Chest lock
  fill(218, 165, 32);
  ellipse(400, 732, 20, 24);
  fill(180, 140, 30);
  rect(395, 735, 10, 12, 2);

  // Sparkles floating around
  for (let i = 0; i < 12; i++) {
    let angle = frameCount * 0.025 + i * 0.52;
    let radius = 80 + sin(frameCount * 0.05 + i) * 20;
    let x = 400 + cos(angle) * radius;
    let y = 700 + sin(angle) * 40;
    let size = 4 + sin(frameCount * 0.1 + i * 2) * 2;

    // Sparkle glow
    fill(255, 255, 200, 100);
    ellipse(x, y, size + 4, size + 4);
    fill(255, 255, 220);
    ellipse(x, y, size, size);
  }

  // Rising sparkle particles
  for (let i = 0; i < 8; i++) {
    let x = 360 + i * 12;
    let yOffset = (frameCount * 0.8 + i * 30) % 100;
    let y = 700 - yOffset;
    let alpha = 255 - yOffset * 2.5;
    fill(255, 230, 100, alpha);
    ellipse(x, y, 3, 3);
  }
}

// Helper to draw a flower
function drawFlower(x, y, seed) {
  // Stem
  stroke(60, 120, 60);
  strokeWeight(2);
  line(x, y, x, y + 25);
  noStroke();

  // Petals - different colors based on seed
  let colors = [
    [255, 180, 200], // pink
    [255, 255, 150], // yellow
    [200, 180, 255], // purple
    [255, 200, 150], // orange
    [180, 220, 255], // blue
  ];
  let c = colors[seed % colors.length];
  fill(c[0], c[1], c[2]);

  for (let j = 0; j < 5; j++) {
    let angle = j * TWO_PI / 5 + seed;
    ellipse(x + cos(angle) * 6, y + sin(angle) * 6, 10, 10);
  }

  // Center
  fill(255, 220, 100);
  ellipse(x, y, 8, 8);
}

// ------------------------------------------------------------
// Mouse input for Scene 2 Good
// ------------------------------------------------------------
function scene2GoodMousePressed() {
  const choiceA = { x: width / 2, y: 480, w: 380, h: 70 };
  const choiceB = { x: width / 2, y: 580, w: 380, h: 70 };

  if (isHover(choiceA)) {
    // Share treasure - good karma
    karma += 1;
    goToEnding();
  } else if (isHover(choiceB)) {
    // Keep treasure - bad karma
    karma -= 1;
    goToEnding();
  }
}

// ------------------------------------------------------------
// Keyboard input for Scene 2 Good
// ------------------------------------------------------------
function scene2GoodKeyPressed() {
  if (key === "a" || key === "A" || key === "1") {
    karma += 1;
    goToEnding();
  }

  if (key === "b" || key === "B" || key === "2") {
    karma -= 1;
    goToEnding();
  }
}

// ------------------------------------------------------------
// Helper: Determine ending based on karma
// ------------------------------------------------------------
function goToEnding() {
  if (karma >= 1) {
    currentScreen = "ending_good";
  } else {
    currentScreen = "ending_bad";
  }
}
