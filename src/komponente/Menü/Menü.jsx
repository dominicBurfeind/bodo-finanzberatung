import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "/marko-logo-B.png";
import "./Menü.css";

const Menü = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible((prevState) => !prevState);
  };

  // Close the menu when an item is clicked
  const closeMenu = () => {
    setMenuVisible(false);
  };

  // Effect to update menu visibility based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setMenuVisible(true); // Show menu on larger screens
      } else {
        setMenuVisible(false); // Hide menu by default on smaller screens
      }
    };

    // Run once to set initial visibility based on screen size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="menü" id="IDMenü">
      <img loading="lazy" src={Logo} alt="Marko Bodo Logo" />
      <nav>
        <span
          onClick={toggleMenu}
          className={`menü-btn ${menuVisible ? "clicked" : ""}`}
        >
          |||
        </span>

        {/* Menu visibility controlled by state */}
        {(menuVisible || window.innerWidth > 980) && (
          <ul className="visible">
            <li>
              <Link className="menü-link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="menü-link" to="/ÜberUns" onClick={closeMenu}>
                Über Mich
              </Link>
            </li>
            <li className="dropdown">
              <Link
                className="menü-link"
                to="/Dienstleistungen"
                onClick={closeMenu}
              >
                Dienstleistungen
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/finanzberatung" onClick={closeMenu}>
                    Finanzberatung
                  </Link>
                </li>
                <li>
                  <Link to="/versicherungen" onClick={closeMenu}>
                    Versicherungen
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="menü-link beratungsgespräch"
                to="/Kontakt"
                onClick={closeMenu}
              >
                Beratungsgespräch
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Menü;
