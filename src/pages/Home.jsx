//1
import { useState, useEffect } from "react"

//8
import MovieCard from "../components/MovieCard";

//9
import './MoviesGrid.css';

//2
const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    //3 gerenciar estados dos filmes
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        //results é o array ue retornam os filmes (ver em Network/Name/Preview )
        setTopMovies(data.results);
    }

    //4
    useEffect(() => {
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}&language=pt-BR`;

        getTopRatedMovies(topRatedUrl);
    }, [])

  return (
    // 5
    <div className="container">
       <h2 className="title">Melhores filmes:</h2>
       <div className="movies-container">
        {topMovies?.length === 0 && <p>Carregando...</p>}
        {/* 8 */}
        {topMovies?.length > 0 && 
            topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
       </div>
    </div>
  )
}

export default Home