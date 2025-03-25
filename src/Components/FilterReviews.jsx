import React, {useState }  from "react";
import '../assets/css/FilterReviews.css';

function FilterReviews({review, onClickSortOption}) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleSortMenu = () => {
        setShowMenu(!showMenu);
    };

    function handleSortOptionClicked(order){
        setShowMenu(false);
        const sortedReviews = [...review].sort((a, b) =>
            order ? b.stars - a.stars : a.stars - b.stars
        );
        onClickSortOption(sortedReviews);
    }

    function handleSortButtonClick(e){
      e.preventDefault();
      toggleSortMenu();
    };
    
    return (
        <div className="sort-card">
          <h2 className="reviews-title">
          Diner's Paradise: A Symphony of Reviews to Tempt Your Taste Buds
          </h2>
          <form className="sort-holder">
            <button
              className="sort-button"
              onClick={handleSortButtonClick}
            >
              <i className="gg-sort-az"></i>
              <h3 className="sort-button-title">Sort</h3>
            </button>
            {showMenu && (
              <div className="sort-menu">
                <ul className="sort-item">

                  <li className="sort-link" onClick={() => handleSortOptionClicked(false)}>
                    Rating - Low to High <i className="gg-arrow-up"></i>
                  </li>

                  <li className="sort-link" onClick={() => handleSortOptionClicked(true)}>
                    Rating - High to Low <i className="gg-arrow-down"></i>
                  </li>
                  
                </ul>
              </div>
            )}
          </form>
        </div>
      );
    };


export default FilterReviews;