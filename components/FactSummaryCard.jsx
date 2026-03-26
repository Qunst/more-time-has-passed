import Link from 'next/link';

export default function FactSummaryCard({ fact }) {
  return (
    <Link href={`/facts/${fact.slug}`} className="card fact-card">
      <div className="pill">{fact.category}</div>
      <h3>{fact.title}</h3>
    </Link>
  );
}