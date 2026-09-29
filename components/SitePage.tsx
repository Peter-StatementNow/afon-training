import SiteHeader, { type NavKey } from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function SitePage({
  current,
  children,
}: {
  current?: NavKey;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader current={current} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
