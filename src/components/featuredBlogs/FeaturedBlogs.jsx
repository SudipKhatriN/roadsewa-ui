import FeaturedBlogsCard from "../FeaturedBlogsCard/FeaturedBlogsCard";
import "./FeaturedBlogs.css";

export default function FeaturedBlogs() {
  return (
    <section className="container featured-blogs">
      <div className="heading-cont">
        <h2 className="heading-secondary">
          Read <span className="heading-highlight">latest from blog</span>
        </h2>
        <p className="subheading">
          Get your answers straight from the experts - contact our sales team
          for more info about our product features and pricing.
        </p>
      </div>

      <div className="grid grid--3-cols featured-blogcard-cont">
        <FeaturedBlogsCard />
        <FeaturedBlogsCard />
        <FeaturedBlogsCard />
      </div>
    </section>
  );
}
