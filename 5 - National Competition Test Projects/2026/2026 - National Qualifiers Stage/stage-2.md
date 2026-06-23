# WSUK Web Development - Stage 2

## Problem Solving

**Time allowed:** 3 hours · **Total marks:** 100 · **Tasks:** 10

---

## Introduction

This stage consists of 10 independent problem-solving tasks across HTML, CSS, JavaScript and SQL. Each task is self-contained — the order in which you attempt them is your choice. There is no shared theme; each task stands alone.

All tasks run **directly in a web browser** by opening the task's `index.html`. No installation, server, or build step is required.

### AI Usage Policy

You are expected to work **without** auto-complete, linters, or AI assistants — the assessment environment is a plain editor and a browser.

> ⚠️ **AI tools are strictly forbidden.** Any AI coding assistant — including (but not limited to) **GitHub Copilot, Claude, ChatGPT, Cursor, Codex, Gemini, Tabnine, Codeium, Windsurf**, and any browser-based or IDE-integrated equivalent — **MUST be fully disabled, signed out of, or uninstalled before you begin the task**. This includes inline completions, chat panels, command-bar assistants, and any extension that sends your code to an external model.
>
> Failure to comply will result in **immediate disqualification**, regardless of whether the AI tool was actively used during the task. Your **entire screen (all monitors) is recorded continuously** for the full duration of the assessment via a browser-based link (VDO.Ninja) — you must share **all** displays, not individual windows or cropped areas. Recordings are reviewed after the event.

### Levels

Tasks are tagged with a difficulty level. The level is a guide to expected complexity and how marks are distributed:

- **L1** — basic. Each L1 task is worth **8 marks**.
- **L2** — intermediate. Each L2 task is worth **10 marks**.
- **L3** — advanced. Each L3 task is worth **15 marks**.

| Tasks | Count | Marks each | Total   |
| ----- | ----- | ---------- | ------- |
| L1    | 5     | 8          | 40      |
| L2    | 3     | 10         | 30      |
| L3    | 2     | 15         | 30      |
|       |       |            | **100** |

### Submission

Submit a single ZIP archive containing the entire `stage-2` folder. Make sure your edited files are saved before zipping.

### What you may and may not modify

Each task tells you exactly which file to edit. **Do not modify any other files** in the task — including `harness.js`, `validator.js`, `data.js`, `expected.js`, `runner.js`, the boilerplate at the top of CSS files, and the HTML markup unless explicitly stated.

---

## Task summary

| #   | Task                    | Type     | Level | Marks   |
| --- | ----------------------- | -------- | ----- | ------- |
| 01  | Fare Class              | HTML/CSS | L1    | 8       |
| 02  | SQL: Revenue by Country | SQL      | L3    | 15      |
| 03  | Destination Search      | JS / DOM | L2    | 10      |
| 04  | Flight Load Bars        | CSS      | L1    | 8       |
| 05  | Flight Review           | JS       | L1    | 8       |
| 06  | Flight Rating           | JS       | L2    | 10      |
| 07  | Helper Functions        | JS       | L2    | 10      |
| 08  | Flight Seat Selection   | JS / DOM | L3    | 15      |
| 09  | SQL: Filter & Sort      | SQL      | L1    | 8       |
| 10  | Loading Animation       | CSS      | L1    | 8       |
|     |                         |          |       | **100** |

### Summary by type

| Type     | Description                         | Max Marks |
| -------- | ----------------------------------- | --------- |
| HTML/CSS | Markup structure and styling        | 8         |
| CSS      | Layout, visuals and animation       | 16        |
| JS       | Scripting and logic                 | 28        |
| JS / DOM | Interactive DOM manipulation        | 25        |
| SQL      | Database queries and data retrieval | 23        |
|          |                                     | **100**   |

---

# Task 01 - Fare Class (L1)

**Folder:** `task-01/`·
**Edit:** `css/style.css` and `js/fares.js`·
**Marks:** 8
**Description:** Style the three fare-class cards (Economy / Business / First) and add interactivity so a passenger can select a fare.

**Restrictions:** You should not modify the HTML. Modify only the specified CSS and JS files, in the specified locations.

**Samples:** see _**task-01/sample/task-01.mp4**_ and _**task-01/sample/task-01.png**_.

#### Requirements

