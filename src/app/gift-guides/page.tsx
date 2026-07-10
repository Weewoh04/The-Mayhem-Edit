import { ArchivePage, archiveMetadata } from "@/components/ArchivePage";

export const metadata = archiveMetadata("gift-guides");

export default function GiftGuidesPage() {
  return <ArchivePage categoryKey="gift-guides" />;
}
