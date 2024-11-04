import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Locale } from "@/lib/locales";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function PopoverLocale() {
  const locale = useLocale() as Locale;
  const router = useRouter();

  function handleLocaleChange(newLocale: Locale): void {
    router.replace(`/${newLocale}`);
  }
  return (
    <Popover>
      <PopoverTrigger>Language</PopoverTrigger>
      <PopoverContent>
        <div
          onClick={() => {
            handleLocaleChange("en");
          }}
        >
          English
        </div>
        <div
          onClick={() => {
            handleLocaleChange("vi");
          }}
        >
          Tiếng việt
        </div>
      </PopoverContent>
    </Popover>
  );
}
