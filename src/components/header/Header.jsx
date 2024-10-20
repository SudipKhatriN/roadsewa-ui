import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/BrandLogo.png";

import "./Header.css";

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isFixedNav, setIsFixedNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  function setFixed() {
    if (window.scrollY >= 100) setIsFixedNav(true);
    else setIsFixedNav(false);
  }

  useEffect(
    function () {
      window.addEventListener("scroll", setFixed);
    },
    [isFixedNav]
  );

  return (
    <header
      className={`header${isNavActive ? " header--active" : ""} ${
        location.pathname === "/" ? "" : "header--white"
      }${isFixedNav ? " header--fixed" : ""}`}
    >
      <div className="container header-cont">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo Image" />
        </Link>
        <nav className="nav">
          <ul className="nav__lists">
            <li>
              <Link to="/" className="nav__links">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav__links nav__links-sub"
                onClick={() => setShowMenu(!showMenu)}
              >
                Mega Menu <MdOutlineKeyboardArrowDown />
              </Link>
              <ul
                className={`sub-menu sub-menu--mega${
                  showMenu ? " sub-menu--active" : ""
                }`}
              >
                <li>
                  <p className="sub-menu__title">Demos</p>
                  <div className="line"></div>
                  <ul>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="sub-menu__title">Demos</p>
                  <div className="line"></div>
                  <ul>
                    <li>
                      <Link className="sub-menu__links">New</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className="sub-menu__title">Other</p>
                  <div className="line"></div>
                  <ul>
                    <li>
                      <Link className="sub-menu__links">New</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                    <li>
                      <Link className="sub-menu__links">Home Default</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="about" className="nav__links">
                About Us
              </Link>
            </li>
            <li>
              <Link to="pricing" className="nav__links">
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="nav__links nav__links-sub"
                onClick={() => setShowMenu(!showMenu)}
              >
                Pages <MdOutlineKeyboardArrowDown />
              </Link>
              <ul className={`sub-menu${showMenu ? " sub-menu--active" : ""}`}>
                <li>
                  <Link className="sub-menu__links">Our Pricing Plan</Link>
                </li>
                <li>
                  <Link to="/about" className="sub-menu__links">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="sub-menu__links">
                    Frequently Asked Question
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="sub-menu__links">
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="blog" className="nav__links">
                Blog
              </Link>
            </li>
            <li>
              <Link to="contact" className="nav__links">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav__links nav__btn">Get Started</Link>
            </li>
          </ul>
        </nav>
        <button
          className="btn--menu-btn"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
