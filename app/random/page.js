import Link from 'next/link';
import { getAllFacts, buildComparison, formatYears } from '@/lib/facts';

export const metadata = {
  title: 'Random Fact'
};

export default function RandomPage() {
  const facts = getAllFacts();
  const fact = facts[Math.floor(Math.random() * facts.length)];
  const comparison = buildComparison(fact);

  return (
    <section className="grid">
      <div className="eyebrow">Random pick</div>
      <div className="card">
        <div className="fact-sentence">{comparison.sentence}</div>
        <div className="metrics section-gap">
          <div className="metric">
            <div className="metric-label">Today → {fact.title}</div>
            <div className="metric-value">{formatYears(comparison.fromToday)}</div>
          </div>
          <div className="metric">
            <div className="metric-label">{fact.title} → {fact.earlierEvent}</div>
            <div className="metric-value">{formatYears(comparison.fromEarlier)}</div>
          </div>
        </div>
        <div className="button-row section-gap">
          <Link href={`/facts/${fact.slug}`} className="button primary">Open full fact page</Link>
          <Link href="/" className="button">Back home</Link>
        </div>
      </div>
    </section>
  );
}
