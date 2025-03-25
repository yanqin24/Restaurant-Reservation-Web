import React, { useState } from "react";
import "../assets/css/ReserveDish.css";
import dishData from "../Data/dish.json";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "./Modal";

function ReserveDish({ onNav, theme, toggleTheme, handlePayment }) {
  const [selectedDish, setSelectedDish] = useState(null); 

  const list = dishData.map((dish) => {
    return (
      <li className="list" key={dish.dishId}>
        <div className="card">
          <h2 className="card-name">{dish.spot}</h2>
          <img className="card-image" src={dish.img} alt={dish.alt} />
          <span className="description">{dish.description}</span>
          <span className="price">Price: {dish.price}</span>
          <div className="card-button">
            <button
              className="book-button"
              onClick={() => setSelectedDish(dish)}
              aria-label={`Reserve ${dish.spot}`}
            >
              Reserve This for Me
            </button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <>
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme} />
      <div className="packages">
        <div className="heading-area">
          <h2 className="page-title">Reserve Dish</h2>
        </div>
        <ul className="package-list">{list}</ul>
      </div>
      <Footer />

      {selectedDish && (
        <Modal
          selectedDish={selectedDish}
          handlePayment={(total) => console.log("Total payment:", total)}
          onClose={() => setSelectedDish(null)} 
        />
      )}
    </>
  );
}

export default ReserveDish;
