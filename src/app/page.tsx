"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppFeatures from "@/components/AppFeatures";
import GetInTouch from "@/components/GetInTouch";
import Demo from "@/components/Demo";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Demo />
      <AppFeatures />
      <GetInTouch />
      <Footer />
    </>
  );
}
