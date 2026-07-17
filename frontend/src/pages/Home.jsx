 
import Navbar from "../components/Navbar.jsx"; 
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Pricing from "../components/Pricing.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Inquiry from "../components/Inqiury.jsx";
import Footer from "../components/Footer.jsx";
import Faq from "../components/Faq.jsx";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <Faq></Faq>
      <Inquiry></Inquiry>
      <Footer></Footer>
    </div>
  );
}
