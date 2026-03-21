import fs from 'node:fs';
import path from 'node:path';

const filePath = path.join(process.cwd(), 'data', 'facts.json');
const raw = fs.readFileSync(filePath, 'utf8');
const facts = JSON.parse(raw);

const candidateTemplates = [
  {
    slug: 'minecraft-vs-nintendo-64',
    category: 'Gaming',
    title: "Minecraft's first public release",
    titleDate: '2009-05-17',
    earlierEvent: 'the Nintendo 64 launch in Japan',
    earlierDate: '1996-06-23',
    description: 'Auto-added starter example. Replace or expand this generator with your own curated pipeline.',
    tags: ['gaming', '2000s', 'nostalgia'],
    sources: ['Minecraft public release date', 'Nintendo 64 Japan launch date'],
    featured: false,
    merchEligible: true
  },
  {
    slug: 'avatar-vs-wikipedia',
    category: 'Movies',
    title: 'Avatar',
    titleDate: '2009-12-18',
    earlierEvent: "Wikipedia's launch",
    earlierDate: '2001-01-15',
    description: 'Auto-added starter example. Use this script as the safe insertion point for scheduled updates.',
    tags: ['movies', 'internet', '2000s'],
    sources: ['Avatar release date', 'Wikipedia launch date'],
    featured: false,
    merchEligible: false
  }
];

const existing = new Set(facts.map((fact) => fact.slug));
const additions = candidateTemplates.filter((item) => !existing.has(item.slug));

if (additions.length === 0) {
  console.log('No new facts to add.');
  process.exit(0);
}

const next = [...facts, ...additions];
fs.writeFileSync(filePath, JSON.stringify(next, null, 2) + '\n');
console.log(`Added ${additions.length} fact(s): ${additions.map((item) => item.slug).join(', ')}`);
