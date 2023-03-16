//15
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

//16
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

//17
import './MoviesGrid.css';

const Search = () => {

    //19 esse useSearchParams manda mais de 1 item (manda um array de funções). Por isso precisamos colocar ele dentro de colchetes para desestruturá-lo
    const [searchParams] = useSearchParams();

    //20
    const [movies, setMovies] = useState([]);
    
    // ex: pega o que está digitado dentro de "q" (search?q=hellraiser)
    const query = searchParams.get("q");

    //21 (Como ele está sendo reutilizado, podemos depois criar um Hook customizado)
    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
    }

    //importante deixar o [query] como depend~encia porque ele precisa ficar sempre de olho se vamos digitar na busca um outro filme
    useEffect(() => {
        const searchedURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchedURL);
    }, [query])


  return (
    // 18
    <div className="container">
       <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
       <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && 
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
       </div>
    </div>
  )
}

export default Search