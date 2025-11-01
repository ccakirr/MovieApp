import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ApiReq from "../apps/ApiRequests";
import Card from "../components/Cards";
import { useEffect, useState } from "react";

interface HomeProps{
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

function Home({theme, setTheme}:HomeProps) {
  const api = new ApiReq(import.meta.env.VITE_TMDB_API_KEY);
  const [films, setFilms] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await api.getTenPopularFilm();
      setFilms(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero text="Welcome To Movie Browser!" />
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-5 gap-5">
          {films.map((film) => (
            <div className="col" key={film.id}>
              <Card
                imgLink={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                cardTitle={film.original_title}
                cardText={film.overview}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
