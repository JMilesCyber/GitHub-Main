---
name: github-push-pull
description: Runs the full Git pull/push workflow when the user asks to pull or push from their repo. Ensures correct branch, login, and repo; commits and pushes all changes. Use when the user asks to push, pull, sync with GitHub, commit and push, or update their remote repo.
---

# GitHub Pull / Push Workflow

## When to Apply

Apply when the user asks to:
- Push to GitHub (or "push my changes", "push to repo").
- Pull from GitHub (or "pull latest", "sync with remote").
- Commit and push, or get their work onto GitHub.

## Instructions

1. **Determine the project**  
   Use the current workspace or the project the user is working in. All commands run in that project root (where the `.git` folder is).

2. **Check Git state**  
   Run `git status` and `git branch -a` (and `git remote -v` if needed) to see:
   - Current branch
   - Whether there are uncommitted changes
   - Remote name and URL (confirm it's the repo the user means)

3. **Wrong branch**  
   If the user asked to push but they're on a branch that doesn't match intent (e.g. they said "push to main" but you're on `feature/xyz`):
   - Tell them: "You're currently on branch `<branch>`. Did you want to push this branch, or switch to `<target>` (e.g. main) first?"
   - Wait for confirmation before switching branch or pushing.

4. **Authentication / repo**  
   - If a push fails with permission or auth errors, tell them they may need to log in (e.g. `gh auth login`, or re-enter credentials).
   - If they might be in the wrong repo, show `git remote -v` and ask them to confirm it's the right repo.

5. **Pull first (if pushing)**  
   If pushing: run `git pull --rebase` (or `git pull`) from the current branch to avoid rejections. If there are conflicts, help resolve them before pushing.

6. **Commit all changes (if pushing)**  
   If there are uncommitted changes:
   - Stage everything: `git add -A` (or stage specific files if the user prefers).
   - Commit with a clear message (ask for a message if the change is large or the user cares; otherwise use a concise default).
   - Then push.

7. **Run the push or pull**  
   - For push: `git push` (or `git push origin <branch>` if needed).
   - For pull: `git pull` (or `git pull origin <branch>`).

8. **Confirm**  
   After a successful push or pull, briefly confirm what was done (e.g. "Pushed 3 commits to `main`" or "Pulled latest from `origin/main`").

## Summary

- Run the full process in the project they're working on.
- If they're on the wrong branch for what they want, say so and confirm which branch to use before changing anything.
- Ensure they're logged in and in the correct repo when pushing.
- Commit all changes when pushing, then push (after pulling if needed).
