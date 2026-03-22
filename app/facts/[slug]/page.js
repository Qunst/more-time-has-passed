import Link from 'next/link';
import { notFound } from 'next/navigation';
import { buildComparison, formatYears, getAllFacts, getFactBySlug, slugifyCategory } from '@/lib/facts';

export async function generateStaticParams() {
  return getAllFacts().map((fact) => ({ slug: fact.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const fact = getFactBySlug(slug);
  if (!fact) return {};

  return {
    title: `${fact.title} vs ${fact.earlierEvent}`,
    description: `Time comparison between ${fact.title}, ${fact.earlierEvent}, and today.`
  };
}

export default async function FactPage({ params }) {
  const { slug } = await params;
  const fact = getFactBySlug(slug);
  if (!fact) notFound();

  const comparison = buildComparison(fact);
  const related = getAllFacts().filter((item) => item.category === fact.category && item.slug !== fact.slug).slice(0, 3);

  return (
    <div className="grid">
      <section className="hero">
        <div className="eyebrow">{fact.category}</div>
        <h1>{fact.title}</h1>
        <p className="lead">{comparison.sentence}</p>
      </section>

      <section className="grid grid-2">
        <article className="card grid">
          <div className="metrics">
            <div className="metric">
              <div className="metric-label">Today → {fact.title}</div>
              <div className="metric-value">{formatYears(comparison.fromToday)}</div>
            </div>
            <div className="metric">
              <div className="metric-label">{fact.title} → {fact.earlierEvent}</div>
              <div className="metric-value">{formatYears(comparison.fromEarlier)}</div>
            </div>
          </div>

          <div className="table-like">
            <div className="row"><span>Main item date</span><strong>{fact.titleDate}</strong></div>
            <div className="row"><span>Earlier event date</span><strong>{fact.earlierDate}</strong></div>
            <div className="row"><span>Difference between the two gaps</span><strong>{formatYears(comparison.difference)}</strong></div>
            <div className="row"><span>Merch eligible</span><strong>{fact.merchEligible ? 'Yes' : 'No'}</strong></div>
          </div>

          <div className="copy">{fact.description}</div>

          <div className="button-row">
            <Link href={`/category/${slugifyCategory(fact.category)}`} className="button">More in {fact.category}</Link>
          </div>
        </article>

        <aside className="card grid">
          <h2>At a glance</h2>
          <p className="copy">
            This comparison is based on the dates shown on this page. Browse the tags below to
            see what kind of timeline this fact belongs to.
          </p>
          <div className="table-like">
            {fact.tags.map((tag) => (
              <div className="row" key={tag}><span>Tag</span><strong>{tag}</strong></div>
            ))}
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="grid section-gap">
          <h2>Related comparisons</h2>
          <div className="fact-list">
            {related.map((item) => (
              <article className="card" key={item.slug}>
                <h3>{item.title}</h3>
                <p className="copy">{buildComparison(item).sentence}</p>
                <Link className="button" href={`/facts/${item.slug}`}>Open</Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
