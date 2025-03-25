import '../assets/css/SkipLink.css';

function Skiplink({onNav}){
    return(
            <a 
            href={`#ReserveDish`}
            onClick={onNav}
            data-page={'ReserveDish'}
            className="Skiplink"
            aria-label="Skip to main content: Reserve Dish section"
        >
            Skip to main content
        </a>  
    );
}
export default Skiplink;