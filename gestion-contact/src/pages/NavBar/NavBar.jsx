import { Link } from "react-router-dom"
import './NavBar.css'
function NavBar(){
return(
    <>
    <header>
        <ul className="Nav_List">
            <Link to="/Formulaire">
                <button><a id="bot" href="#"> Formulaire </a></button>
            </Link>
            <Link to="/Contact">
                <button><a id="bot" href="#"> Contact </a></button>
            </Link>
        </ul>
    </header>
    </>
)
}
export default NavBar 