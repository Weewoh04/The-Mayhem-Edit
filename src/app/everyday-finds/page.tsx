import { ArchivePage, archiveMetadata } from "@/components/ArchivePage";

export const metadata = archiveMetadata("everyday-finds");

export default function EverydayFindsPage() {
  return <ArchivePage categoryKey="everyday-finds" />;
}
