# WSUK Web Development - Stage 2

---

## About this stage

Stage 2 is a timed, **problem-solving** assessment. It consists of a set of independent, self-contained challenges that you can attempt in any order. There is no shared theme tying the work together — each challenge stands on its own and is graded on its own.

Everything runs **directly in a web browser** by opening the relevant `index.html` file. No installation, no local server, and no build step are required. You will work entirely with plain front-end files (and an in-page SQL editor where applicable).

You will be given a clean copy of the project at the start of the assessment. Your edits stay on your machine until you submit.

---

## What will be assessed

The assessment covers the four core front-end / data technologies:

- **HTML** — semantic markup awareness; in most challenges you will not be expected to change the markup, but you must understand it well enough to target the right elements.
- **CSS** — layout, styling, transitions, keyframe animations, hover/active states, and use of custom properties (`--var`).
- **JavaScript (vanilla)** — DOM querying and manipulation, event handling (`click`, `input`, `mouseover`, `mouseleave`, etc.), array and string methods, small utility/helper functions, and live UI updates. **No frameworks** (no React, Vue, jQuery, etc.) and **no build tools** are used.
- **SQL** — writing standard `SELECT` queries against a small relational dataset using an in-page editor. Queries should be portable (avoid vendor-specific functions); use `||` for string concatenation. You will be given an ERD on the page describing the tables and relationships.

You should be comfortable working **without** auto-complete, linters, or AI assistants — the assessment environment is a plain editor and a browser.

> ⚠️ **AI tools are strictly forbidden.** Any AI coding assistant — including (but not limited to) **GitHub Copilot, Claude, ChatGPT, Cursor, Codex, Gemini, Tabnine, Codeium, Windsurf**, and any browser-based or IDE-integrated equivalent — **MUST be fully disabled, signed out of, or uninstalled before you begin the task**. This includes inline completions, chat panels, command-bar assistants, and any extension that sends your code to an external model.
>
> Failure to comply will result in **immediate disqualification**, regardless of whether the AI tool was actively used during the task. Your **entire screen (all monitors) is recorded continuously** for the full duration of the assessment via a browser-based link (VDO.Ninja) — you must share **all** displays, not individual windows or cropped areas. Recordings are reviewed after the event.

---

## Difficulty levels

Each challenge is tagged with a difficulty level so you can plan your time:

- **L1 — Basic.** Short, focused problems. Expect to apply a single concept cleanly (e.g. a hover effect, an event listener, a simple SQL filter).
  - Time guidance: ~5–10 min each.
- **L2 — Intermediate.** Slightly more involved. Usually combines a few concepts (e.g. event handling + DOM updates, or filtering + formatting).
  - Time guidance: ~10–15 min each.
- **L3 — Advanced.** The most demanding problems. Expect multi-step logic, more state to track, or a more complex SQL query with grouping / aggregation / filtering.
  - Time guidance: ~20–30 min each.

These times are **guidance, not limits** — use them to pace yourself. If a challenge is taking noticeably longer than its band, move on and come back to it later.

You do not need to attempt the challenges in level order — pick whichever you feel most confident with first.

---

## Working rules (general)

- Each challenge tells you **exactly which file(s) you may edit**. Anything else in the folder — test harnesses, validators, data files, expected-output files, runners, framework boilerplate, and the HTML markup unless explicitly stated — must be left untouched.
- Function names, when specified, must match **exactly** (case-sensitive). The validators look them up by name.
- Save your files before submitting. Submission is a single ZIP archive containing the entire stage folder.

---

## How to prepare

### HTML

- Be comfortable reading existing markup and understanding the structure of a page.
- Know how to inspect the DOM in browser dev tools to find IDs, classes, and `data-*` attributes.

### CSS

- **Selectors:** classes, descendants, pseudo-classes (`:hover`, `:focus`, `:active`), state classes you add yourself (e.g. `.selected`, `.active`).
- **Box model & layout:** flexbox and basic grid; positioning; spacing.
- **Visual feedback:** hover effects, transitions, borders, shadows, background changes.
- **Animations:** `@keyframes`, `animation-*` properties (duration, delay, iteration-count, fill-mode, timing-function), animating widths / transforms / opacity.
- **Custom properties:** reading `var(--p)` from inline styles set by the HTML.
- Practice writing CSS that runs **once** vs. CSS that loops continuously.

### JavaScript

- **DOM:** `document.getElementById`, `querySelector`, `querySelectorAll`, `addEventListener`, `classList.add/remove/toggle`, `textContent`, `innerHTML`, `hidden`, reading and writing `data-*` via `dataset`.
- **Events:** `input`, `click`, `mouseover` / `mouseenter`, `mouseout` / `mouseleave`, event delegation, reading `event.target`.
- **Strings & arrays:** `trim`, `split`, `toLowerCase`, `includes`, `map`, `filter`, `reduce`, `forEach`, `Array.from`, `Set`.
- **Numbers & formatting:** `Math.min`, `Math.max`, `Math.abs`, `Math.floor`, `Number.isInteger`, `toFixed`.
- **Logic patterns:** writing small, pure helper functions; handling empty / invalid input cleanly (e.g. non-strings, non-arrays, empty values); single-source-of-truth state for UI components.
- **Live UI updates:** updating multiple read-out elements (counts, totals, labels) whenever state changes.

