import HeroSection from "../Components/HeroSection";
import HomePageGetStarted from "../Components/HomePageGetStarted";
import HomePageServices from "../Components/HomePageServices";
import WhyChooseUs from "../Components/WhyChooseUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HomePageServices />
      <WhyChooseUs />
      <HomePageGetStarted />
    </>
  );
};

export default HomePage;
