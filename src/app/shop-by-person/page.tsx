import { ArchivePage, archiveMetadata } from "@/components/ArchivePage";

export const metadata = archiveMetadata("shop-by-person");

export default function ShopByPersonPage() {
  return <ArchivePage categoryKey="shop-by-person" />;
}
