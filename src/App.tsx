import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Search from "./pages/Search";
import About from "./pages/About";
import { useState } from "react";
import { useEffect } from "react";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
        <Route
          path="/search"
          element={<Search theme={theme} setTheme={setTheme} />}
        ></Route>
        <Route
          path="/about"
          element={<About theme={theme} setTheme={setTheme} />}
        />
        <Route
          path="/coming-soon"
          element={<ComingSoon theme={theme} setTheme={setTheme} />}
        />
      </Routes>
    </>
  );
}

export default App;
