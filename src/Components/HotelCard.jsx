import React from "react";
import "./HotelCard.css";
import { FaStar } from "react-icons/fa";


const HotelCard = ({ image, name, location, price, rating, reviews }) => {
  return (
    <div className="hotel-card">
      <img src={image} alt={name} className="hotel-image" />
      <div className="hotel-info">
        <h3>{name}</h3>
        <p>{location}</p>
        <div className="hotel-rating">
          <FaStar color="#FFD700" /> {rating} ({reviews} reviews)
        </div>
        <p className="hotel-price">${price}/night</p>
      </div>
    </div>
  );
};

export default HotelCard;