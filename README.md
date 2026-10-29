# AI × SLP — The Learning Studio

A responsive, self-contained MCQ study website for **Artificial Intelligence in Speech-Language Pathology**. It contains **360 original four-option questions across 25 sections**, with a best answer, explanation and source reference for every question.

## Start using it

Open `index.html` in a modern browser. No installation, build step, account, API key or paid service is required. Browser-local progress depends on storage being available. For more consistent storage and offline caching, serve it locally or publish it on GitHub Pages.

If Python is installed, run this inside the folder:

```sh
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a GitHub repository named `ai-slp-mcq` and use `main` as the default branch.
2. Upload **the contents of this folder** into the repository root. `index.html` must be at the root. Include the `.github/workflows/pages.yml` file.
3. Open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Open **Actions → Deploy to GitHub Pages → Run workflow → main**. When it succeeds, the deployment supplies your website link.

The workflow validates the question bank and publishes only the six study files and `.nojekyll`. It uses relative asset paths, so it works under a project repository URL. If your default branch is not `main`, change the branch in `.github/workflows/pages.yml`.

Alternative: delete `.github/workflows/pages.yml`, upload the remaining files, and configure Pages to **Deploy from a branch → main → /(root)**. Both approaches serve the same buildless site; choose one.

## Study features

- Dashboard with attempted questions, latest-answer accuracy and mistakes to revisit.
- Six clinical teaching topics, all 16 book chapters, the prologue, Lecture 1 and an integrated applied section.
- Source filters and topic/concept search.
- Practice sessions with checked answers and immediate explanations.
- Timed exams with answers hidden until submission; the deadline survives leaving and reloading.
- Exam auto-submission when time expires in an open session, or immediately when an expired session is resumed.
- Optional question-order shuffling, session length and question-style filters.
- Bookmarks, mistake review, session resumption and retry of incorrect/unanswered questions.
- Source and coverage map with PDF page positions and physical slide positions.
- Dark mode, adjustable reading scale, keyboard controls and printable session review.
- Browser-local storage and offline return visits after a successful hosted load/cache.

## Coverage and interpretation

The bank covers the substantive teaching themes from the three supplied files:

- `Lecture Notes Artificial Intelligence in Speech-Language Pathology.pdf` — 9 pages, six topics.
- `Lec 1 AI in SLP.pptx` — 36 physical slides, including five embedded visual summaries.
- `AI Book for MS Program.pdf` — 379 PDF pages; Melanie Mitchell's *Artificial Intelligence: A Guide for Thinking Humans* (2019), including the prologue and all 16 chapters.

See `COVERAGE.md` for section counts and learning objectives. Page references use PDF positions, including front matter, rather than printed pagination. Slide references use physical positions rather than inconsistent printed footer numbering.

The questions are an original educational adaptation. The PDFs, slides, source illustrations and large source extracts are **not included** in the repository. Bibliographic lists, index entries, advertising and publisher front matter are not separate quiz objectives. Coverage is thematic and chapter-wide, not a claim that every sentence or incidental detail has its own question.

Book examples, forecasts and author opinions should be read in the book's historical context. Clinical study figures are explicitly tested as reported in the lecture notes; their original studies have not been independently re-audited for this adaptation. The bank is for learning and revision, not a validated examination or a clinical/legal implementation protocol.

## Progress and scoring

Practice progress records the most recent **checked** answer for each question. Finishing a practice session also checks any selected but unverified answers. Unanswered items do not enter the attempted-question total.

Exam results use the total session length as the denominator, so unanswered questions count as incorrect in the session score. Selected exam answers enter dashboard progress after submission. Unanswered exam items remain unattempted in dashboard progress but are available in that session's retry list.

A topic bar shows how many questions currently have a correct latest checked answer. A later correct attempt removes a question from the mistake collection. Saved questions stay saved until explicitly unsaved.

Progress belongs to the browser/device, not an account. It does not synchronize across devices. The Settings page offers a confirmed reset.

## Editing the question bank

`question-bank.json` is the editable data. Each question includes `id`, `topic`, `question`, four `options`, a zero-based `answer` index, `explanation`, `reference` and `difficulty` (question style: Recall, Conceptual or Applied). These styles describe cognitive demand, not psychometrically validated difficulty.

The browser reads `bank.js`, which contains the same object as `window.MCQ_BANK`. After editing the JSON, regenerate it with Node:

```sh
node -e "const fs=require('node:fs'); const b=JSON.parse(fs.readFileSync('question-bank.json','utf8')); fs.writeFileSync('bank.js','window.MCQ_BANK = '+JSON.stringify(b,null,2)+';\n')"
```

Run the consistency check with Node 18+:

```sh
npm test
```

This checks structural integrity, unique stems and IDs, answer indices, four distinct options, source mapping, topic coverage and browser/JSON parity. It does not independently establish subject-matter validity. Review new items against their source before release. If the question count changes, update the expected count in `scripts/validate.mjs` and the dashboard copy. For an asset-breaking release, change the cache version in `sw.js`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Accessible app shell and metadata |
| `styles.css` | Responsive layout, topic colors and themes |
| `app.js` | Sessions, scoring, search and progress |
| `bank.js` | Browser-ready question bank |
| `question-bank.json` | Editable structured bank |
| `sw.js` | Same-origin offline cache |
| `icon.svg` | Original waveform icon |
| `scripts/validate.mjs` | Question-bank integrity checks |
| `.github/workflows/pages.yml` | Optional GitHub Pages deployment workflow |

No analytics, third-party fonts, external images, patient-data collection or remote AI calls are used.
