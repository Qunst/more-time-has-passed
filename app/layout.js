import './globals.css';
import SiteChrome from '@/components/SiteChrome';

export const metadata = {
  metadataBase: new URL('https://moretimehaspassed.com'),
  title: {
    default: 'More Time Has Passed',
    template: '%s | More Time Has Passed'
  },
  description:
    'Surprising time comparisons from movies, TV, music, tech, gaming, history, and internet culture.',
  keywords: [
    'time comparisons',
    'timeline facts',
    'movie timeline',
    'history facts',
    'internet culture',
    'nostalgia facts'
  ],
  openGraph: {
    title: 'More Time Has Passed',
    description:
      'Surprising time comparisons from movies, TV, music, tech, gaming, history, and internet culture.',
    url: 'https://moretimehaspassed.com',
    siteName: 'More Time Has Passed',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'More Time Has Passed',
    description:
      'Surprising time comparisons from movies, TV, music, tech, gaming, history, and internet culture.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
