import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={`./img/${props.img}`} alt="img1"/>
            <div className="card-stats">
                <img className="card-star" src="./img/star.png" alt="star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold">From ${props.price} /</span>person</p>
        
        </div>
    );
  
}