- Add a **hover effect** for `.fare` (the cards). Any visible change is acceptable: lift, shadow change, border colour, etc.
- Add a **hover effect** for `.fare-cta` (the buttons). Any visible change is acceptable.
- Style `.fare.selected` so the **selected card is visibly distinct** from unselected cards (e.g. coloured border, ring, glow, or different background).
- When a user clicks any `.fare-cta` button, add the class `selected` to that button's parent `.fare` card.
- Remove the `selected` class from any previously selected card — **only one card can be selected at a time**.

---

# Task 02 - SQL: Revenue by Country (L3)

**Folder:** `task-02/`·
**Submission:** `result/result.sql` (written by the on-page **Save SQL** button)·
**Marks:** 15
**Description:** Südwest needs a year-end revenue report. Write a single standard SQL `SELECT` that returns total completed-booking revenue per passenger country for 2024, restricted to high-revenue countries. The page provides a live SQL editor — your query runs against an in-memory database as you type.

**Restrictions:** Type your SQL into the editor on the page (`#sqlEditor`); results update live. Click **Save SQL** to write your query into `task-02/result/result.sql` — that file is your submission. Use **standard SQL** that would also work in MySQL or PostgreSQL — avoid vendor-specific functions. For string concatenation use `||`.

#### Requirements

- See the ERD on the page for tables, columns and relationships.
- Return two columns: `pass_country` and `total_revenue` (sum of `qty * sale_price`, rounded to 2 decimal places).
- Only include bookings with `booking_status = 'completed'` placed in **2024**.
- Group by passenger country; include only countries whose total revenue is **greater than 1000**.
- Sort by `total_revenue` descending, then by `pass_country` ascending.

---

# Task 03 - Destination Search (L2)

**Folder:** `task-03/`·
**Edit:** `js/search.js`·
**Marks:** 10
**Description:** Filter the Südwest destination list as the user types and highlight the matching substring in each visible item.

**Restrictions:** Modify only `js/search.js`. Do not modify the HTML or CSS.

**Sample:** see _**task-03/sample/task-03.mp4**_.

#### Requirements

- A `highlight(text, query)` helper is **already provided** in `js/search.js` — it returns the destination name with the matched substring wrapped in `<mark>`. Use it to render visible items. Do not modify the helper.
- As the user types in `#searchInput`, filter the items in `#destinationList` so only destinations whose name contains the search string remain visible.
- Matching is **case-insensitive** and **substring-based** (e.g. typing `an` matches `Frankfurt` and `Milan`; typing `RAGUE` matches `Prague`).
- For each visible item, set its `innerHTML` to `highlight(name, query)`.
- Hide non-matching items with `el.hidden = true` (the CSS already handles `[hidden]`).
- When no items match, show the `#noResults` element. Hide it whenever at least one item is visible.
- When the input is **empty**, show all items with no highlight.

---

# Task 04 - Flight Load Bars (L1)

**Folder:** `task-04/`·
**Edit:** `css/style.css`·
**Marks:** 8
**Description:** Style four flight-load bars so they animate from 0 to their target occupancy percentage on page load.

**Restrictions:** Modify only `css/style.css` after the `PUT YOUR CSS CODE FROM THIS POINT ONWARD` comment. Do not modify the HTML.

**Sample:** see _**task-04/sample/task-04.mp4**_.

#### Requirements

- Each `.flight` element has its target percentage set via the inline custom property `style="--p: NN%"`. Use this property in your animation.
- Each bar has a visible track (`.load-track`) and a fill (`.load-fill`).
- On page load, the fill **animates from 0** to its target percentage (defined by `--p`).
- The animation **does not repeat** — it plays once and stops at the target width.
- The load **percentage label** (`.load-percent`) is visible on each bar.
- The fill uses a colour or gradient that is **distinct from the track**.

---

# Task 05 - Flight Review (L1)

**Folder:** `task-05/`·
**Edit:** `js/counter.js`·
**Marks:** 8
**Description:** Live character and word counter on the flight-review textarea — updates as the passenger types.

**Restrictions:** Modify only `js/counter.js`. Do not modify the HTML or CSS.

**Samples:** see _**task-05/sample/task-05.mp4**_ and _**task-05/sample/task-05.png**_.

#### Requirements

- Listen to the `input` event on `#review`.
- Update `#charCount` with the total character count (including spaces and newlines).
- Update `#wordCount` with the total whitespace-separated word count. A run of whitespace counts as a single separator.
- An empty textarea must show `0`, `0`.
- Counts must update live on every keystroke.

