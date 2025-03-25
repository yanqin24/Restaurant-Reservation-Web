import { useState, useEffect } from "react";
import "../assets/css/Header.css";
import Mode from "./Mode";
import Skiplink from "./SkipLink";

function CustomHeader({ onNav, theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      console.log("Menu state toggled:", !prevState);
      return !prevState;
    });
  };

  return (
    <>
      <div className="skipLink">
        <Skiplink onNav={onNav} />
      </div>

      <header className="header">

        <div className="image-title-container">
          <img
            src="/images/logo.png"
            className="logo"
            alt="Yan's Feast logo"
          />
          <h1 className="header-title">Yan's Feast</h1>
        </div>


        <nav className="header-navigation">
          {isMobile && (
            <button
              className="hamburger-button"
              onClick={toggleMenu}
              aria-label="hamburger menu icon to show dropdown menu"
            >
              <img src="/images/menu-hamburger.svg" alt="This is a Hamburger Menu icon." />
            </button>
          )}


          <ul
            className={`header-list ${
              isMobile
                ? isMenuOpen
                  ? "header-list-visible"
                  : "Nav-hidden"
                : ""
            }`}
            aria-label="Main navigation menu"
          >
            <li className="header-item">
              <a
                className="header-link"
                onClick={onNav}
                data-page="ReserveDish"
                href="#ReserveDish"
                aria-label="Navigate to Reserve Dish section"
              >
                Specialty
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link"
                onClick={onNav}
                data-page="FoodMenu"
                href="#FoodMenu"
                aria-label="Navigate to Food Menu section"
              >
                Menu
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link"
                onClick={onNav}
                data-page="Reviews"
                href="#Reviews"
                aria-label="Navigate to Reviews section"
              >
                Reviews
              </a>
            </li>
            <li className="header-item">
              <a
                className="header-link"
                onClick={onNav}
                data-page="Membership"
                href="#Membership"
                aria-label="Navigate to Join membership"
              >
                Membership
              </a>
            </li>
          </ul>

          <Mode theme={theme} toggleTheme={toggleTheme} />
        </nav>
      </header>
    </>
  );
}

export default CustomHeader;
