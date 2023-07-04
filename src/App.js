import { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=43ca138d'

const movie1 = {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman')
    }, []);

    return (
        <div className="app">
          <h1>MovieHub</h1>  

          <div className="search">
            <input placeholder="Search for movies" value="Superman" onChange={() => {}}/>
            <img src={SearchIcon} alt="search" onClick={() => {}} />
          </div>
          <div className="container">
            <div className="movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                </div>
                <div>
                    <span>{movie1.Type}</span>
                </div>
            </div>
          </div>
        </div>
    );
}

export default App;