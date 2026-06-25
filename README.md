# Todo App — Git Bootcamp

A tiny **React + Vite** todo application built for one purpose: to **learn the Git
branching workflow** by example. The code itself is intentionally simple so you can
focus on Git, not on the app.

> 🇬🇧 The whole project is in English on purpose — it's good practice for working in
> real-world repositories.

---

## What this project teaches

This repository ships with **three branches**, each showing a different idea:

| Branch | What's on it | What it teaches |
| --- | --- | --- |
| `main` | The stable base app: a form to add todos and a list to show them. | This is your "production" branch — the starting point everyone branches off from. |
| `feature/filter-and-complete` | Adds the ability to **mark a todo as complete** and to **filter** (All / Active / Completed). **Not merged yet — on purpose.** | The feature workflow: branch → commit → merge. You will practice merging this into `main` yourself. |
| `devops/docker` | Adds Docker files (`Dockerfile`, `nginx.conf`, `docker-compose.yml`, ...) so the app can be containerized. | How files **differ between branches**, and how a "DevOps" branch can hold infrastructure that the app branches don't. |

👉 Read [`GIT_GUIDE.md`](./GIT_GUIDE.md) for the step-by-step commands and exercises.

---

## Running the app locally

You need [Node.js](https://nodejs.org/) 18+ installed.

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL Vite prints (usually <http://localhost:5173>).

### Other scripts

```bash
npm run build     # Build a production bundle into dist/
npm run preview   # Preview the production build locally
```

---

## Project structure

```
todo-bootcamp/
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Root component, holds the todos state
    ├── index.css         # Global styles + color palette (white + red)
    ├── App.css           # App-specific styles
    └── components/
        ├── TodoForm.jsx  # The "add a todo" form
        ├── TodoList.jsx  # Renders the list (or an empty state)
        └── TodoItem.jsx  # A single todo row
```

---

## Suggested learning path

1. Clone the repo and run it on `main`.
2. Open `GIT_GUIDE.md` and follow the exercises.
3. Compare branches with `git diff main feature/filter-and-complete`.
4. Practice merging the feature branch into `main`.
5. Check out `devops/docker` and notice the new files that don't exist on `main`.

Happy branching! 🌱
