import "./FeaturedBlogsCard.css";

export default function FeaturedBlogsCard({ blogType }) {
  return (
    <div className="featured-blogcard">
      <div className="featured-blog-img-wrapper">
        <img
          src="./people-lifestyle-mobile.webp"
          alt="Girl With headphone and using mobile"
        />
        <time className="time-stamp">Mar 08</time>
      </div>
      <div className="featured-blog-content">
        {blogType && <p className="blog-type">{blogType}</p>}
        <h2 className="heading-tertiary">
          Mobile CRM for Remote & Virtual Teams
        </h2>
        <p className="featured-blog-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut…
        </p>

        <a href="#" className="featured-blog-btn">
          Read More
        </a>
      </div>
    </div>
  );
}
