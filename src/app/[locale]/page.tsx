import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="lato">
      <Hero/>
      <Work/>
    </div>
  );
}
