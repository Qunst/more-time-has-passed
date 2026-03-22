import Link from 'next/link';

export default function SiteChrome({ children }) {
  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <Link href="/" className="brand">More Time Has Passed</Link>
          <nav className="nav">
            <Link href="/random">Random</Link>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="main container">{children}</main>
      <footer className="site-footer">
        <div className="container site-footer-inner small">
          <div>Surprising time comparisons from movies, TV, music, tech, gaming, history, and internet culture.</div>
          <div>© More Time Has Passed</div>
        </div>
      </footer>
    </>
  );
}