export default function PageHeading({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-heading">
      <div className="wrap">
        <h1>{title}</h1>
        {children && <div className="page-lede">{children}</div>}
      </div>
    </section>
  );
}
