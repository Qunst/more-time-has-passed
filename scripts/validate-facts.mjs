import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'data', 'facts.json');
const raw = fs.readFileSync(filePath, 'utf8');
const facts = JSON.parse(raw);

const slugs = new Set();
const allowedKeys = [
  'slug',
  'category',
  'title',
  'titleDate',
  'earlierEvent',
  'earlierDate',
  'description',
  'tags',
  'sources',
  'featured',
  'merchEligible'
];

function fail(message) {
  console.error(`VALIDATION FAILED: ${message}`);
  process.exit(1);
}

if (!Array.isArray(facts) || facts.length === 0) {
  fail('facts.json must contain a non-empty array.');
}

for (const [index, fact] of facts.entries()) {
  for (const key of ['slug', 'category', 'title', 'titleDate', 'earlierEvent', 'earlierDate', 'description']) {
    if (!fact[key] || typeof fact[key] !== 'string') {
      fail(`Entry ${index} is missing required string field: ${key}`);
    }
  }

  if (slugs.has(fact.slug)) fail(`Duplicate slug detected: ${fact.slug}`);
  slugs.add(fact.slug);

  const titleDate = new Date(fact.titleDate);
  const earlierDate = new Date(fact.earlierDate);

  if (Number.isNaN(titleDate.getTime())) fail(`Invalid titleDate on ${fact.slug}`);
  if (Number.isNaN(earlierDate.getTime())) fail(`Invalid earlierDate on ${fact.slug}`);
  if (earlierDate >= titleDate) fail(`earlierDate must be earlier than titleDate on ${fact.slug}`);

  if (!Array.isArray(fact.tags)) fail(`tags must be an array on ${fact.slug}`);
  if (!Array.isArray(fact.sources)) fail(`sources must be an array on ${fact.slug}`);
  if (typeof fact.featured !== 'boolean') fail(`featured must be boolean on ${fact.slug}`);
  if (typeof fact.merchEligible !== 'boolean') fail(`merchEligible must be boolean on ${fact.slug}`);

  for (const key of Object.keys(fact)) {
    if (!allowedKeys.includes(key)) fail(`Unexpected key '${key}' on ${fact.slug}`);
  }
}

console.log(`Validated ${facts.length} facts successfully.`);
