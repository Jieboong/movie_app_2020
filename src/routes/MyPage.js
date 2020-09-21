import React from "react";
import MyMovie from "../components/MyMovie";

function About() {
    let Movie = [];
    for (let i = 0 ; i < localStorage.length; i++){
        let key = localStorage.key(i);
        Movie.push(JSON.parse(localStorage.getItem(key)));
    }
    console.log(Movie);
    return <div className ="myPage">
        {Movie.map(movie=>(
            <MyMovie 
            key = {movie.id}
            id = {movie.id}
            title = {movie.title}
            poster = {movie.poster} />
        ))}
    </div>
}

export default About;