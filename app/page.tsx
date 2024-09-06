import Image from "next/image";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import Questions from "./components/home/Questions";
import Footer from "./components/shared/Footer";
export default function Home() {
  return (
    <main>
    <Header/>
    <Hero/>
    <HowItWorks/>
    <Questions/>
    <Footer/>
  </main>
  );
}
