import { ArchivePage, archiveMetadata } from "@/components/ArchivePage";

export const metadata = archiveMetadata("seasonal");

export default function SeasonalPage() {
  return <ArchivePage categoryKey="seasonal" />;
}
