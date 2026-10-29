# AI × SLP — Simple Exam Preparation

**580 MCQs across 29 study sections.** Open the site and start answering immediately.

## The learning flow

1. Click an option.
2. See the correct answer immediately, including when your choice is wrong.
3. Read **In simple words** to understand the concept.
4. Use the always-visible **Next question** button.

There is no setup form, Check Answer button or timer. The first choice is locked for that round so you can see what you actually knew. To try again, restart the topic or use mistake revision.

## A practical exam-preparation route

- **Study by topic:** work through each clinical topic, Lecture 1 and the book chapters.
- **Review mistakes:** repeat wrong answers. A later correct answer removes the item from this list.
- **Save:** star difficult questions for another revision round.
- **Quick revision:** read the correct answers and simple explanations in a searchable revision sheet.
- **Mixed revision:** shuffle questions to practice recognizing concepts outside chapter order. Feedback remains immediate.

The complete-course order is six clinical teaching topics, Lecture 1, the four documentation-lecture sections, applied cases/calculations, the book prologue, and chapters 1–16. The actual exam's weighting depends on the teacher's syllabus; the website does not invent likely paper questions.

## Open locally

Extract the ZIP and open `index.html`. No account, API key, package installation or build is needed.

For consistent browser storage and offline caching, serve the folder or publish it. If Python is installed:

```sh
python -m http.server 8080
```

Open `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a repository using `main` as the default branch.
2. Upload the contents of this folder to the repository root, including `.github/workflows/pages.yml`. Keep `index.html` at the root.
3. Select **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Run **Actions → Deploy to GitHub Pages → Run workflow**. The successful deployment provides the website link.

Alternative: remove `.github/workflows/pages.yml` and use Pages' **Deploy from a branch → main → /(root)** option. Choose one publishing method.

All assets use relative paths and work under a project repository URL. No external fonts, images, AI calls or analytics are required.

## Coverage

The original 360-question bank was expanded by 120 source-grounded questions, including 12 clinical-note items, 12 lecture-slide items and six additional questions for each of the 16 book chapters. Explanations in 84 original items were rewritten in simpler language. All new items include plain explanations.

The 47-slide documentation deck adds **100 MCQs** in four sections: transcript-to-SOAP (30), coding and calculations (35), auditing and terminology (25), and accountability/review (10). These questions use its slide text, tables and speaker notes. The earlier 480 questions remain included.

Source materials:

- `Lecture Notes Artificial Intelligence in Speech-Language Pathology.pdf`: all six teaching topics, 9 PDF pages.
- `AI assisted Documentation(2).pptx`: all three teaching parts across 47 slides, plus its worked cases, tables, exercises and speaker-note guidance.
- `Lec 1 AI in SLP.pptx`: introductory teaching content across 36 physical slides, including embedded visual summaries.
- `AI Book for MS Program.pdf`: the prologue and all 16 chapters of Melanie Mitchell's *Artificial Intelligence: A Guide for Thinking Humans* (2019), 379 PDF pages.

`COVERAGE.md` lists section objectives and counts. `SOURCE_CHECKLIST.md` maps clinical subsections, slide groups and book sections to relevant question IDs for review. Page references use PDF positions, not printed pagination; slide references use physical positions.

Coverage addresses substantive teaching concepts, distinctions, examples and calculations. It is not a line-by-line reproduction of every sentence. Publisher information, acknowledgments, index entries and bibliographic lists are not separate quiz objectives. The supplied PDFs, slide deck and source illustrations are not redistributed.

Book views and forecasts are tested in historical context. Clinical figures are reported as given in the notes and have not been independently updated. Source-bound regulatory questions test what the notes mention, not current legal advice. This is a self-study resource, not a validated examination instrument.

## Progress

Each option click records the answer immediately. The topic progress bar counts questions with a correct latest attempt. Stars, mistakes and the current position are stored in this browser. The site resumes on reopening. Progress does not synchronize across devices.

Restarting a round does not clear your overall answers or stars. Resetting all study data requires confirmation in Settings. An earlier version's compatible browser progress is preserved.

Keyboard shortcuts: **1–4** select an answer, **Right arrow** moves forward after answering, and **Left arrow** returns to the previous question. Day/night themes and reading size are in Settings.

## Edit and validate

Edit `question-bank.json`, then regenerate the matching browser file:

```sh
node -e "const fs=require('node:fs'); const b=JSON.parse(fs.readFileSync('question-bank.json','utf8')); fs.writeFileSync('bank.js','window.MCQ_BANK = '+JSON.stringify(b,null,2)+';\n')"
```

Run `npm test` with Node 18+ to check unique questions, four distinct options, answer indices, explanations, source references, topic coverage and JSON/browser parity. These checks do not replace subject-matter review.

For an asset-breaking release, increase the cache version in `sw.js`. Offline return visits require a successful hosted load and a browser supporting service workers. The current cache version is v3.
