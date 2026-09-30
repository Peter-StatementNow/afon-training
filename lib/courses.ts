// Upcoming courses. Tess's course details go here until there is an admin area.
// Dates are ISO (YYYY-MM-DD), times are 24-hour (HH:MM), price is whole pounds.
export type CourseStatus = "Places available" | "Few places left" | "Fully booked";

export type Course = {
  slug: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  pricePerPerson: number;
  delivery: string;
  trainer: string;
  maxAttendees: number;
  status: CourseStatus;
};

const HALF_DAY = 49;
const FULL_DAY = 95;

const DEFAULTS = {
  delivery: "Online via Microsoft Teams",
  trainer: "Tessa Clarke",
  maxAttendees: 15,
  status: "Places available",
} as const;

const DESCRIPTIONS: Record<string, string> = {
  "Improving the Patient Experience":
    "Practical ways to make every patient interaction clearer, more respectful and more responsive.",
  "Clinical Notes Summarising":
    "Build confidence in reviewing, organising and summarising clinical records accurately and consistently.",
  "Handling Abusive Patients and Conflict Resolution":
    "Practical techniques for responding calmly, setting boundaries and managing challenging behaviour safely.",
  "Chaperone Training":
    "Understand the chaperone role, professional boundaries, safeguarding and good practice in healthcare settings.",
  "Medical Terminology for Non-Clinical Staff":
    "Learn the common terms, abbreviations and language used in healthcare to support confident communication and administration.",
  "Excellent Customer Service and Improving the Patient Experience":
    "A practical full-day course on delivering welcoming, effective service and improving the patient journey.",
  "Mental Health Awareness":
    "Develop awareness of common mental-health needs and how to respond appropriately, sensitively and within your role.",
  "Preparing for a CQC Inspection":
    "Understand how to prepare staff, evidence and everyday systems for a confident CQC inspection.",
};

// [date, title, start, end, price]
const SCHEDULE: [string, string, string, string, number][] = [
  ["2027-04-13", "Improving the Patient Experience", "13:00", "16:00", HALF_DAY],
  ["2027-04-14", "Clinical Notes Summarising", "09:30", "12:30", HALF_DAY],
  ["2027-04-15", "Handling Abusive Patients and Conflict Resolution", "13:00", "16:00", HALF_DAY],
  ["2027-04-20", "Clinical Notes Summarising", "13:00", "16:00", HALF_DAY],
  ["2027-04-21", "Chaperone Training", "13:00", "16:00", HALF_DAY],
  ["2027-04-22", "Medical Terminology for Non-Clinical Staff", "09:30", "16:30", FULL_DAY],
  ["2027-05-05", "Excellent Customer Service and Improving the Patient Experience", "09:30", "16:30", FULL_DAY],
  ["2027-05-19", "Handling Abusive Patients and Conflict Resolution", "13:00", "16:00", HALF_DAY],
  ["2027-06-15", "Chaperone Training", "13:00", "16:00", HALF_DAY],
  ["2027-06-16", "Clinical Notes Summarising", "13:00", "16:00", HALF_DAY],
  ["2027-06-17", "Mental Health Awareness", "13:00", "16:00", HALF_DAY],
  ["2027-06-22", "Medical Terminology for Non-Clinical Staff", "09:30", "16:30", FULL_DAY],
  ["2027-06-23", "Handling Abusive Patients and Conflict Resolution", "13:00", "16:00", HALF_DAY],
  ["2027-06-24", "Excellent Customer Service and Improving the Patient Experience", "09:30", "16:30", FULL_DAY],
  ["2027-07-07", "Preparing for a CQC Inspection", "09:30", "16:30", FULL_DAY],
];

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const COURSES: Course[] = SCHEDULE.map(([date, title, startTime, endTime, pricePerPerson]) => ({
  ...DEFAULTS,
  slug: `${slugify(title)}-${date}`,
  title,
  description: DESCRIPTIONS[title],
  date,
  startTime,
  endTime,
  pricePerPerson,
}));

export function upcomingCourses(today = new Date()): Course[] {
  const todayIso = today.toISOString().slice(0, 10);
  return COURSES.filter((c) => c.date >= todayIso).sort((a, b) =>
    (a.date + a.startTime).localeCompare(b.date + b.startTime),
  );
}

export function groupByMonth(courses: Course[]): { month: string; courses: Course[] }[] {
  const groups = new Map<string, Course[]>();
  for (const c of courses) {
    const key = c.date.slice(0, 7);
    groups.set(key, [...(groups.get(key) ?? []), c]);
  }
  return Array.from(groups, ([key, list]) => ({
    month: new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" }).format(
      new Date(`${key}-01T00:00:00Z`),
    ),
    courses: list,
  }));
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
  })
    .format(new Date(`${iso}T00:00:00Z`))
    .replace(",", "");
}

// UK style: 9.30am, 1.00pm
export function formatTime(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  return `${h % 12 || 12}.${String(m).padStart(2, "0")}${h >= 12 ? "pm" : "am"}`;
}

export function formatTimeRange(c: Pick<Course, "startTime" | "endTime">): string {
  return `${formatTime(c.startTime)}–${formatTime(c.endTime)}`;
}

export function formatPrice(pounds: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: Number.isInteger(pounds) ? 0 : 2,
  }).format(pounds);
}
