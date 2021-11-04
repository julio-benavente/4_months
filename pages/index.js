import Head from "next/head";
import Image from "next/image";

import { HomePage } from "../components/HomePage/HomePageStyles";
import HomeSection from "../components/HomePage/HomeSection/HomeSection";
import LetterSection from "../components/HomePage/LetterSection/LetterSection";
import PhotosSection from "../components/HomePage/PhotosSection/PhotosSection";

export default function Home() {
  return (
    <HomePage>
      <HomeSection />
      <PhotosSection />
      <LetterSection />
    </HomePage>
  );
}
