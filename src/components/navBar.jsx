import { Link } from "react-router-dom";
import './navBar.css';

function NavBar() {
    return ( 
        <div className='App-header'>
            <div className="logo">
                <h1>Best<span>Purch</span></h1>
            </div>
            <div className="rightCont">
                <div className="navLinks" >
                    <Link to="/" className="link">HOME </Link>
                    <Link to="/about" className="link">ABOUT </Link>
                    <Link to="/blogs" className="link">BLOGS</Link>
                </div>
                <button className="loginButton">LogIn</button>
            </div>
        </div>
     );
}

export default NavBar;