---

# Task 06 - Flight Rating (L2)

**Folder:** `task-06/`·
**Edit:** `js/rating.js`·
**Marks:** 10
**Description:** Implement the 5-star flight-rating component with hover preview, click-to-set, and revert-on-leave.

**Restrictions:** Modify only `js/rating.js`. Do not modify the HTML or CSS.

**Sample:** see _**task-06/sample/task-06.mp4**_.

#### Requirements

- Hover over a star: that star and **all stars before it** become highlighted (add the `active` class).
- Mouse leaves the stars container: the display reverts to the **currently selected** rating.
- Click a star: set the **current rating** to that star's `data-value`. Stars stay highlighted up to that value after click.
- The label `#ratingLabel` always shows the **current** rating in the form `N / 5` (hover preview does not change the label).
- Initial state on load: rating is **0**, no stars highlighted, label shows `0 / 5`.
- Re-clicking a different star updates the rating correctly; hovering does not change the persistent rating.

---

# Task 07 - Helper Functions (L2)

**Folder:** `task-07/`·
**Edit:** `js/functions.js`·
**Marks:** 10
**Description:** Implement five small utility functions used across the Südwest portal. The bundled validator tests them automatically.

**Restrictions:** Modify only `js/functions.js`. Function names must match exactly (case-sensitive). Do not modify any other files (`lib/validator.js`, `lib/harness.js`).

**Sample:** see _**task-07/sample/task-07.jpeg**_.

#### Requirements

- `capitalize(str)` → string. First letter of each word in upper-case, rest in lower-case; trim and collapse extra whitespace. `"hello world"` → `"Hello World"`. Empty / non-string → `""`.
- `clamp(value, min, max)` → number. Return `value` constrained to `[min, max]`. `clamp(5, 0, 10)` → `5`, `clamp(-3, 0, 10)` → `0`, `clamp(15, 0, 10)` → `10`.
- `unique(arr)` → array. Return a new array with duplicates removed, preserving first-occurrence order. Non-array → `[]`.
- `digitSum(n)` → number. Sum of digits of integer `n` (use absolute value for negatives). `digitSum(123)` → `6`, `digitSum(-42)` → `6`. Non-integer → `0`.
- `chunk(arr, size)` → array of arrays. Split `arr` into chunks of length `size`; the last chunk may be shorter. Invalid size or non-array → `[]`.
- The harness runs **10 tests** (2 per function); each function is tested independently.

---

# Task 08 - Flight Seat Selection (L3)

**Folder:** `task-08/`·
**Edit:** `js/booking.js`·
**Marks:** 15
**Description:** Interactive Südwest cabin seat map — passengers click seats on the plane to select/deselect, with live count, total fare, and highest fare in the basket.

**Restrictions:** Modify only `js/booking.js`. Do not modify the HTML or CSS.

**Samples:** see _**task-08/sample/task-08.mp4**_ and _**task-08/sample/task-08.png**_.

#### Requirements

- The cabin contains 60 seats laid out as 15 rows × 4 columns (rows 1–15, seats A–D, 2-aisle-2 with an aisle between B and C). Each `.seat` button has `data-row`, `data-pos`, and `data-price`.
- Seats with class `sold` are pre-marked and **must not** become selectable.
- Clicking an available seat toggles the `selected` class on it. Clicking a selected seat deselects it.
- Update three live stats whenever the selection changes:
  - `#selectedCount` — the number of currently selected seats.
  - `#totalPrice` — sum of `data-price` across all selected seats, formatted as `£N` (e.g. `£45`).
  - `#mostExpensive` — the highest `data-price` among selected seats, formatted as `£N` (e.g. `£15`); show `—` when nothing is selected.
- Initial state on page load: no seats selected, `#selectedCount` = `0`, `#totalPrice` = `£0`, `#mostExpensive` = `—`.

---

# Task 09 - SQL: Filter & Sort (L1)

**Folder:** `task-09/`·
**Submission:** `result/result.sql` (written by the on-page **Save SQL** button)·
**Marks:** 8
**Description:** Write a single standard SQL `SELECT` that returns Südwest seat fares priced under £500, sorted by price ascending. The page provides a live SQL editor — your query runs against an in-memory database as you type.

