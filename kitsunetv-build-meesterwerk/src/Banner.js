import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from "./axios";
import requests from "./Requests";

function Banner() {
    const [movies, setMovies] = useState([]);

    const [currentMovie, setCurrentMovie] = useState(0)
    // eslint-disable-next-line
    function selectMovie(index) {
        setCurrentMovie(index)
    }


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            console.log(request);
            setCurrentMovie(request.data.results[0]);
            setMovies(request.data.results.slice(0, 3));
            return request;
        }
        fetchData();
    }, [])

    function getCurrentImageUrl() {
        return getImageUrl(currentMovie)
    }

    function getImageUrl(movie) {
        if (!movie?.backdrop_path) {
            return 'https://placekitten.com/1920/1080';
        }
        return `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;
    }


    return (
        <div className="movieFeaturedContainer">
            <header className="containerMovieImage" style={{
                backgroundImage: `url(${getCurrentImageUrl(movies[0])})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}>
                <div className="banner_contents">
                    <h1 className="banner_movietitle">
                        {currentMovie?.title || movies[currentMovie]?.name || movies[currentMovie]?.original_name}
                    </h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">Favorite list</button>
                    </div>
                </div>
            </header>
            <div className="containerMovieThumbnail">
                {movies.map(movie => (
                    <button className="button_ThumbnailMovie" onClick={() => setCurrentMovie(movie)} key={movie.id}>
                        <h3 className="thumbnailText"> {movie?.title || movies?.name || movies?.original_name}</h3>
                        <img className="thumbnailFeaturedMovie" src={getImageUrl(movie)} alt="" />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Banner
