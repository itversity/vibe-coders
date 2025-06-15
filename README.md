# Vibe Coders Workshops

This is a static website project for the Vibe Coders high school workshop series. The site is built with pure HTML and CSS, designed for easy collaboration and deployment on GitHub Pages.

## Project Structure

- `index.html` – Home page
- `css/style.css` – Main stylesheet
- (Other pages and assets will be added as the project grows)

## How to Set Up and Run Locally

### 1. Open Directly in Your Browser
- Double-click `index.html` or right-click and choose "Open With" → your web browser.
- This works for basic HTML/CSS preview.

### 2. Use VS Code Live Server (Recommended)
1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Open this project folder in VS Code.
3. Go to Extensions (sidebar) and search for **Live Server** by Ritwick Dey. Click Install.
4. Right-click `index.html` in the file explorer and select **Open with Live Server**.
5. Your site will open at `http://localhost:5500` (or similar) and auto-refresh on changes.

### 3. (Optional) Use a Simple Local Server
If you have Node.js, you can run:
```sh
npx serve .
```
Or, if you have Python 3:
```sh
python3 -m http.server
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Deployment
- The site is designed for static hosting on GitHub Pages.
- Push your changes to the `main` branch and enable GitHub Pages in your repository settings.

---
For more details, see `INSTRUCTIONS.md`.
