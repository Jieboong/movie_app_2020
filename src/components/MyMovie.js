import React from "react";
import './MyMovie.css';


export default function MyMovie({id,title,poster}) {
    return (
        <div>
            <img src = {poster} alt = {title} />
            <div>
                {title}
            </div>
        </div>    
    )
}