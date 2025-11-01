import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface NavbarProps{
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

function Navbar({theme, setTheme}: NavbarProps ) {
  const navigate = useNavigate();
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = (event.currentTarget.elements[0] as HTMLInputElement).value;
    navigate("/search?query=" + input);
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg py-3 ${
          theme === "dark"
            ? "navbar-dark bg-dark"
            : "navbar-light bg-body-tertiary"
        }`}
      >
        <div className="container">
          <Link className="navbar-brand fs-1" to="/">
            <span className="text-warning">Movie</span>Browser
          </Link>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3 ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 active"
                  aria-current="page"
                  to="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/">
                  Coming Soon
                </Link>
              </li>
            </ul>
            <form
              className="d-flex ms-auto"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              type="button"
              className={`btn btn-outline-${theme} ms-auto`}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
