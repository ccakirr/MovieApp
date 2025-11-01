import { useEffect, useState } from "react";
import ApiReq from "../apps/ApiRequests";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Cards";

interface SearchProps{
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

function Search({theme, setTheme}: SearchProps) {
  const [params] = useSearchParams();
  const query = params.get("query");
  const api = new ApiReq(import.meta.env.VITE_TMDB_API_KEY);
  const [film, setFilm] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      if (query) {
        const data = await api.getFilm(query);
        setFilm(data);
      }
    }
    fetchData();
  }, [query]);
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero text="Search results for " searchItem={query || "nothing"} />
      <div className="container mt-4 d-flex flex-wrap justify-content-center gap-4">
        {film.map((item) => (
          <Card
            key={item.id}
            imgLink={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            cardTitle={item.original_title}
            cardText={item.overview}
          />
        ))}
      </div>
    </>
  );
}
export default Search;
