import Link from "next/link";

export default function ContactPrompt() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="contact-card prompt">
          <div>
            <h2>Need training for your team?</h2>
            <p>
              If you would like to discuss an upcoming course or training for
              your organisation, please get in touch.
            </p>
          </div>
          <Link className="btn btn-secondary" href="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
