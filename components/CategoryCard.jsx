import Link from 'next/link';
import { slugifyCategory } from '@/lib/facts';

export default function CategoryCard({ category, count }) {
  return (
    <Link href={`/category/${slugifyCategory(category)}`} className="card category-card">
      <h3>{category}</h3>
      <div className="small muted">{count} facts in this category</div>
    </Link>
  );
}