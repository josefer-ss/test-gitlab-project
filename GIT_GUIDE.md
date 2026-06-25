# Git Guide — Bootcamp Cheatsheet

A practical, beginner-friendly guide to the Git workflow we use in this project.
Work through it top to bottom. Every command is meant to be typed in your terminal,
from inside the project folder.

---

## 0. The mental model (read this first)

Git tracks your project in **snapshots** called **commits**. A **branch** is just a
movable label pointing at a commit. You make a branch to work on something without
touching `main`, and later you **merge** it back.

```
main:    A───B───C
                  \
feature:           D───E   ← your work, isolated from main
```

The golden rule: **`main` stays stable. New work happens on a branch.**

---

## 1. The everyday cycle

```bash
git status                 # What changed? Which branch am I on?
git add <file>             # Stage a file for the next commit
git add .                  # Stage everything that changed
git commit -m "message"    # Save a snapshot of the staged changes
git log --oneline          # See the history of commits
```

> 💡 A good commit message says **what** changed and **why**, in the imperative:
> `"Add complete-todo button"`, not `"changes"` or `"fixed stuff"`.

---

## 2. Working with branches

```bash
git branch                       # List local branches (* = current)
git branch -a                    # List local AND remote branches
git switch <branch>              # Move to an existing branch
git switch -c feature/my-thing   # Create a new branch AND switch to it
```

> `git checkout <branch>` does the same as `git switch` — `switch` is the newer,
> clearer command.

---

## 3. Seeing how branches differ

This is the heart of the bootcamp. Files really do change between branches:

```bash
# Compare two branches (what's different on the feature branch?)
git diff main feature/filter-and-complete

# List only the file names that differ
git diff --name-only main devops/docker

# Switch to the devops branch and look around —
# notice the Dockerfile that does NOT exist on main
git switch devops/docker
ls
git switch main
ls
```

---

## 4. Merging a branch into `main`

The `feature/filter-and-complete` branch is intentionally **left unmerged** so you
can practice. Here is the full flow:

```bash
# 1. Make sure main is your current branch
git switch main

# 2. Merge the feature work into main
git merge feature/filter-and-complete

# 3. Verify the new feature is now on main
git log --oneline
npm run dev
```

If two branches changed the **same lines**, Git reports a **merge conflict**.
Don't panic — see the next section.

---

## 5. Resolving a merge conflict (basics)

When a conflict happens, Git marks the file like this:

```
<<<<<<< HEAD
code that is currently on your branch
=======
code coming from the branch you are merging
>>>>>>> feature/filter-and-complete
```

To resolve it:

1. Open the file and **edit it** so it contains the final version you want.
2. **Delete** the `<<<<<<<`, `=======`, and `>>>>>>>` marker lines.
3. Stage and commit:

```bash
git add <the-file>
git commit            # finishes the merge
```

> Want to abort and start over? `git merge --abort`

---

## 6. Connecting to GitLab (remote)

```bash
# Link your local repo to the GitLab project (only once)
git remote add origin <your-gitlab-repo-url>

# Push a branch and set it to track the remote
git push -u origin main

# Later pushes are just:
git push

# Get the latest changes your teammates pushed
git pull
```

To share the other branches too:

```bash
git push -u origin feature/filter-and-complete
git push -u origin devops/docker
```

---

## 7. Exercises 🏋️

1. **Read history.** Run `git log --oneline --all --graph` and describe out loud what
   each branch did.
2. **Spot the difference.** Run `git diff main devops/docker --name-only`. Which files
   only exist on the DevOps branch?
3. **Do the merge.** Merge `feature/filter-and-complete` into `main`, then run the app
   and confirm the filter buttons appear.
4. **Make your own feature.** Create `feature/<your-name>`, add a small change (e.g.
   change the title color), commit it, and merge it into `main`.
5. **(Bonus)** On `devops/docker`, build and run the container — see that branch's
   README section for the commands.

---

## Quick reference card

| I want to... | Command |
| --- | --- |
| See what changed | `git status` |
| Stage everything | `git add .` |
| Save a snapshot | `git commit -m "..."` |
| Create + switch branch | `git switch -c <name>` |
| Switch branch | `git switch <name>` |
| See history | `git log --oneline --graph --all` |
| Compare branches | `git diff <a> <b>` |
| Merge into current branch | `git merge <other-branch>` |
| Send to GitLab | `git push` |
| Get latest | `git pull` |
