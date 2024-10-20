import CompanyTrusted from "../companyTrusted/companyTrusted";
import HomeHero from "../hero/HomeHero";
import DownloadAd from "../downloadAd/DownloadAd";
import Faqcont from "../faqcont/Faqcont";
import FeaturedBlogs from "../featuredBlogs/FeaturedBlogs";
import Features from "../features/Features";
import Featurestwo from "../featurestwo/Featurestwo";
import StillQuestion from "../stillQuestion/StillQuestion";

import "./HomeMain.css";
import DemoVideo from "../demoVideo/DemoVideo";
import CustomerFeedback from "../customerFeedback/CustomerFeedback";

export default function HomeMain() {
  return (
    <main className="home-main">
      <HomeHero />
      <CompanyTrusted />
      <Features />
      <Featurestwo />
      <DemoVideo />
      <CustomerFeedback />
      <Faqcont />
      <StillQuestion />
      <DownloadAd />
      <FeaturedBlogs />
    </main>
  );
}
