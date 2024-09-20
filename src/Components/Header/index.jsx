import React, { useEffect, useState } from 'react'
import MovieList from '../MovieList';
import { Link } from 'react-router-dom';

const api_key = "9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const api_url = `${main_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
const searchUrl = `${main_url}/search/movie?api_key=${api_key}`;

function Header() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    const nav = [
        { id: 1, name: "Home" },
        { id: 2, name: "Movies" },
        { id: 3, name: "Series" },
        { id: 4, name: "Trending" },
        { id: 5, name: "Categories" },
    ]


    useEffect(() => {
        fetchMovies(api_url);
    }, []);

    const fetchMovies = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm) {
            fetchMovies(`${searchUrl}&query=${searchTerm}`);
            setSearchTerm("");
        }
    };

    return (
        <div>
            <header className="flex justify-between items-center w-full fixed p-[20px]">
                <div className="flex justify-center items-center">
                    <div className="mr-[30px]">
                        <a href="" className="text">STREAM </a><span className="text-[30px] text-[#c22a2a] font-extrabold">X</span>
                    </div>
                    <nav>
                        <ul className="flex justify-center items-center gap-[30px]">
                            {
                                nav.map((movie) => {
                                    return (
                                        <li key={movie.id}>
                                            <Link to="/" className="text-[18px] text-gray-light">{movie.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-center items-center gap-[9px]">
                    <form action="" className='relative ' onSubmit={handleSearch}>
                        <input
                            type="text"
                            value={searchTerm}
                            placeholder='Search Movies,Series...'
                            className="border rounded-2xl py-[10px] pl-[14px] pr-[100px] bg-[#ffffff00] text-[white]"
                            onChange={(e) => setSearchTerm(e.target.value)} />
                        <div className="absolute top-[14px] right-[10px] text-gray cursor-pointer">
                            <ion-icon name="search-outline"></ion-icon>
                        </div>
                    </form>
                    <div className="w-[39px] h-[39px]">
                        <img src="https://user-images.githubusercontent.com/11250/39013954-f5091c3a-43e6-11e8-9cac-37cf8e8c8e4e.jpg" alt="" className="rounded-[50%] w-full h-full object-cover" />
                    </div>
                </div>
            </header>
            <MovieList movies={movies} />
        </div>
    )
}

export default Header