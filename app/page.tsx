import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FlowLines from "@/components/FlowLines";
import { contactHref } from "@/lib/site";

const SECTORS = ["GP practices", "Hospitals", "Care homes", "Leisure sector"];

export default function Home() {
  return (
    <>
      <SiteHeader current="home" />
      <main>
        <section className="hero">
          <FlowLines />
          <div className="wrap">
            <h1>Practical training for confident teams</h1>
            <p className="lede">
              Clear, relevant courses for people working in GP practices,
              hospitals, care homes and the leisure sector.
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href="/courses">View courses</Link>
              <a className="btn btn-secondary" href={contactHref()}>Contact us</a>
            </div>
            <ul className="sectors" aria-label="Sectors we train">
              {SECTORS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </section>

        <section className="band band-white">
          <div className="wrap intro">
            <div>
              <p className="eyebrow">About our training</p>
              <h2>Training that fits real working life</h2>
            </div>
            <p>
              AFon Training provides focused, practical learning delivered in a
              clear and approachable way. Browse upcoming courses and contact us
              to reserve your place.
            </p>
          </div>
        </section>

        <section className="band band-heather">
          <div className="wrap prompt">
            <div>
              <h2>Upcoming courses</h2>
              <p>View course dates, times and prices on our courses page.</p>
            </div>
            <Link className="btn btn-primary" href="/courses">View courses</Link>
          </div>
        </section>

        <section className="band" id="contact">
          <div className="wrap">
            <div className="contact-card prompt">
              <div>
                <h2>Need training for your team?</h2>
                <p>
                  If you would like to discuss an upcoming course or training
                  for your organisation, please get in touch.
                </p>
              </div>
              <a className="btn btn-secondary" href={contactHref("Training for our team")}>Contact us</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
