import { useState } from "react";
import "./RadioNavbar.scss";
import { Link, useNavigate } from "react-router-dom";

export function RadioNavbar() {
    const [value, setValue] = useState<string>("");
    const [toggle, setToggle] = useState<boolean>(false);
    const navigate = useNavigate();
    function search(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter") {
            navigate(`/search/${value}`);
        }
    }
    return (
        <>
            <nav className="RadioNavbar">
                {!toggle && (
                    <>
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
                    </>
                )}

                {toggle && (
                    <input
                        autoFocus
                        onKeyUp={search}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        className="search"
                        type="text"
                        name="navbar-search"
                        id="RadioNavbarSearch"
                        placeholder="Search..."
                    />
                )}
                <img onClick={() => setToggle(!toggle)} src={!toggle ? "/search.svg" : "/close.svg"} alt="Search icon" className="search-icon" />
            </nav>
        </>
    );
}

export default RadioNavbar;
