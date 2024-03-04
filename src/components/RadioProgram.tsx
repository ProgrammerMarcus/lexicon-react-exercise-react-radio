import { Link } from "react-router-dom";
import "../scss/common.scss";
import Program from "./interfaces/Program";

export function RadioPrograms({ p }: { p: Program }) {
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
                    <Link className="btn text-bold" to={`/view/${p.id}`}>
                        Favorite
                    </Link>
                    <Link className="btn text-bold" to={`/view/${p.id}`}>
                        View
                    </Link>
                </div>
            </section>
        </>
    );
}

export default RadioPrograms;