**Restrictions:** Type your SQL into the editor on the page (`#sqlEditor`); results update live. Click **Save SQL** to write your query into `task-09/result/result.sql` — that file is your submission. Use standard SQL only — avoid vendor-specific functions.

#### Requirements

- See the ERD on the page (same dataset as Task 02).
- Return three columns: `fare_id`, `fare_name`, `fare_base_price`.
- Include only fares where `fare_category = 'Seats'` and `fare_base_price < 500`.
- Sort by `fare_base_price` ascending.

---

# Task 10 - Loading Animation (L1)

**Folder:** `task-10/`·
**Edit:** `css/style.css`·
**Marks:** 8
**Description:** Animate a Südwest "page loading" screen — clouds drifting across a blue sky, a plane bobbing in flight, and a pulsing "Loading flight…" caption. The layout, sky gradient, cloud positions, plane and caption are already provided — your job is to add the CSS animations.

**Restrictions:** Modify only `css/style.css` after the `PUT YOUR CSS CODE FROM THIS POINT ONWARD` comment. Do not modify the HTML or the framework styles above the marker.

**Sample:** see _**task-10/sample/task-10.mp4**_.

#### Requirements

- The three clouds (`.cloud-1`, `.cloud-2`, `.cloud-3`) **drift horizontally** across the sky and loop continuously. Use staggered durations or delays so they don't move in unison.
- The plane (`.plane`) has an **ongoing flight animation** — for example a gentle bob (vertical movement) and/or tilt (rotation). It must clearly look like the plane is flying, not still.
- The loading text (`.loading-text`) has an **animation** — for example a pulse (opacity / letter-spacing) or fade.
- All animations run continuously and loop without stopping.

---

## Media Files

Most tasks include reference media in their `sample/` folder — a short video (`.mp4`) and/or screenshot (`.png` / `.jpeg`) showing the expected look or behaviour.

- Treat the sample as your **visual spec**. When the brief says _"hover effect"_, _"live counter"_, _"animate from 0"_ or _"reverts on leave"_, the sample shows you exactly what that should look and feel like.
- **Watch / view the sample before coding.** It only takes a few seconds and frequently surfaces edge cases (initial state, transitions, label format) that the bullets describe only briefly.
- Tasks 02 and 09 (SQL) have **no sample media** — the on-page **Expected** result table on the right is your reference.
- Media files are **read-only references**. Do not edit, replace, or remove them; just leave the `sample/` folder untouched.

---

## General Guidance

- Read the **Description**, **Restrictions** and **Requirements** for every task before you start coding. Each Requirement bullet is independently markable — missing one costs you marks even if everything else works.
- Use the browser's **dev tools** (Elements / Console) to find IDs, classes, and `data-*` attributes — the brief assumes you'll use the existing markup.
- **Test in the browser as you go.** Open the task's `index.html` and click / type / hover through the feature. Try edge cases: empty input, nothing selected, no matches, invalid values.
- Solutions are usually **short** — most tasks fit in a few dozen lines. If your code is sprawling, you may be over-engineering; re-read the brief and simplify.
- Tasks are **independent** and can be attempted in any order. If one is taking longer than its time guidance (see _Difficulty levels_ in the pre-shared materials), move on and come back to it.
- **Save before you switch tabs / tasks** (Ctrl+S / Cmd+S). Unsaved files are not in the ZIP.
- If you break the task and can't recover, the ZIP you received is your reset point — re-extract the original files for that single task only.

---

## Task Submission

- Submission is a **single ZIP archive** containing the entire `stage-2` folder — exactly the structure you received, with your edits saved in place.
- Name the archive with your competitor code, e.g. `WSUK2026-S2-<your-code>.zip`.
- Upload to the URL provided in your invitation email **by the cut-off time**. Submissions after the deadline are **not accepted** under any circumstances.
- **SQL tasks (02 and 09):** your submission file is `task-NN/result/result.sql`. Make sure you've clicked **Save SQL** on the page at least once so that file holds your final query. The first click prompts your browser to grant write access to the `result/` folder; subsequent saves are one-click.
- Keep the **original folder structure intact** — do not flatten or rename folders, and do not delete framework files you did not touch (`harness.js`, `validator.js`, `data.js`, `expected.js`, `runner.js`, `lib/*`, sample assets). The marker needs them to run your work.
- Double-check before zipping: open each task's `index.html` one last time and confirm everything still loads and behaves as you expect.
