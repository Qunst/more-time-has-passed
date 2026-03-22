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
        <div className="eyebrow">Funny time comparisons from movies, history, tech, music, TV, and the internet</div>
        <h1>Some things feel recent until you compare the years.</h1>
        <p className="lead">
          More Time Has Passed is a collection of surprising timeline comparisons that show
          how far away cultural moments really are. Browse strange facts, explore categories,
          and find out which events feel much older, or newer, than they should.
        </p>
        <div className="button-row">
          <Link href="/random" className="button primary">Show me a random fact</Link>
          <a href="#featured" className="button">Browse featured facts</a>
        </div>
      </section>

      <section className="card">
        <h2>What you will find here</h2>
        <div className="table-like section-gap">
          <div className="row"><span>Topics</span><strong>Movies, TV, music, tech, gaming, history, internet culture</strong></div>
          <div className="row"><span>Format</span><strong>Simple date comparisons with exact year gaps</strong></div>
          <div className="row"><span>Best for</span><strong>Browsing, sharing, and saying “wait, that cannot be right”</strong></div>
          <div className="row"><span>Updates</span><strong>New comparisons added regularly</strong></div>
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