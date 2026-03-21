export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <section className="grid">
      <h1>About More Time Has Passed</h1>
      <div className="card copy">
        <p>
          More Time Has Passed is a website about surprising timeline comparisons.
          It highlights how much time has passed between well-known events in movies,
          technology, music, history, television, and internet culture.
        </p>

        <p>
          The goal is simple: make people stop for a second and say, “Wait, really?”
          Each page compares dates in a way that is easy to understand, easy to share,
          and sometimes a little unsettling.
        </p>

        <p>
          Over time, the site may also include personalized comparisons for birthdays,
          anniversaries, weddings, and other milestone years, along with related gift
          and merchandise ideas.
        </p>

        <p>
          Dates and comparisons are reviewed before publication, but mistakes can still
          happen. If you notice an error or want to suggest a better comparison, please
          get in touch.
        </p>

        <p>
          Contact: <a href="mailto:hello@moretimehaspassed.com">hello@moretimehaspassed.com</a>
        </p>
      </div>
    </section>
  );
}