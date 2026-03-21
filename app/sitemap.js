import { getAllFacts, getCategories, slugifyCategory } from '@/lib/facts';

export default function sitemap() {
  const base = 'https://https://more-time-has-passed.davorinkunst-1.workers.dev';
  const staticRoutes = ['', '/random', '/about', '/privacy', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date().toISOString()
  }));

  const factRoutes = getAllFacts().map((fact) => ({
    url: `${base}/facts/${fact.slug}`,
    lastModified: new Date().toISOString()
  }));

  const categoryRoutes = getCategories().map((category) => ({
    url: `${base}/category/${slugifyCategory(category)}`,
    lastModified: new Date().toISOString()
  }));

  return [...staticRoutes, ...factRoutes, ...categoryRoutes];
}
