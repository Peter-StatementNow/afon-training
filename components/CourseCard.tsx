import Link from "next/link";
import { type Course, formatDate, formatPrice, formatTime } from "@/lib/courses";
import { bookingHref } from "@/lib/site";

export default function CourseCard({ course }: { course: Course }) {
  const tags = [course.audience, course.format].filter(Boolean);
  return (
    <article className="course-card">
      <div className="course-card-main">
        <h2>
          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
        </h2>
        {tags.length > 0 && (
          <ul className="course-tags">
            {tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
        )}
        <dl className="course-facts">
          <div><dt>Date</dt><dd>{formatDate(course.date)}</dd></div>
          <div><dt>Time</dt><dd>{formatTime(course.startTime)}–{formatTime(course.endTime)}</dd></div>
          <div><dt>Cost</dt><dd>{formatPrice(course.pricePerPerson)} per person</dd></div>
        </dl>
      </div>
      <a className="btn btn-primary" href={bookingHref(course)}>Contact us to book</a>
    </article>
  );
}
