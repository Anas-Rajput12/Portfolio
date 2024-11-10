"use client";
// import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "./hero/page";
import Skills from "./skill/page";
import Contact from "./contact/page";
import About from "./about/page";
import Social from "./social/page";
import Education from "./education/page";
import Projects from "./project/page";
export default function Home() {
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160
    });
    AOS.refresh()
  },[]);
  return (
    <main>
      <Hero/>
      <Skills/>
<Projects/>

      <Contact/>
      <About/>
      <Social/>
      <Education/>
    </main>
  );
}
