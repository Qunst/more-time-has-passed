import { notFound } from 'next/navigation';
import FactSummaryCard from '@/components/FactSummaryCard';
import { getCategories, getFactsByCategory, slugifyCategory } from '@/lib/facts';

export async function generateStaticParams() {
  return getCategories().map((category) => ({ name: slugifyCategory(category) }));
}

export default async function CategoryPage({ params }) {
  const { name } = await params;
  const category = getCategories().find((value) => slugifyCategory(value) === name);
  if (!category) notFound();

  const facts = getFactsByCategory(category);

  return (
    <section className="grid">
      <div className="eyebrow">Category</div>
      <h1>{category}</h1>
      <p className="lead">Every comparison page in this category can become a search landing page and a future merch funnel.</p>
      <div className="fact-list">
        {facts.map((fact) => <FactSummaryCard key={fact.slug} fact={fact} />)}
      </div>
    </section>
  );
}
