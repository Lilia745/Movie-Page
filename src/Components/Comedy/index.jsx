import React, { useEffect } from 'react'
const api_key = "9b702a6b89b0278738dab62417267c49";
const main_url = "https://api.themoviedb.org/3";
const api_url = `${main_url}/discover/movie?sort_by=popularity.desc&api_key=${api_key}`;
let ganre = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
]

function Comedy() {
    // useEffect(() => {
    //     fetch(`${main_url} + "/discover/movie?" + ${api_key} + "&with_genres=35"`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data.results);
    //         });
    // }, [])
    return (
        <div>
            Comedy
        </div>
    )
}

export default Comedy