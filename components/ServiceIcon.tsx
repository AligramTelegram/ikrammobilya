import type { SegmentSlug } from "@/lib/site";

const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const ICONS: Record<SegmentSlug, React.ReactNode> = {
  "bireysel-ozel-olcu-siparis": (
    <svg {...ICON_PROPS}>
      <path d="M4 16.5 16.5 4a1.5 1.5 0 0 1 2.12 0l1.38 1.38a1.5 1.5 0 0 1 0 2.12L7.5 20 4 20.5 4 16.5Z" />
      <path d="m14.5 6 3.5 3.5" />
      <path d="m11.5 9 2 2" />
      <path d="m8.5 12 2 2" />
    </svg>
  ),
  "toptan-uretim": (
    <svg {...ICON_PROPS}>
      <path d="M21 8 12 3 3 8l9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  ),
  "kurumsal-proje-uretimi": (
    <svg {...ICON_PROPS}>
      <path d="M4 21V6l8-3 8 3v15" />
      <path d="M4 21h16" />
      <path d="M9 21v-5h6v5" />
      <path d="M9 10h.01M9 14h.01M15 10h.01M15 14h.01" />
    </svg>
  ),
  "mobilya-montaj-hizmeti": (
    <svg {...ICON_PROPS}>
      <path d="M14.7 6.3a3 3 0 0 0-4.24 4.24l-6.36 6.36a1.5 1.5 0 0 0 2.12 2.12l6.36-6.36a3 3 0 0 0 4.24-4.24l-2.12 2.12-2.12-2.12 2.12-2.12Z" />
    </svg>
  ),
  "dekorasyon-danismanligi": (
    <svg {...ICON_PROPS}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.5-.6 1.5-1.3 0-.4-.2-.7-.4-1-.2-.3-.4-.6-.4-1 0-.7.6-1.2 1.3-1.2H16a4 4 0 0 0 4-4c0-4.7-3.6-8.5-8-8.5Z" />
      <circle cx="7.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="10" cy="8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function ServiceIcon({
  slug,
  className,
}: {
  slug: SegmentSlug;
  className?: string;
}) {
  return <span className={className}>{ICONS[slug]}</span>;
}
