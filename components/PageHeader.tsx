import type { ReactNode } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import type { BreadcrumbItem } from "@/lib/schema";

export default function PageHeader({
  kicker,
  title,
  description,
  breadcrumbItems,
  children,
}: {
  kicker: string;
  title: string;
  description?: string;
  breadcrumbItems: BreadcrumbItem[];
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-[var(--line)] bg-[var(--paper-warm)]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 lg:px-10">
        <Breadcrumb items={breadcrumbItems} />
        <p className="kicker mt-8">{kicker}</p>
        <h1 className="font-display mt-3 max-w-2xl text-4xl sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base text-black/60">
            {description}
          </p>
        )}
        <div className="gold-rule mt-8" />
        {children}
      </div>
    </div>
  );
}
