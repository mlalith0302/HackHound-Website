import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ContactPage from "./components/ContactPage";
import Team from "./components/Team";

const App = () => {
  return (
    <div className="bg-[#17153B]">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Team />
        <Workflow />
        {/* <Pricing /> */}
        <Testimonials />
        <ContactPage/>
        <Footer />
      </div>
    </div>
  );
};

export default App;
