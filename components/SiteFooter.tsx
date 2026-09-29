import Link from "next/link";
import { contactHref } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <Link className="brand" href="/">AFon Training</Link>
          <p>Practical training for professional teams.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <Link href="/courses">Courses</Link>
          <a href={contactHref()}>Contact us</a>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
      <div className="legal">
        <div className="wrap">© {new Date().getFullYear()} AFon Training</div>
      </div>
    </footer>
  );
}
