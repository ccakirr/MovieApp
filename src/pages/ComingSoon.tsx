import { useEffect, useState } from "react";
import ApiReq from "../apps/ApiRequests";
import Navbar from "../components/Navbar";
import Card from "../components/Cards";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

interface ComingSoonProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

function ComingSoon({ theme, setTheme }: ComingSoonProps) {
  const api = new ApiReq(import.meta.env.VITE_TMDB_API_KEY);
  const [films, setFilms] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await api.getTenUpcomingFilms();
      setFilms(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero text="Coming Soon" />
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-5 gap-5">
          {films.map((film) => (
            <div className="col" key={film.id}>
              <Card
                cardTitle={film.original_title}
                cardText={film.overview}
                imgLink={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ComingSoon;
