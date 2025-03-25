import React, { useState } from "react";
import menu from "../Data/menu.json";
import "../assets/css/FoodMenu.css";
import Footer from "./Footer";
import Header from "./Header";

const FoodMenu = ({ onNav, theme, toggleTheme }) => {
  const [activePanel, setActivePanel] = useState(null);

  const togglePanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div className="food-menu-wrapper">
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme} />
      <main className="food-menu-container">
        {Object.entries(menu).map(([category, items]) => (
          <div
            key={category}
            className="food-menu-panel"
            aria-labelledby={`${category}-header`}
          >
            <button
              id={`${category}-header`}
              className="food-menu-header"
              onClick={() => togglePanel(category)}
              aria-label={`Toggle ${category} menu`}
              aria-expanded={activePanel === category}
            >
              {category}
              <span className="expand-icon">
                {activePanel === category ? "-" : "+"}
              </span>
            </button>
            {activePanel === category && (
              <div
                className="food-menu-content"
                aria-label={`Items in the ${category} category`}
              >
                {items.map((item, index) => (
                  <div key={index} className="food-menu-item">
                    <img
                      src={item.img}
                      alt={`Image of ${item.name}`}
                      className="food-menu-img"
                    />
                    <h3 className="food-menu-name">{item.name}</h3>
                    <p className="food-menu-price">{item.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  
  );
};

export default FoodMenu;
