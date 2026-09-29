export default function BrandMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
      <rect width="30" height="30" rx="8" fill="var(--plum)" />
      <path d="M5 18c4-6 8-6 12 0s6 4 8-1" fill="none" stroke="var(--marigold)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M5 12c4-5 8-5 12 0s6 3 8-1" fill="none" stroke="var(--pale-heather)" strokeWidth="1.6" strokeLinecap="round" opacity=".7" />
    </svg>
  );
}
