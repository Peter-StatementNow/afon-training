import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SitePage from "@/components/SitePage";
import { COURSES, findCourse, formatDate, formatPrice, formatTime } from "@/lib/courses";
import { bookingHref } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const course = findCourse((await params).slug);
  return { title: course ? `${course.title} · AFon Training` : "Course not found" };
}

export default async function CoursePage({ params }: Params) {
  const course = findCourse((await params).slug);
  if (!course) notFound();

  return (
    <SitePage current="courses">
      <section className="page-heading">
        <div className="wrap">
          <p className="eyebrow"><Link href="/courses">Upcoming courses</Link></p>
          <h1>{course.title}</h1>
          {course.summary && <div className="page-lede"><p>{course.summary}</p></div>}
        </div>
      </section>
      <section className="band band-tight">
        <div className="wrap">
          <div className="course-card">
            <dl className="course-facts">
              <div><dt>Date</dt><dd>{formatDate(course.date)}</dd></div>
              <div><dt>Time</dt><dd>{formatTime(course.startTime)}–{formatTime(course.endTime)}</dd></div>
              <div><dt>Cost</dt><dd>{formatPrice(course.pricePerPerson)} per person</dd></div>
              {course.audience && <div><dt>For</dt><dd>{course.audience}</dd></div>}
              {course.format && <div><dt>Format</dt><dd>{course.format}</dd></div>}
            </dl>
            <a className="btn btn-primary" href={bookingHref(course)}>Contact us to book</a>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
