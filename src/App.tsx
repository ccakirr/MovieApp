import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Search from './pages/Search'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);
  return (
    <>
      <Routes>
        <Route path= "/" element={<Home theme={theme} setTheme={setTheme}/>}/>
        <Route path='/search' element={<Search theme={theme} setTheme={setTheme}/>}></Route>
      </Routes>
    </>
  )
}

export default App
