import Link from "next/link";
import BrandMark from "./BrandMark";
import { contactHref } from "@/lib/site";

export default function SiteHeader({ current }: { current?: "home" | "courses" }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="AFon Training home">
          <BrandMark />
          AFon Training
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/" aria-current={current === "home" ? "page" : undefined}>Home</Link>
          <Link href="/courses" aria-current={current === "courses" ? "page" : undefined}>Courses</Link>
          <a href={contactHref()}>Contact us</a>
        </nav>
      </div>
    </header>
  );
}
