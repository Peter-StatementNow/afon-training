// Contact address for enquiries. Peter's address while the site is in testing;
// swap for the AFon Training address once it exists.
export const CONTACT_EMAIL = "peter@receptconsulting.com";

export const SITE_NAME = "AFon Training";

export function contactHref(subject = "AFon Training enquiry") {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
