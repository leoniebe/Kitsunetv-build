import React, { useEffect, useState } from 'react';
import axios from "./axios.js";
import "./Row.css";



function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);

    const base_url ="https://image.tmdb.org/t/p/original/";


    useEffect(() => {
        async function fetchData() 
        {
            console.log('here', fetchUrl)
            try { 
            const request = await axios.get(fetchUrl);
            console.log(request.data, fetchUrl);
            setMovies(request.data.results);
            return request;
            } catch(error) {
                console.error(error);
            }
        }

        fetchData();

    }, [fetchUrl]);

    


    return ( <div className="row">
        <h2 className="row_title">{title}</h2>
        <div className="row_posters">
            {movies.map(movie =>(

                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && 
                (
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name}></img>
                )
                
            ))}
        </div>
      
        </div>

    );
}

export default Row;
