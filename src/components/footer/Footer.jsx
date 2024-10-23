import { Link, useLocation } from "react-router-dom";
import DownloadButton from "../downloadButton/DownloadButton";
import Logo from "../../assets/BrandLogo.png";
import NewsSubscription from "../newsSubscription/NewsSubscription";
import SocialLinks from "../socialLinks/SocialLinks";
import "./Footer.css";

export default function Footer() {
  const location = useLocation();

  return (
    <footer
      className={`footer${
        location.pathname === "/blog" ? " footer--mless" : ""
      }${location.pathname === "/about" ? " footer--mless" : ""}`}
    >
      <div className="container footer-cont">
        <NewsSubscription />

        <div className="grid grid--4-cols footer-content">
          <div className="footer__company-address">
            <Link to="/" className="footer-logo">
              <img src={Logo} alt="logo" />
            </Link>
            <p className="company-detail address">
              ABC215, Business avenue, USA 6789
            </p>
            <p className="company-detail email">apper@apper.company</p>
            <p className="company-detail contact-num">+1 (123) 456-78-90</p>

            <SocialLinks />
          </div>

          <div className="footer-menu-links">
            <p className="footer-menu-heading">Quick Menu</p>
            <div className="footer-line"></div>
            <Link to="/" className="footer-menu">
              Home
            </Link>
            <Link to="/blog" className="footer-menu">
              Blog
            </Link>
            <Link to="/about" className="footer-menu">
              About Us
            </Link>
            <Link to="/contact" className="footer-menu">
              Contact
            </Link>
            <Link to="/faq" className="footer-menu">
              FAQ
            </Link>
          </div>

          <div className="footer-menu-links">
            <p className="footer-menu-heading">Legal</p>
            <div className="footer-line"></div>
            <a href="#" className="footer-menu">
              FAQs
            </a>
            <a href="#" className="footer-menu">
              Support
            </a>
            <a href="#" className="footer-menu">
              How it works
            </a>
            <a href="#" className="footer-menu">
              Terms & Condition
            </a>
            <a href="#" className="footer-menu">
              Privacy Policy
            </a>
          </div>

          <div className="footer-download-cont">
            <p className="footer-menu-heading">Download Now</p>
            <div className="footer-line"></div>
            <div className="footer__btn-cont">
              <DownloadButton
                imgSrc="./appstore_blue.png"
                styleClass="footer-download-btn"
              />
              <DownloadButton
                imgSrc="./googleplay_blue.png"
                styleClass="footer-download-btn"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-cont">
        <div className="container">
          <p className="copyright-txt">
            Copyright © 2024 Road Sewa. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
