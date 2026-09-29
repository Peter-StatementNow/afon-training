// The flowing-line brand motif. Decorative only; kept behind the hero.
export default function FlowLines() {
  return (
    <svg className="flow" viewBox="0 0 760 320" aria-hidden="true">
      <path d="M0 250 C 140 170, 260 300, 400 220 S 640 120, 760 170" stroke="var(--heather)" strokeWidth="2" opacity=".35" />
      <path d="M0 280 C 150 210, 270 320, 420 250 S 650 160, 760 205" stroke="var(--heather)" strokeWidth="1.5" opacity=".22" />
      <path d="M40 305 C 180 250, 300 330, 450 280 S 660 210, 760 240" stroke="var(--marigold)" strokeWidth="2.5" opacity=".7" />
    </svg>
  );
}
