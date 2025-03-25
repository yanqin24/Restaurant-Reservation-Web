import '../assets/css/Home.css';

function Home({ onNav }) {
    return (
        <div className="main-section" role="main" aria-label="Homepage Main Section">
            <div className="landing-section">
                <div className="section-description-container">
                    <h1 className="section-description">
                        Savor the Flavors of Culinary Excellence: Your Gateway to Unforgettable Dining Experiences at Yan Restraunt
                    </h1>
                </div>
                <button
                    className="explore-button"
                    onClick={onNav}
                    data-page="ReserveDish"
                    aria-label="Explore delicious dishes and reserve now"
                >
                    Explore Delicious Now
                </button>
            </div>
        </div>
    );
}

export default Home;