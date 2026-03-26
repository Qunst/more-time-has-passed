import Link from 'next/link';
import FactSummaryCard from '@/components/FactSummaryCard';
import CategoryCard from '@/components/CategoryCard';
import { getAllFacts, getCategories } from '@/lib/facts';

export const metadata = {
  title: 'More Time Has Passed',
  description:
    'Browse surprising time comparisons from movies, TV, music, tech, gaming, history, and internet culture.'
};

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
      <div className="eyebrow">Surprising timeline comparisons</div>
      <h1 className="hero-title">
        <span>Some timelines</span>
        <span>feel fake.</span>
        <span>They aren’t.</span>
      </h1>
      <p className="lead">
        Surprising comparisons that show how much more time has passed between
        events, movies, people, and moments than most of us realize.
      </p>
      <div className="button-row">
        <a href="#featured" className="button primary">Explore facts</a>
        <Link href="/random" className="button">Random fact</Link>
      </div>
    </section>



      <section id="featured" className="grid section-gap">
        <h2>Featured facts</h2>
        <div className="fact-list">
          {featured.map((fact) => <FactSummaryCard key={fact.slug} fact={fact} />)}
        </div>
      </section>

      <section className="grid section-gap">
        <h2 className="subsection-heading">Browse by category</h2>
        <div className="fact-list">
          {categories.map(({ category, count }) => (
            <CategoryCard key={category} category={category} count={count} />
          ))}
        </div>
      </section>
    </div>
  );
}