import { profile } from "@/lib/data";
import TopbarClient from "./TopbarClient";

export default function Topbar() {
  return <TopbarClient initials={profile.initials} name={profile.shortName} />;
}
