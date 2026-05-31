# JavaScript Module 3 — RIWI Cohort 5 · Class 1

> A collection of four weekly user story projects built throughout Module 3 of RIWI's Software Development program. Each week progressively introduces new JavaScript concepts, from basic user interaction all the way to a full-stack mini app with REST API integration.

---

## 🗂️ Repository Structure

```
M3/
├── C5C1_M3_UserStory_W1/   # Week 1 — Interactive System
├── C5C1_M3_UserStory_W2/   # Week 2 — Data Management
├── C5C1_M3_UserStory_W3/   # Week 3 — Notes App (DOM + Local Storage)
└── C5C1_M3_UserStory_W4/   # Week 4 — Cat Catalog (Full-stack CRUD)
```

Each folder is an independent Vite project. Navigate into the one you want and follow the setup steps below.

---

## 🛠️ Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)
![JSON Server](https://img.shields.io/badge/JSON_Server-REST_Mock-orange?style=flat-square)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Running any project

```bash
# 1. Enter the desired week folder
cd C5C1_M3_UserStory_W4

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

> **Week 4 only:** also requires running the JSON Server mock API in a separate terminal:
> ```bash
> npm run server
> ```
> The API will be available at `http://localhost:3000`

---

## 📖 Projects Overview

---

### Week 1 — Interactive System

A prompt-based program that requests the user's name and age, validates the input, and displays dynamic messages in the console based on defined conditions. Features a reusable `getInfo()` validation function adapted from a previous Python implementation.

**Concepts covered:** variables, conditionals, input validation, `prompt()`, `alert()`, `setTimeout`, `setInterval`.

```
C5C1_M3_UserStory_W1/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── Paper.gif
│   │   ├── TheWatcher.png
│   │   └── javascript.svg
│   ├── interactive_system.js   # Main logic — input, validation, conditionals
│   └── style.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

### Week 2 — Data Management

A product manager that stores data using plain Objects, Sets, and Maps. The user interacts through a prompt-based menu to add products, display them via different iteration methods (`for...in`, `for...of`, `forEach`), and view unique IDs and category groupings.

**Concepts covered:** Objects, Sets, Maps, iteration methods (`for...in`, `for...of`, `forEach`), `Object.keys/values/entries`, input validation, dynamic ID generation.

```
C5C1_M3_UserStory_W2/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── Joe.png
│   │   ├── hero.png
│   │   └── javascript.svg
│   ├── data_management.js   # Products object, Set, Map, menu, CRUD logic
│   └── style.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

### Week 3 — Notes App

A minimal DOM-based notes app. Users can add and delete notes from the UI, and all data persists automatically across page reloads using Local Storage. Uses event delegation for efficient DOM handling.

**Concepts covered:** DOM manipulation (`createElement`, `appendChild`, `removeChild`), event listeners, event delegation, `localStorage`, `JSON.parse/stringify`.

```
C5C1_M3_UserStory_W3/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   └── javascript.svg
│   ├── main.js   # DOM rendering, add/delete notes, Local Storage sync
│   └── style.css
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

---

### Week 4 — Cat Catalog 🐱

The capstone project for the module. A full CRUD web application to manage a collection of cats. Data is persisted locally via Local Storage and synced with a mock REST API powered by JSON Server. The codebase is organized into separate modules for services, storage, components, and utilities.

**Concepts covered:** Fetch API, `async/await`, `try/catch`, full CRUD (GET · POST · PUT · DELETE), JSON Server, Local Storage, modular ES6 imports/exports, component-based DOM rendering.

```
C5C1_M3_UserStory_W4/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   └── javascript.svg
│   ├── components/
│   │   └── catCard.js       # Renders a single cat card with edit/delete buttons
│   ├── services/
│   │   └── api.js           # Fetch API — GET, POST, PUT, DELETE against JSON Server
│   ├── storage/
│   │   └── localstorage.js  # saveCats / loadCats helpers
│   ├── utils/
│   │   └── helpers.js       # validateCat, showMessage
│   ├── main.js              # App entry point — state, events, render, sync
│   └── style.css
├── .gitignore
├── db.json                  # JSON Server mock database (cats collection)
├── index.html
├── package.json             # Includes "server": "json-server db.json" script
└── vite.config.js
```

## 👤 Author

**Oscar Corzo** — Software Development Student & Python Instructor · RIWI Cohort 5 · Class 1

[![GitHub](https://img.shields.io/badge/GitHub-corzooscar-181717?style=flat-square&logo=github)](https://github.com/corzooscar)

---

*Made with ( •̀ ω •́ )y at RIWI — Barranquilla, Colombia*
