# Validation notes

## Content structure

- 360 distinct question stems and IDs.
- 25 populated study sections.
- All six clinical teaching topics, Lecture 1, an applied section, the book prologue and all 16 book chapters are mapped.
- Four distinct options and a valid best-answer index for every item.
- Every item has an explanation, source reference and question-style tag.
- Browser bank matches the editable JSON.
- Correct-answer positions: A 90, B 85, C 99, D 86.
- Distractors in 170 questions were revised to emphasize subject-relevant misconceptions.

## Checks completed

- JavaScript syntax checks for the application, bank and service worker.
- Question-bank integrity checks via `npm test`.
- Browser practice flow: select, check, correction, rationale and source display.
- Bookmark and checked-answer persistence after reload.
- Practice completion, unanswered-item reporting and answer review.
- Timed-exam flow with hidden answers during the session.
- One-minute exam automatically submitted on expiry; selected correct answer scored 1/10 with nine unanswered items.
- Later correct answer removed the earlier mistake from the dashboard collection.
- Reset confirmation and removal of synthetic test data.
- Visual checks at desktop, 390px phone and 768px tablet widths.
- Dark-mode quiz readability checked at the phone width.

## Limits

These checks establish application behavior and data consistency; they are not a psychometric validation of the question bank. Reported clinical research statistics are source-bound rather than independently re-audited. Offline caching is implemented but a full network-disconnection scenario was not tested. The supplied copyrighted source PDFs and slides are not included.
