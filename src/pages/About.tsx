import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface AboutProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

function About({ theme, setTheme }: AboutProps) {
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero text="About Project" />
      <section className="about-section container py-5">
        <p className="lead text-center">
          <strong>MovieBrowser</strong> is a modern web application built with
          <strong>React</strong>, <strong>TypeScript</strong>, and{" "}
          <strong>Vite</strong>, designed to help users explore and discover
          movies effortlessly. Using the{" "}
          <a
            href="https://www.themoviedb.org/documentation/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB API
          </a>
          , it provides real-time movie data with a fast, responsive, and
          minimalist design.
        </p>

        <hr className="my-5" />

        <h2>🌟 Key Features</h2>
        <ul>
          <li>
            <strong>Instant Search:</strong> Find any movie using TMDB’s massive
            database.
          </li>
          <li>
            <strong>Popular Movies:</strong> Discover trending films updated
            daily.
          </li>
          <li>
            <strong>Dark / Light Mode:</strong> Switch themes for your visual
            comfort.
          </li>
          <li>
            <strong>Responsive Design:</strong> Optimized for desktop, tablet,
            and mobile screens.
          </li>
          <li>
            <strong>Fast Performance:</strong> Built with Vite and Bootstrap 5
            for instant loading.
          </li>
        </ul>

        <h2>🧠 Why MovieBrowser?</h2>
        <p>
          MovieBrowser focuses on simplicity, speed, and clarity. It’s not just
          a movie app — it’s a{" "}
          <strong>developer-friendly, SEO-optimized</strong> showcase of clean
          architecture and scalable design principles. Built for both movie
          lovers and frontend developers who want to see best practices in
          action.
        </p>

        <h2>🧩 Technologies Used</h2>
        <ul>
          <li>
            <strong>React + TypeScript:</strong> Modern, modular frontend
            development.
          </li>
          <li>
            <strong>Vite:</strong> Lightning-fast dev environment and build
            system.
          </li>
          <li>
            <strong>Bootstrap 5 + SCSS:</strong> Clean and customizable design
            system.
          </li>
          <li>
            <strong>TMDB API:</strong> Real-time access to movie titles,
            posters, and details.
          </li>
        </ul>

        <h2>💡 Vision</h2>
        <p>
          MovieBrowser was created as an open-source learning project — to
          inspire developers and demonstrate how a small app can follow
          <em>big design patterns</em>: component reusability, API integration,
          and UX-focused theming.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default About;
