export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <section className="grid">
      <h1>Contact</h1>
      <div className="card copy">
        <p>
          For corrections, feedback, partnerships, press, or product questions, please
          email:
        </p>

        <p>
          <a href="mailto:hello@moretimehaspassed.com">hello@moretimehaspassed.com</a>
        </p>

        <p>
          This is the best contact point for reporting date errors, suggesting new time
          comparisons, or asking about personalized gifts and merchandise.
        </p>
      </div>
    </section>
  );
}