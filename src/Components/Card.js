import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img className="card-image" src="../../img/img1.png" alt="img1"/>
            <div className="card-stats">
                <img className="card-star" src="../../img/star.png" alt="star"/>
                <span>5.0</span>
                <span className="gray">(6) </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136 /</span>person</p>
        
        </div>
    );
}