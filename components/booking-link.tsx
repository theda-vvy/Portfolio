/* oxlint-disable next/no-img-element -- Pre-sized 160px static avatar avoids a runtime image service. */
// Adapted from useLayouts Get In Touch. See THIRD_PARTY_NOTICES.md.
import { LinkArrow } from '@/components/link-arrow';
import { founder } from '@/lib/site-content';

export function BookingLink({ label = 'Book a 30-minute intro call' }: { label?: string }) {
  return <a className="booking-link" href={founder.bookingUrl} target="_blank" rel="noopener noreferrer">
    <span className="booking-portrait" aria-hidden="true"><img src="/images/oluwaseyi-david-avatar.jpg" alt="" width={44} height={44} loading="lazy" /></span>
    <span className="booking-label">{label}</span>
    <span className="booking-arrow" aria-hidden="true"><LinkArrow /></span>
    <span className="sr-only"> (opens Calendly in a new tab)</span>
  </a>;
}
