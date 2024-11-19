import Acheivements from "@/components/Acheivements";
import Clists from "@/components/Clists";
import Cources from "@/components/Cources";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Navbar from "@/components/Navbar";
import Test from "@/components/Team";
import Testinomials from "@/components/Testinomials";

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Hero2/>
      <Cources/>
      <Acheivements/>
      <Clists/>
      <Test/>
      <Testinomials/>
      <Footer/>
    </div>
  );
}
