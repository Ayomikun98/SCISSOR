import FAQs from "../../components/FAQs/FAQs"
import Features from "../../components/Features/Features"
import Hero from "../../components/Hero/Hero"
import Pricing from "../../components/Pricing/Pricing"
import WhyScissor from "../../components/WhyScissor/WhyScissor"
import TrimForm from "../../components/TrimForm/TrimForm"
import Revolutionize from "../../components/Revolutionize/Revolutionize"
import Footer from "../../components/Footer/Footer"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhyScissor />
      <Pricing />
      <TrimForm />
      <FAQs />
      <Revolutionize />
      <Footer />
    </>
  );
};
export default Home;
