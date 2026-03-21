import Link from 'next/link';
import FactSummaryCard from '@/components/FactSummaryCard';
import CategoryCard from '@/components/CategoryCard';
import { getAllFacts, getCategories } from '@/lib/facts';

export default function HomePage() {
  const facts = getAllFacts();
  const featured = facts.filter((fact) => fact.featured);
  const categories = getCategories().map((category) => ({
    category,
    count: facts.filter((fact) => fact.category === category).length
  }));

  return (
    <div className="grid">
      <section className="hero">
        <div className="eyebrow">Funny time comparisons with room to become a product business</div>
        <h1>Launch the site. Grow the archive. Add personalized merch later.</h1>
        <p className="lead">
          This starter project is designed for SEO, scheduled content updates, and a future Etsy funnel for birthday,
          anniversary, and milestone gifts.
        </p>
        <div className="button-row">
          <Link href="/random" className="button primary">See a random fact</Link>
          <a href="#featured" className="button">Browse featured facts</a>
        </div>
      </section>

      <section className="card">
        <h2>What this starter already assumes</h2>
        <div className="table-like section-gap">
          <div className="row"><span>Traffic model</span><strong>SEO + social + internal browsing</strong></div>
          <div className="row"><span>Content model</span><strong>Static pages generated from structured fact data</strong></div>
          <div className="row"><span>Commerce model</span><strong>Future personalized product funnel into Etsy</strong></div>
          <div className="row"><span>Automation model</span><strong>Scheduled GitHub workflow to generate and validate facts</strong></div>
        </div>
      </section>

      <section id="featured" className="grid section-gap">
        <h2>Featured facts</h2>
        <div className="fact-list">
          {featured.map((fact) => <FactSummaryCard key={fact.slug} fact={fact} />)}
        </div>
      </section>

      <section className="grid section-gap">
        <h2>Browse by category</h2>
        <div className="fact-list">
          {categories.map(({ category, count }) => (
            <CategoryCard key={category} category={category} count={count} />
          ))}
        </div>
      </section>
    </div>
  );
}
