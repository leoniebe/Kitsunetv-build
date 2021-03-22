import React, { useEffect, useState } from 'react';
import axios from "./axios.js";
import "./Row.css";
import Youtube from "react-youtube";



function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

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

    const opts = {
        height: "512",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };

      const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
        }
      };
    


    return ( <div className="row">
        <h2 className="row_title">{title}</h2>
        <div className="row_posters">
            {movies.map(movie =>(

                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && 
                (
                    <img onClick={() => handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.name}></img>
                )
                
            ))}
        </div>
        <div className="container-fluid">
         {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
         </div>
        </div>

    );
}

export default Row;
