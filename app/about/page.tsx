import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "About SDV Edutech",
};

export default function About() {
  return <AboutPage imageSrc="/about.png" />;
}

