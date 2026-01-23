import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import BootcampHighlights from "../components/BootcampHighlights";
import StudentJourney from "../components/StudentJourney";
import LiveMarket from "../components/LiveMarket";
import Mentor from "../components/Mentor";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <BootcampHighlights />
      <StudentJourney />
      <LiveMarket />
      <Mentor />
      <Testimonials />
      <FAQ />
      <CTA />
      <RegistrationForm />
      <Footer />
    </div>
  );
}
