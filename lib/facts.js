import facts from '@/data/facts.json';

export function getAllFacts() {
  return facts;
}

export function getFactBySlug(slug) {
  return facts.find((fact) => fact.slug === slug);
}

export function getCategories() {
  return [...new Set(facts.map((fact) => fact.category))].sort();
}

export function getFactsByCategory(category) {
  return facts.filter((fact) => fact.category.toLowerCase() === category.toLowerCase());
}

export function yearsBetween(dateA, dateB) {
  const a = new Date(dateA);
  const b = new Date(dateB);
  return Math.abs(b - a) / (365.2425 * 24 * 60 * 60 * 1000);
}

export function buildComparison(fact, now = new Date()) {
  const fromToday = yearsBetween(now, fact.titleDate);
  const fromEarlier = yearsBetween(fact.titleDate, fact.earlierDate);
  const isMore = fromToday > fromEarlier;
  const difference = Math.abs(fromToday - fromEarlier);

  return {
    fromToday,
    fromEarlier,
    difference,
    isMore,
    sentence: isMore
      ? `More time has passed from today to ${fact.title} than from ${fact.title} to ${fact.earlierEvent}.`
      : `Less time has passed from today to ${fact.title} than from ${fact.title} to ${fact.earlierEvent}.`
  };
}

export function formatYears(value) {
  return `${value.toFixed(1)} years`;
}

export function slugifyCategory(category) {
  return category.toLowerCase().replace(/\s+/g, '-');
}
