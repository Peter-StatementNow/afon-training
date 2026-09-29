// Upcoming courses. Tess's course details go here until there is an admin area.
// Dates are ISO (YYYY-MM-DD), times are 24-hour (HH:MM), price is whole pounds.
export type Course = {
  slug: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  pricePerPerson: number;
  audience?: string;
  format?: string;
  summary?: string;
};

export const COURSES: Course[] = [];

export function upcomingCourses(today = new Date()): Course[] {
  const todayIso = today.toISOString().slice(0, 10);
  return COURSES.filter((c) => c.date >= todayIso).sort((a, b) =>
    (a.date + a.startTime).localeCompare(b.date + b.startTime),
  );
}

export function findCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const hour = h % 12 || 12;
  return m ? `${hour}:${String(m).padStart(2, "0")}${suffix}` : `${hour}${suffix}`;
}

export function formatPrice(pounds: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: Number.isInteger(pounds) ? 0 : 2,
  }).format(pounds);
}
