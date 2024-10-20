import { IoIosSearch } from "react-icons/io";
import PageHero from "../components/pageHero/PageHero";
import FeaturedBlogsCard from "../components/FeaturedBlogsCard/FeaturedBlogsCard";

import "./Blogs.css";

export default function Blog() {
  return (
    <main className="blog-page">
      <PageHero pageHeroHead="Blog" />
      <div className="container blog-content-cont">
        <div className="grid grid--2-cols blog-page-cont">
          <FeaturedBlogsCard blogType="Crm" />
          <FeaturedBlogsCard blogType="Crm" />
          <FeaturedBlogsCard blogType="Designing" />
          <FeaturedBlogsCard blogType="Designing" />
          <FeaturedBlogsCard blogType="Designing" />
          <FeaturedBlogsCard blogType="Development" />
        </div>
        <aside className="blog-side-menu">
          <div className="white-cont search-widget">
            <input type="text" placeholder="search" />

            <div className="icon search-icon">
              <IoIosSearch />
            </div>
          </div>

          <div className="white-cont newsletter">
            <p className="sidemenu-heading">Newsletter</p>

            <form className="newsletter-small-form">
              <label htmlFor="newsletter-email">Email address:</label>
              <input
                type="email"
                name="newsletter-email"
                id="newsletter-email"
                placeholder="Your email address"
              />
              <button className="btn--pill btn--colored">Submit</button>
            </form>
          </div>

          <div className="white-cont recent-post">
            <p className="sidemenu-heading">Recent Posts</p>

            <ul className="blog-list">
              <li>
                <a href="#" className="blog-link">
                  Mobile CRM for Remote & Virtual Teams
                </a>
              </li>
              <li>
                <a href="#" className="blog-link">
                  Personalizing Customer Interactions with CRM
                </a>
              </li>
              <li>
                <a href="#" className="blog-link">
                  How to build a mobile app on a budget?
                </a>
              </li>
              <li>
                <a href="#" className="blog-link">
                  Tips for optimizing mobile app perfomance
                </a>
              </li>
              <li>
                <a href="#" className="blog-link">
                  Best practices for designing mobile app UIs
                </a>
              </li>
            </ul>
          </div>

          <div className="white-cont tags">
            <p className="sidemenu-heading">Tags Cloud</p>

            <div className="tags-link-cont">
              <ul className="tags-lists">
                <li>
                  <a href="#" className="tags-link">
                    How-to
                  </a>
                </li>
                <li>
                  <a href="#" className="tags-link">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="tags-link">
                    Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="tags-link">
                    Ui/Ux
                  </a>
                </li>
                <li>
                  <a href="#" className="tags-link">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="tags-link">
                    Websites
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
