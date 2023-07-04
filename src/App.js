import { useEffect } from "react";

import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com?apikey=43ca138d'

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
        <div>
          <h1>MovieHub</h1>  
        </div>
    );
}

export default App;