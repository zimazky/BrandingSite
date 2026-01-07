import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentWorks from "@/components/RecentWorks";
import Services from "@/components/Services";
import Collaboration from "@/components/Collaboration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <RecentWorks />
        <Services />
        <Collaboration />
      </main>
      <Footer />
    </>
  );
}