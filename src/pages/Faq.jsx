import DownloadAd from "../components/downloadAd/DownloadAd";
import Faqcont from "../components/faqcont/Faqcont";
import PageHero from "../components/pageHero/PageHero";
import StillQuestion from "../components/stillQuestion/StillQuestion";

export default function Faq() {
  return (
    <main className="faq-page">
      <PageHero pageHeroHead="Frequently asked questions" />

      <Faqcont />
      <StillQuestion />
      <DownloadAd />
    </main>
  );
}
