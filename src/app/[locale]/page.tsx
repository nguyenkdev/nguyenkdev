import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import WorkV2 from "@/components/WorkV2";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="lato">
      <Hero />
      {/* <Work/> */}
      <WorkV2 />
    </div>
  );
}
