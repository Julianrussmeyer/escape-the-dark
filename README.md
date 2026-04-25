# Escape The Dark

## Short Description

Escape The Dark is a browser-based top-down survival and escape game built with HTML, CSS, and JavaScript. The player explores a dark room with only a small torchlight radius, searches for a hidden key, avoids wandering ghosts, opens the exit door, and escapes.

This project was created as part of the first project phase of Ironhack's online Web Development bootcamp.

## Gameplay / Objective

The goal is to survive long enough to find the key and unlock the exit.

1. Move through the dark room using the arrow keys.
2. Your torchlight reveals objects and enemies nearby.
3. Find the hidden key.
4. Reach the door after collecting the key.
5. Avoid touching the ghosts, or the game ends.

## Controls

- `Arrow Up` / `Arrow Down` / `Arrow Left` / `Arrow Right`: Move the player
- `Restart` button: Restart the current run
- `Start Game` button: Begin the game from the start screen

## Main Features

- Top-down player movement inside a bounded map
- Dynamic darkness overlay that follows the player and simulates torchlight
- Hidden key and door that become visible when inside the torch radius
- Multiple moving ghosts with independent movement patterns
- Collision detection for collecting the key, using the door, and ghost encounters
- Win screen and death screen
- Background music for atmosphere

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- DOM manipulation and browser rendering
- HTML Audio API

## Project Structure

- `index.html`: Defines the start, game, win, and death screens along with the game map container.
- `styles/style.css`: Contains all visual styling, including the torchlight darkness overlay and UI appearance.
- `js/script.js`: Wires up the buttons and starts or restarts the game.
- `js/game.js`: Controls the game loop, screen transitions, object creation, movement updates, and win/lose conditions.
- `js/player.js`: Handles player movement, rendering, torchlight positioning, and collision checks.
- `js/ghost.js`: Defines ghost spawning, random direction changes, and enemy movement.
- `js/key.js`: Creates and manages the collectible key.
- `js/door.js`: Creates the exit door and updates its appearance after the key is collected.

## How To Run

### GitHub Deployment

The game can be played directly in the browser through the live deployment link, without any local setup or installation.

### Local Run

1. Clone the repository.
2. Open the project folder in VS Code or your editor of choice.
3. Start a local server, for example with the VS Code Live Server extension.
4. Open the local server URL in your browser.
5. Click `Start Game` and use the arrow keys to move through the room.