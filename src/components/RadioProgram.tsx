import { Link } from "react-router-dom";
import "../scss/common.scss";
import Program from "./interfaces/Program";
import { FavoritesContext } from "../App";
import { useContext } from "react";

export function RadioProgram({ p }: { p: Program }) {
    const { favorites, setAndStoreFavorites } = useContext(FavoritesContext);

    return (
        <>
            <section key={p.id} className="box">
                <div className="head">
                    <img src={p.programimage || "/logo.svg"} alt="Channel image" className="image" />
                    <h3 className="name">{p.name}</h3>
                </div>
                <p className="broadcast">{p.broadcastinfo}</p>
                <p className="tagline">{p.description}</p>
                <div className="row">
                    <button
                        type="button"
                        className={favorites.includes(p.id) ? "btn text-bold favorite" : "btn text-bold"}
                        onClick={() => {
                            if (favorites.includes(p.id)) {
                                const update = [...favorites].filter((v) => v !== p.id);
                                setAndStoreFavorites(update);
                            } else {
                                const update = [...favorites];
                                update.push(p.id);
                                setAndStoreFavorites(update);
                            }
                        }}
                    >
                        {favorites.includes(p.id) ? "Unfavorite" : "Favorite"}
                    </button>
                    <Link className="btn text-bold" to={`/view/${p.id}`}>
                        View
                    </Link>
                </div>
            </section>
        </>
    );
}

export default RadioProgram;
