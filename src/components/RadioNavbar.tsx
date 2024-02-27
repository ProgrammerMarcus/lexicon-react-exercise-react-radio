import "./RadioNavbar.scss";
import { Link } from "react-router-dom";

export function RadioNavbar() {
    return (
        <>
            <nav className="RadioNavbar">
                <h1 className="logo"><img src="logo.svg" alt="RADIO"/></h1>
                <Link to="/" className="link">CHANNELS</Link>
                <Link to="/categories" className="link">CATEGORIES</Link>
            </nav>
        </>
    );
}

export default RadioNavbar;
