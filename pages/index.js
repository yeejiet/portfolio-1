import React from "react";
import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
//import AchievementsSection from "@/components/AchievementsSection";
import Navbar from "@/components/NavBar";

export default function Home(){
  return(
<div className="flex min-h-screen flex-col" style={{ marginLeft: '40px', marginRight: '40px' }}>
    <main>
      <Navbar/>
      <HeroSection />
      <AboutMe />
      <Project />
      <EmailSection />
    </main>
      <Footer />
</div>
  );
}