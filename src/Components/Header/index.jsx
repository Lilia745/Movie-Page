import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import MovieList from "../MovieList"
import Footer from "../Footer";
import Button from '../Button';
const api_key = "9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const api_url = `${main_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
const searchUrl = `${main_url}/search/movie?api_key=${api_key}`;

function Header() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const location = useLocation()


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
            <header className="flex justify-between items-center w-full fixed p-[20px] z-[111] bg-[rgba(0,0,0,0.26)]">
                <div className="flex justify-center items-center">
                    <div className="mr-[30px]">
                        <Link to="/" className="text">STREAM</Link><span className="text-[30px] text-[#c22a2a] font-extrabold">X</span>
                    </div>
                    <nav>
                        <ul className="flex justify-center items-center gap-[30px]">
                            <li className="text-gray-light text-[18px]">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-gray-light text-[18px]">
                                <Link to="/comedy">Comedy</Link>
                            </li>
                            <li className="text-gray-light text-[18px]">
                                <Link to="/drama">Drama</Link>
                            </li>
                            <li className="text-gray-light text-[18px]">
                                <Link to="/family">Family</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {
                    location.pathname === "/" && (
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
                    )
                }
            </header>
            <div className="img">
                <div className="w-full h-[100vh] bg-[#00000071] flex justify-center items-center">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="title">SPIDER-MAN</h1>
                        <h4 className="home-text ">No Way Home </h4>
                        <p className="text-gray-light">
                            When a spell goes wrong, dangerous foes from other
                        </p>
                        <p className="text-gray-light">
                            worlds start to appear, forcing Peter to discover what it
                        </p>
                        <p className="text-gray-light">truly means to be Spider-Man.</p>
                        <div className="mt-[30px] flex justify-center items-center">
                            <Button text="Watch Now" />
                            <Button
                                text="More Info"
                                bg="rgba(255, 255, 255, 0.1)"
                                color="white"
                            />
                        </div>
                    </div>
                </div>
                <MovieList movies={movies} text="Latest & Trending " />
                <Footer />
            </div>
        </div>
    )
}

export default Header