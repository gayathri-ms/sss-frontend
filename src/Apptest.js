import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from "./App";
// import "./App.css";

export default function Apptest() {
  useEffect(() => {
    /*==================== SHOW NAVBAR ====================*/
    const showMenu = (headerToggle, navbarId) => {
      const toggleBtn = document.getElementById(headerToggle),
        nav = document.getElementById(navbarId);

      // Validate that variables exist
      if (headerToggle && navbarId) {
        toggleBtn.addEventListener("click", () => {
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle("show-menu");
          // change icon
          toggleBtn.classList.toggle("bx-x");
        });
      }
    };
    showMenu("header-toggle", "navbar");

    /*==================== LINK ACTIVE ====================*/
    const linkColor = document.querySelectorAll(".nav__link");

    function colorLink() {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }

    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    const navDropdown = document.querySelectorAll(".nav__dropdown");
    for (let i = 0; i < navDropdown.length; i++) {
      navDropdown[i].addEventListener("click", () =>
        navDropdown[i].classList.toggle("open")
      );
    }

    const main = document.querySelector("main");
    main.addEventListener("mousemove", (e) => {
      for (let i = 0; i < navDropdown.length; i++) {
        navDropdown[i].classList.remove("open");
      }
    });
  }, []);

  return (
    <>
      <Router>
        <title>Responsive sidebar submenus</title>

        <header className="header">
          <div className="header__container">
            <img alt="" className="header__img" />

            <Link to="/" className="header__logo">
              YOUR LOGO
            </Link>

            {/* <div className="header__search">
            <input
              type="search"
              placeholder="Search"
              className="header__input"
            />
            <i className="bx bx-search header__icon"></i>
          </div> */}

            <div className="header__toggle">
              <i className="bx bx-menu" id="header-toggle"></i>
            </div>
          </div>
        </header>

        <div className="nav" id="navbar">
          <nav className="nav__container">
            <div>
              <Link to="/" className="nav__link nav__logo">
                <i className="bx bxs-disc nav__icon"></i>
                <span className="nav__logo-name">SSST</span>
              </Link>

              <div className="nav__list">
                <div className="nav__items">
                  <Link to="/" className="nav__link active">
                    <i className="bx bx-home nav__icon"></i>
                    <span className="nav__name">Home</span>
                  </Link>

                  <div className="nav__dropdown">
                    <div className="nav__link">
                      <i className="bi bi-file-check nav__icon"></i>
                      <span className="nav__name">Display</span>
                      <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                    </div>

                    <div className="nav__dropdown-collapse">
                      <div className="nav__dropdown-content">
                        <Link to="/displaydate" className="nav__dropdown-item">
                          Date
                        </Link>
                        <Link to="/displaycom" className="nav__dropdown-item">
                          Company Name
                        </Link>
                        {/* <a href="#" className="nav__dropdown-item">
                          Accounts
                        </a> */}
                      </div>
                    </div>
                  </div>

                  <Link to="/company" className="nav__link">
                    <i className="bi bi-person-plus nav__icon"></i>
                    <span className="nav__name">Add Company</span>
                  </Link>
                  <Link to="/form" className="nav__link">
                    <i className="bi bi-plus-square nav__icon"></i>
                    <span className="nav__name">Add Form</span>
                  </Link>
                  <div className="nav__dropdown">
                    <div className="nav__link">
                      <i className="bi bi-paypal nav__icon"></i>
                      <span className="nav__name">Payments</span>
                      <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                    </div>

                    <div className="nav__dropdown-collapse">
                      <div className="nav__dropdown-content">
                        <Link to="/balance" className="nav__dropdown-item">
                          Balance Sheet
                        </Link>
                        <Link to="/displaycom" className="nav__dropdown-item">
                          Company Name
                        </Link>
                        {/* <a href="#" className="nav__dropdown-item">
                          Accounts
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="nav__items">
                  <h3 className="nav__subtitle">Menu</h3>

                  <div className="nav__dropdown">
                    <a href="#" className="nav__link">
                      <i className="bx bx-bell nav__icon"></i>
                      <span className="nav__name">Notifications</span>
                      <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                    </a>

                    <div className="nav__dropdown-collapse">
                      <div className="nav__dropdown-content">
                        <a href="#" className="nav__dropdown-item">
                          Blocked
                        </a>
                        <a href="#" className="nav__dropdown-item">
                          Silenced
                        </a>
                        <a href="#" className="nav__dropdown-item">
                          Publish
                        </a>
                        <a href="#" className="nav__dropdown-item">
                          Program
                        </a>
                      </div>
                    </div>
                  </div>

                  <a href="#" className="nav__link">
                    <i className="bx bx-compass nav__icon"></i>
                    <span className="nav__name">Explore</span>
                  </a>
                  <a href="#" className="nav__link">
                    <i className="bx bx-bookmark nav__icon"></i>
                    <span className="nav__name">Saved</span>
                  </a>
                </div>
              </div>
            </div>

            <a href="#" className="nav__link nav__logout">
              <i className="bx bx-log-out nav__icon"></i>
              <span className="nav__name">Log Out</span>
            </a>
          </nav>
        </div>

        <main>
          <App />
        </main>
      </Router>
    </>
  );
}
