// ------------------------------------------------------------
// scene1.js - First Story Scene
// ------------------------------------------------------------
// This file defines:
// 1) drawScene1() → what the first story scene looks like
// 2) input handlers → branching choice A or B

// ------------------------------------------------------------
// Main draw function for Scene 1
// ------------------------------------------------------------
function drawScene1() {
  // Forest clearing background
  background(50, 70, 60);

  // Draw scene elements
  drawScene1Background();

  // Draw karma stat in corner
  drawKarmaStat();

  // ---- Story text ----
  fill(255, 250, 230);
  textAlign(CENTER, TOP);
  textSize(28);
  text("The Crossroads", width / 2, 60);

  // Story narrative
  textSize(18);
  fill(220, 220, 200);

  const story = [
    "You walk through the misty forest when you",
    "come upon a crossroads. An elderly traveler",
    "sits by the path, looking exhausted and lost.",
    "",
    '"Please," they say, "I have been walking for',
    'days. Could you spare some help?"',
    "",
    "What do you do?",
  ];

  let yPos = 120;
  for (let line of story) {
    text(line, width / 2, yPos);
    yPos += 28;
  }

  // ---- Choice buttons ----
  const choiceA = {
    x: width / 2,
    y: 450,
    w: 380,
    h: 70,
    label: "A: Help the traveler (+1 Karma)",
  };

  const choiceB = {
    x: width / 2,
    y: 550,
    w: 380,
    h: 70,
    label: "B: Ignore and continue (-1 Karma)",
  };

  drawStoryButton(choiceA);
  drawStoryButton(choiceB);

  // ---- Cursor feedback ----
  const over = isHover(choiceA) || isHover(choiceB);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Scene 1 background decorations
// ------------------------------------------------------------
function drawScene1Background() {
  noStroke();

  // Mist/fog layers in background
  for (let i = 0; i < 5; i++) {
    fill(70, 90, 80, 25);
    let yOffset = sin(frameCount * 0.008 + i * 0.7) * 15;
    ellipse(i * 200, 400 + yOffset, 300, 100);
  }

  // Background trees (darker, further away)
  fill(35, 50, 40);
  triangle(50, 800, 90, 500, 130, 800);
  triangle(150, 800, 200, 450, 250, 800);
  triangle(550, 800, 600, 480, 650, 800);
  triangle(680, 800, 730, 420, 780, 800);

  // Mid-ground trees
  fill(30, 45, 35);
  triangle(0, 800, 60, 550, 120, 800);
  triangle(700, 800, 760, 500, 820, 800);

  // Ground layer
  fill(40, 58, 45);
  rect(0, 750, width + 800, 200);

  // Rock where traveler sits
  fill(90, 85, 75);
  ellipse(620, 740, 70, 40);
  fill(100, 95, 85);
  ellipse(615, 735, 50, 30);

  // Elderly traveler - more detailed
  // Cloak/body
  fill(120, 90, 70);
  beginShape();
  vertex(590, 735);
  vertex(580, 700);
  vertex(595, 680);
  vertex(640, 680);
  vertex(655, 700);
  vertex(650, 735);
  endShape(CLOSE);

  // Head
  fill(210, 185, 160);
  ellipse(618, 665, 35, 40);

  // Hood
  fill(100, 75, 55);
  arc(618, 660, 45, 45, PI, TWO_PI);

  // Face details
  fill(180, 160, 140);
  ellipse(610, 670, 6, 4); // left eye area
  ellipse(626, 670, 6, 4); // right eye area

  // Walking stick
  stroke(80, 60, 40);
  strokeWeight(4);
  line(570, 680, 560, 750);
  noStroke();

  // Crossroads signpost
  // Main wooden post
  fill(75, 55, 35);
  rect(195, 690, 14, 95);

  // Left arrow sign (pointing left)
  fill(160, 130, 85);
  beginShape();
  vertex(85, 680);      // arrow tip
  vertex(100, 670);
  vertex(188, 670);
  vertex(188, 690);
  vertex(100, 690);
  endShape(CLOSE);

  // Right arrow sign (pointing right)
  fill(160, 130, 85);
  beginShape();
  vertex(202, 670);
  vertex(290, 670);
  vertex(305, 680);     // arrow tip
  vertex(290, 690);
  vertex(202, 690);
  endShape(CLOSE);

  // Sign text
  fill(50, 35, 20);
  textSize(14);
  textAlign(CENTER, CENTER);
  text("WEST", 140, 680);
  text("EAST", 248, 680);

  // Fireflies/particles
  for (let i = 0; i < 10; i++) {
    let x = 100 + i * 70;
    let y = 550 + sin(frameCount * 0.03 + i * 1.2) * 40;
    let alpha = 150 + sin(frameCount * 0.08 + i) * 100;
    let size = 4 + sin(frameCount * 0.05 + i * 2) * 2;

    fill(255, 255, 180, alpha);
    ellipse(x, y, size, size);
    fill(255, 255, 200, alpha * 0.5);
    ellipse(x, y, size + 4, size + 4);
  }
}

// ------------------------------------------------------------
// Mouse input for Scene 1
// ------------------------------------------------------------
function scene1MousePressed() {
  const choiceA = { x: width / 2, y: 450, w: 380, h: 70 };
  const choiceB = { x: width / 2, y: 550, w: 380, h: 70 };

  if (isHover(choiceA)) {
    // Help the traveler - good karma
    karma += 1;
    currentScreen = "scene2_good";
  } else if (isHover(choiceB)) {
    // Ignore the traveler - bad karma
    karma -= 1;
    currentScreen = "scene2_bad";
  }
}

// ------------------------------------------------------------
// Keyboard input for Scene 1
// ------------------------------------------------------------
function scene1KeyPressed() {
  if (key === "a" || key === "A" || key === "1") {
    karma += 1;
    currentScreen = "scene2_good";
  }

  if (key === "b" || key === "B" || key === "2") {
    karma -= 1;
    currentScreen = "scene2_bad";
  }
}
