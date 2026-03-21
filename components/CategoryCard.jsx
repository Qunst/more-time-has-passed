import Link from 'next/link';
import { slugifyCategory } from '@/lib/facts';

export default function CategoryCard({ category, count }) {
  return (
    <article className="card category-card">
      <h3>{category}</h3>
      <div className="small muted">{count} facts in this category</div>
      <Link className="button" href={`/category/${slugifyCategory(category)}`}>Browse category</Link>
    </article>
  );
}
