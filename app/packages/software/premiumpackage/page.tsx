import type { Metadata } from "next";
import PremiumSoftwarePackage from "@/components/packages/software/premiumpackage/page";

export const metadata: Metadata = {
  title: "Premium Software Package | SDV Edutech",
  description:
    "Explore SDV Edutech's custom premium software package for connected business platforms, integrations, and cloud delivery.",
};

export default function Page() {
  return <PremiumSoftwarePackage />;
}