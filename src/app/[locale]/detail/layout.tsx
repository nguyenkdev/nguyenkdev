import HoverArrowLink from "@/components/HoverArrowLink";
import { useLocale } from "next-intl";
import React from "react";

export default function DetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();
  return (
    <div className="relative">
      <HoverArrowLink href={`/${locale}/`}>Back</HoverArrowLink>
      <div>{children}</div>
    </div>
  );
}
