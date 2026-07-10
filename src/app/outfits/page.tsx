import { ArchivePage, archiveMetadata } from "@/components/ArchivePage";

export const metadata = archiveMetadata("outfits");

export default function OutfitsPage() {
  return <ArchivePage categoryKey="outfits" />;
}
