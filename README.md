---
# Rock Paper Scissors (Console Version)

A simple **Rock Paper Scissors game** built with **JavaScript** and played entirely in the browser **console**.
This project focuses on **JavaScript fundamentals**, including functions, conditionals, variables, and basic user interaction.

It is part of my learning journey in the **Full Stack JavaScript curriculum** from The Odin Project.
---

## Project Overview

This project implements the classic **Rock Paper Scissors** game where:

- The **player** chooses between `rock`, `paper`, or `scissors`.
- The **computer** randomly generates its choice.
- The game runs for **5 rounds**.
- The final winner is determined based on the total score.

The game is played entirely through the **browser console**, without a graphical user interface (GUI).

---

## Learning Objectives

This project helped practice:

- Writing and organizing **JavaScript functions**
- Using **random number generation**
- Handling **user input with prompt**
- Working with **variables and scope**
- Implementing **game logic**
- Practicing **problem-solving and pseudocode**
- Using **Git and GitHub for version control**

---

## Game Logic

The game follows these rules:

| Player Choice | Computer Choice | Result        |
| ------------- | --------------- | ------------- |
| Rock          | Scissors        | Player Wins   |
| Rock          | Paper           | Computer Wins |
| Paper         | Rock            | Player Wins   |
| Paper         | Scissors        | Computer Wins |
| Scissors      | Paper           | Player Wins   |
| Scissors      | Rock            | Computer Wins |

Each round:

1. The player enters their choice via `prompt`.
2. The computer generates a random choice.
3. The winner of the round is determined.
4. Scores are updated.
5. Results are displayed in the console.

After **5 rounds**, the game declares the final winner.

---

## Technologies Used

- **HTML5**
- **JavaScript**
- **Browser Developer Console**
- **Git & GitHub**

---

## Project Structure

```
rock-paper-scissors
│
├── index.html
├── script.js
└── README.md
```

---

## How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/godsondgb/rock-paper-scissors.git
```

2. Open the project folder.

3. Open **index.html** in your browser.

4. Open the **browser console**:

- Chrome / Edge: `F12` → Console tab

5. Follow the prompts to play the game.

---

## What I Learned

Through this project I learned how to:

- Break down a problem into **smaller steps**
- Write **clean and reusable functions**
- Implement **game logic using conditionals**
- Debug JavaScript using the **browser console**
- Structure a small **JavaScript project from scratch**

---

## Future Improvements

Possible improvements include:

- Adding a **Graphical User Interface (GUI)**
- Adding **buttons instead of prompts**
- Displaying **scores visually on the page**
- Adding **animations and styling with CSS**

---

## Author

**Godson Degbo**

Full Stack JavaScript student following the curriculum from The Odin Project.

---
