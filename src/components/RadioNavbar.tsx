import { useState } from "react";
import "./RadioNavbar.scss";
import { Link, useNavigate } from "react-router-dom";

export function RadioNavbar() {
    const [value, setValue] = useState<string>("");
    const navigate = useNavigate();
    function search(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter") {
            navigate(`/search/${value}`);
        }
    }
    return (
        <>
            <nav className="RadioNavbar">
                <h1 className="logo">
                    <img src="/logo.svg" alt="RADIO" />
                </h1>
                <Link to="/" className="link">
                    CHANNELS
                </Link>
                <Link to="/categories" className="link">
                    CATEGORIES
                </Link>
                <Link to="/favorites" className="link">
                    FAVORITES
                </Link>
                <input onKeyUp={search} onChange={(e) => setValue(e.target.value)} value={value} className="search" type="text" name="navbar-search" id="RadioNavbarSearch" placeholder="Search..." />
            </nav>
        </>
    );
}

export default RadioNavbar;