### SQL

- **Standard SQL**
- `SELECT`, `FROM`, `JOIN` (inner joins across foreign keys).
- `WHERE` filters on text, numbers, and date ranges (e.g. a particular year).
- `GROUP BY` with aggregate functions (`SUM`, `COUNT`, `AVG`), and `HAVING` for filtering aggregates.
- `ORDER BY` with multiple keys and mixed `ASC` / `DESC`.
- `ROUND(x, 2)` for currency-style outputs.
- Reading an ERD to find the right tables, the right columns, and the relationships between them.

### General

- Read the requirements **carefully** before coding — the brief tells you exactly which element IDs, class names, formats, and edge cases must be handled.
- Check the **sample image / video** (where provided) to confirm the expected look and behaviour.
- Test your work in the browser as you go. Try edge cases: empty input, nothing selected, no matches, invalid values.
- Keep solutions **simple and direct**. Most challenges have a short, clean solution — if your code is getting long, you may be over-engineering it.
- Manage your time. Do not let one challenge consume the slot meant for several others — move on and come back if needed.
- **Permitted documentation on the day:** **DevDocs** (https://devdocs.io/) is allowed as your reference. It bundles MDN (HTML / CSS / JS / DOM) and SQL docs into a single fast, searchable, **offline-capable** interface. Pre-enable the docsets you'll need (HTML, CSS, JavaScript, DOM, SQLite) under the menu icon and practise with it beforehand so you're quick at finding what you need under time pressure.

### Practice resources

- **WSUK Web Development repository:** https://github.com/worldskillsuk/national-resources — practical samples and reference material that mirror the style and scope of the WorldSkills assessments. Work through these in the same plain-editor / browser setup you'll use on the day (no AI tools enabled).

**Reference (use these instead of an AI assistant)**

- **MDN Web Docs:** https://developer.mozilla.org/ — the authoritative reference for HTML, CSS, and JavaScript. Get comfortable searching MDN for specific properties, methods, and events; it's the fastest way to look something up under time pressure.
- **Can I Use:** https://caniuse.com/ — quick check for browser support of any CSS / JS feature.

**HTML & CSS**

- **web.dev (Learn CSS / Learn HTML):** https://web.dev/learn/css and https://web.dev/learn/html — short, focused lessons from Google's Chrome team.
- **CSS-Tricks — A Complete Guide to Flexbox:** https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **CSS-Tricks — A Complete Guide to Grid:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **MDN — Using CSS animations:** https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations
- **Flexbox Froggy** (interactive game): https://flexboxfroggy.com/
- **CSS Grid Garden** (interactive game): https://cssgridgarden.com/

**JavaScript**

- **javascript.info:** https://javascript.info/ — thorough, well-structured modern JS tutorial. The DOM and Events chapters are directly relevant.
- **MDN — Introduction to the DOM:** https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
- **MDN — Event reference:** https://developer.mozilla.org/en-US/docs/Web/Events
- **Eloquent JavaScript** (free book): https://eloquentjavascript.net/ — strong on logic / algorithm-style problems.

**SQL**

- **SQLBolt** (interactive lessons): https://sqlbolt.com/ — best starting point if you're new to SQL.
- **SQLZoo** (interactive practice): https://sqlzoo.net/ — graded exercises covering `WHERE`, `JOIN`, `GROUP BY`, `HAVING`, `ORDER BY`.
- **Mode Analytics SQL Tutorial:** https://mode.com/sql-tutorial/ — clear explanations of aggregations and joins.
- **SQLite Online** (browser sandbox): https://sqliteonline.com/ — paste your own schema and practise queries; close to the in-page editor you'll use on the day.

**Practice — small front-end challenges**

- **Frontend Mentor:** https://www.frontendmentor.io/ — bite-size HTML/CSS/JS challenges with reference designs.
- **Codewars** (JS kata, 8 kyu → 6 kyu range): https://www.codewars.com/ — good for short, pure helper-function exercises.
- **CodePen:** https://codepen.io/ — sandbox to prototype CSS animations and DOM behaviour quickly.

> Treat every practice session as a **dress rehearsal**: plain editor, browser, MDN open in another tab, **AI assistants disabled**. The skill you're training is solving problems with reference docs, not with a model.

---

## What to bring (mentally)

- Confidence reading short specs and translating them into small, correct code changes.
- Familiarity with the browser dev tools (Elements, Console, Network is not needed).
- A clear head for edge cases — empty inputs, no selection, invalid values.
- Patience to read the page and the ERD before writing SQL.
