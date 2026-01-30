# The Mysterious Forest

GBDA 302 - Week 3 Side Quest: Interactive Branching Story

---

## Group Members

| Name      | WatID   | Student Number |
| --------- | ------- | -------------- |
| Jimin Kim | j243kim | [21062367]     |

---

## Description

**The Mysterious Forest** is an interactive narrative game inspired by the storytelling mechanics of _Dixit_, where player choices shape the journey and its outcome. The game unfolds through multiple game states organized across separate JavaScript files, creating a branching decision tree structure.

### Core Mechanics

- **Multi-state Navigation**: The game uses a `currentScreen` variable in `main.js` to route between different scenes (start, instructions, scene1, scene2_good, scene2_bad, ending_good, ending_bad)
- **Branching Decisions**: Players face meaningful choices at each scene that lead to different narrative paths
- **Atmospheric Visuals**: Each scene features custom background decorations including animated fireflies, mist effects, trees, and thematic elements

### BONUS Feature: Karma System

The game tracks a **Karma stat** that persists across all scenes:

- Good deeds (helping others, sharing) increase karma (+1)
- Selfish acts (ignoring others, hoarding) decrease karma (-1)
- The karma stat is displayed in the top-left corner during gameplay
- **Ending Unlock**: Final karma score determines the ending:
  - Karma >= 1: Good Ending ("The Light Prevails")
  - Karma < 1: Bad Ending ("Lost in Darkness")

### Player Experience

Players take on the role of a traveler navigating a mysterious forest. They encounter an elderly traveler at a crossroads and must decide whether to help or ignore them. Subsequent scenes present additional moral choices, with the cumulative karma determining whether the player finds their way to light or becomes lost in darkness.

---

## Setup and Interaction Instructions

### How to Run

1. Open the project folder in Visual Studio Code
2. Use the Live Server extension to launch `index.html`
3. Alternatively, access via GitHub Pages at: [Your GitHub Pages URL]

### Controls

| Input           | Action                                |
| --------------- | ------------------------------------- |
| **Mouse Click** | Select buttons and make choices       |
| **ENTER**       | Start the game from the main menu     |
| **I**           | Open instructions from the main menu  |
| **A or 1**      | Select choice A in story scenes       |
| **B or 2**      | Select choice B in story scenes       |
| **R**           | Restart game from ending screens      |
| **ESC or B**    | Return from instructions to main menu |

### Game Flow

```
Start Menu → Scene 1 (Crossroads)
                ├── Choice A (Help) → Scene 2 Good (Treasure)
                │                      ├── Share → Ending (based on karma)
                │                      └── Keep → Ending (based on karma)
                └── Choice B (Ignore) → Scene 2 Bad (Lost)
                                        ├── Ask Humbly → Ending (based on karma)
                                        └── Demand → Ending (based on karma)
```

---

## Iteration Notes

### Post-Playtest Changes

1. **Redesigned Scene Backgrounds**: Improved visual clarity and atmosphere for Scene 1 (added detailed traveler figure, crossroads signpost, layered trees, and animated fireflies) and Scene 2 Good (added treasure chest with gold coins, glowing aura, flowers, and sparkle effects)
2. **Adjusted Button Sizing and Labels**: Shortened button labels and increased button width in Scene 2 Bad to ensure text fits properly within button boundaries
3. **Fixed Background Elements**: Extended ground layers to reach the bottom of the canvas (y=800) across all scenes for visual consistency

### Post-Showcase Planned Improvements

1. **Add Sound Effects**: Implement ambient forest sounds and audio feedback for button clicks and scene transitions to enhance immersion
2. **Expand Story Branches**: Add additional scenes and choices to create a deeper decision tree with more varied endings based on specific choice combinations

---

## Assets

All visual elements in this project were created programmatically using p5.js drawing functions. No external image or audio assets were used.

| Asset Type | Description                                  | Source                |
| ---------- | -------------------------------------------- | --------------------- |
| Graphics   | All backgrounds, characters, and UI elements | Original (p5.js code) |
| Fonts      | System sans-serif font                       | Default browser font  |

---

## References

McCarthy, L. (2024). _p5.js Reference_. The Processing Foundation. Retrieved January 29, 2026, from https://p5js.org/reference/

Shiffman, D. (2024). _The Coding Train: p5.js Tutorials_. YouTube. Retrieved January 29, 2026, from https://thecodingtrain.com/

The Processing Foundation. (2024). _p5.js Examples_. Retrieved January 29, 2026, from https://p5js.org/examples/

---

## File Structure

```
j243kim_sidequest_W3/
├── index.html          # Main HTML file
├── main.js             # Router and shared functions (currentScreen, karma, isHover)
├── start.js            # Start menu screen
├── instructions.js     # Instructions screen
├── scene1.js           # First story scene (Crossroads)
├── scene2_good.js      # Good path branch (Hidden Treasure)
├── scene2_bad.js       # Bad path branch (Lost in Dark)
├── ending_good.js      # Good ending screen
├── ending_bad.js       # Bad ending screen
├── style.css           # Page styling
├── README.md           # This file
├── jsconfig.json       # VS Code configuration
└── libraries/          # p5.js library files
```

---

## GenAI Usage

GenAI (Claude) was used to assist with:

- Generating initial code structure following the professor's Example 01 architecture
- Creating scene basic background decorations's structure (trees, fireflies, treasure chest, traveler figure)
- Debugging layout issues (button positioning, background sizing)
- Iterating on visual designs based on feedback

All generated code was reviewed, tested, and modified to ensure functionality and understanding. A complete transcript of GenAI interactions is included in the Process & Decision Documentation PDF.
