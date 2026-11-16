# Prompt Engineering Portfolio — Wendy Rizza V. Calma

My MCO2 AI portfolio for **PDC10 Conversational AI and Prompt Engineering** (BSIT 4A).
It documents my prompt experiments, the Jayjay chatbot my team built, two class
prompting challenges, an AI agent experiment, and what I learned from testing them.

Plain HTML, CSS and JavaScript. No build step, no frameworks.

## Pages

| File | Page |
|---|---|
| `index.html` | Home and featured work |
| `about.html` | About me and learning objectives |
| `prompts.html` | Before-and-after prompt comparisons |
| `projects.html` | Jayjay, Broken Bot Labyrinth, Lost Context Archive, study agent, personalization |
| `evaluation.html` | Testing methods, criteria, weaknesses and fixes |
| `reflection.html` | Reflection |
| `references.html` | Sources and AI tools used |

Shared files are in `assets/` (`css/style.css`, `js/main.js`, and screenshots in `img/`).
All links use relative paths, so the site works at any GitHub Pages address.

## Before publishing

Search the files for `CONTENT NEEDED` and replace each marker with the real
information, or delete it.

## Deploy on GitHub Pages (step by step)

1. **Create the repository.** On GitHub, click **+ → New repository**. Name it, for
   example, `prompt-engineering-portfolio`. Set it to **Public**. Don't add a README
   (this folder already has one). Click **Create repository**.
2. **Upload the files.** On the new repository's page, click **uploading an existing file**.
   Open this folder on your computer, select **everything inside it** (the `.html` files,
   `README.md` and the `assets` folder) and drag it into the browser window.
   `index.html` must end up at the top level of the repository, not inside another folder.
3. **Commit.** Scroll down, write a message like `Add portfolio`, and click **Commit changes**.
4. **Turn on Pages.** Go to **Settings → Pages**. Under **Build and deployment**, set
   **Source** to **Deploy from a branch**, choose the branch **main** and the folder
   **/ (root)**, then click **Save**.
5. **Wait about 1 to 2 minutes.** Refresh the Pages settings page. A link appears at the
   top: `https://wendy-calma.github.io/prompt-engineering-portfolio/`
6. **Check it.** Open the link, click through every page, and try it on your phone.

### Updating later

Open a file on GitHub, click the pencil icon, edit, and click **Commit changes**.
The live site updates within a minute or two.

### If something looks wrong

- **404 page:** `index.html` is probably inside a subfolder. Move it to the top level.
- **No styling or images:** the `assets` folder didn't upload, or its folder names changed.
  The paths are case-sensitive on GitHub Pages (`assets/img/…`, not `Assets/Img/…`).
- **Old version still showing:** wait a minute, then hard-refresh (Ctrl + Shift + R).

## Preview locally

Open `index.html` in a browser, or run `python -m http.server` in this folder and visit
http://localhost:8000.
