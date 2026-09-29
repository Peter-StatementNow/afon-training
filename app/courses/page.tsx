import type { Metadata } from "next";
import Link from "next/link";
import SitePage from "@/components/SitePage";
import PageHeading from "@/components/PageHeading";
import CourseCard from "@/components/CourseCard";
import { upcomingCourses } from "@/lib/courses";

export const metadata: Metadata = { title: "Upcoming courses · AFon Training" };

// Rebuild hourly so past courses drop off without a redeploy.
export const revalidate = 3600;

export default function CoursesPage() {
  const courses = upcomingCourses();

  return (
    <SitePage current="courses">
      <PageHeading title="Upcoming courses">
        <p>
          Browse forthcoming training courses below. To book a place, select
          Contact us to book and we will confirm availability and next steps.
        </p>
      </PageHeading>

      <section className="band band-tight">
        <div className="wrap">
          {courses.length > 0 ? (
            <div className="course-list">
              {courses.map((c) => <CourseCard key={c.slug} course={c} />)}
            </div>
          ) : (
            <div className="empty-state">
              <h2>New course dates coming soon</h2>
              <p>
                We are preparing our upcoming programme. Please contact us if
                you would like to register your interest or discuss training
                for your team.
              </p>
              <Link className="btn btn-primary" href="/contact">Contact us</Link>
            </div>
          )}
        </div>
      </section>
    </SitePage>
  );
}
