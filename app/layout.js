import './globals.css';
import SiteChrome from '@/components/SiteChrome';

export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'More Time Has Passed',
    template: '%s | More Time Has Passed'
  },
  description: 'Funny timeline comparisons that can later expand into personalized gifts and merchandise.',
  openGraph: {
    title: 'More Time Has Passed',
    description: 'Funny timeline comparisons that make people say wait, what?',
    type: 'website'
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
