import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const data=JSON.parse(fs.readFileSync(new URL('../question-bank.json',import.meta.url),'utf8'));
const context={window:{}};vm.runInNewContext(fs.readFileSync(new URL('../bank.js',import.meta.url),'utf8'),context);
assert.equal(JSON.stringify(context.window.MCQ_BANK),JSON.stringify(data),'Browser bank matches editable JSON');
assert.equal(data.questions.length,580);assert.equal(data.topics.length,29);
const ids=new Set(),stems=new Set(),topicIds=new Set(data.topics.map(t=>t.id)),answers=[0,0,0,0];
for(const q of data.questions){
 assert(!ids.has(q.id),'Duplicate ID');ids.add(q.id);
 assert(!stems.has(q.question),'Duplicate question');stems.add(q.question);
 assert(topicIds.has(q.topic),'Missing topic');assert.equal(q.options.length,4);
 assert.equal(new Set(q.options).size,4,'Duplicate answer options');
 assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,'Valid answer index');
 assert(q.explanation&&q.reference&&q.question,'Complete source mapping');
 assert(['Recall','Conceptual','Applied'].includes(q.difficulty));answers[q.answer]++;
}
assert.equal(data.questions.filter(q=>/^d[1-4]$/.test(q.topic)).length,100);
for(let i=1;i<=4;i++)assert(topicIds.has('d'+i),'Documentation section missing');
for(const t of data.topics)assert(data.questions.some(q=>q.topic===t.id),'Empty topic');
for(let i=1;i<=16;i++)assert(topicIds.has('b'+i),'Book chapter missing');
for(let i=1;i<=6;i++)assert(topicIds.has('n'+i),'Clinical topic missing');
console.log(`Validated ${data.questions.length} unique MCQs, ${data.topics.length} sections, all six clinical topics and all 16 book chapters.`);
console.log('Correct-answer positions A/B/C/D:',answers.join('/'));
