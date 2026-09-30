import type { Course } from "./courses";
import { formatDate, formatTimeRange } from "./courses";

// Contact address for enquiries. Peter's address while the site is in testing;
// swap for the AFon Training address once it exists.
export const CONTACT_EMAIL = "peter@receptconsulting.com";

export const SITE_NAME = "AFon Training";

export function contactHref(subject = "AFon Training enquiry", body?: string) {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}?${params.join("&")}`;
}

export function bookingHref(course: Course) {
  const date = formatDate(course.date);
  const time = formatTimeRange(course);
  return contactHref(
    `Course booking enquiry: ${course.title} — ${date}`,
    [
      "Hello,",
      "",
      "I would like to enquire about booking a place on:",
      "",
      `Course: ${course.title}`,
      `Date: ${date}`,
      `Time: ${time}`,
      "Number of places required:",
      "",
      "Name:",
      "Organisation:",
      "Telephone number:",
      "",
      "Thank you.",
    ].join("\n"),
  );
}
