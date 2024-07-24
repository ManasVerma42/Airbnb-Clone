import React from "react";

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }


    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-image" src={`./img/${props.coverImg}`} alt="img1"/>
            <div className="card-stats">
                <img className="card-star" src="./img/star.png" alt="star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold card-price">From ${props.price} /</span>person</p>
        </div>
    );
  
}