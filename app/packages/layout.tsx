import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function PackagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="showcase-header packages-shared-header">
        <Link href="/" className="showcase-logo" aria-label="SDV Edutech Homepage">
          <Image
            className="brand-logo"
            src="/logo.png"
            alt="SDV Edutech Logo"
            width={254}
            height={123}
          />
        </Link>
        <Navbar />
      </header>
      <div className="packages-route-content">{children}</div>
    </>
  );
}
