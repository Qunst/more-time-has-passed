import Link from 'next/link';
import { buildComparison } from '@/lib/facts';

export default function FactSummaryCard({ fact }) {
  const comparison = buildComparison(fact);

  return (
    <article className="card fact-card">
      <div className="pill">{fact.category}</div>
      <h3>{fact.title}</h3>
      <div className="copy">{comparison.sentence}</div>
      <div className="small muted">{fact.description}</div>
      <div className="button-row">
        <Link className="button primary" href={`/facts/${fact.slug}`}>Open fact page</Link>
      </div>
    </article>
  );
}
