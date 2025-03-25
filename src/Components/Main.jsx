import Home from "./Home";
import ReserveDish from "./ReserveDish";
import Reviews from "./Reviews";
import Membership from "./Membership";
import FoodMenu from"./FoodMenu";



function Main({ page, onNav, theme, toggleTheme, payment, handlePayment }) {
  return (
    <main className="main">
      {page==='Home' && <Home onNav={onNav} page={page}/>}
      {page==='ReserveDish' && <ReserveDish onNav={onNav} theme={theme} toggleTheme={toggleTheme} handlePayment={handlePayment} payment={payment}/>}
      {page === 'Reviews' && <Reviews onNav={onNav} theme={theme} toggleTheme={toggleTheme} />}
      {page === 'Membership' && <Membership onNav={onNav} theme={theme} toggleTheme={toggleTheme} />}
      {page === 'FoodMenu' && <FoodMenu onNav={onNav} theme={theme} toggleTheme={toggleTheme} />}
      
    </main>
  )
}
export default Main;