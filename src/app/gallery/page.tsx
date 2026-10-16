import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Breadcrumb, PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of recent Canopy Tree Care jobs around Madison and Dane County.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Removals, pruning, stump grinding, and storm cleanup from around Madison."
      />
      <Breadcrumb className="bg-white" items={[{ label: "Home", href: "/" }, { label: "Gallery" }]} />
      <PhotoGallery />
      <CtaBanner />
    </>
  );
}
