import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({id,year, title, summary, poster,genres}) {
    return (
        <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <Link to = {{
                 // eslint-disable-next-line no-template-curly-in-string
                 pathname :`/movie/${id}`,
                 state :{ 
                     id,
                     year,
                     title,
                     poster,
                     summary,
                     genres
                 }}
            } className="movie__title">{title}</Link>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
            {genres.map((genre,index) =>
                <li key={index} className="genre">{genre}</li>
            )}
                </ul>
            <p className ="movie__summary">{summary.slice(0,180)}...</p>
          
        </div>
        </div>
    )    
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;