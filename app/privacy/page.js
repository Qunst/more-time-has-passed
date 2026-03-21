export const metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return (
    <section className="grid">
      <h1>Privacy Policy</h1>
      <div className="card copy">
        <p>
          More Time Has Passed respects your privacy. This page explains what limited
          information may be collected when you visit the site.
        </p>

        <p>
          The site may collect basic technical and usage data, such as browser type,
          device type, pages viewed, referral source, and general performance data.
          This information may be used to understand traffic, improve the site, and
          measure which pages are most useful.
        </p>

        <p>
          The site may use cookies or similar technologies for site functionality,
          analytics, performance measurement, and future monetization features.
        </p>

        <p>
          Some pages may include links to third-party websites or services, including
          marketplaces such as Etsy. If you click an external link, your interaction
          with that third party is governed by that third party’s own terms and privacy
          practices.
        </p>

        <p>
          At this stage, the site is primarily informational and does not require user
          account creation to browse content.
        </p>

        <p>
          Privacy practices may be updated as the site grows, including if analytics,
          advertising, email subscriptions, or commerce features are expanded.
        </p>

        <p>
          For privacy questions, contact{' '}
          <a href="mailto:hello@moretimehaspassed.com">hello@moretimehaspassed.com</a>.
        </p>
      </div>
    </section>
  );
}