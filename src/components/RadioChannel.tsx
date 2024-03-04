import { Link } from "react-router-dom";
import "../scss/common.scss";
import Channel from "./interfaces/Channel";

export function RadioChannel({ c }: { c: Channel }) {
    return (
        <>
            <section key={c.id} className="box">
                <div className="head">
                    <img src={c.image} alt="Channel image" className="image" />
                    <h3 className="name">{c.name}</h3>
                </div>
                <p className="tagline">{c.tagline}</p>
                <div className="row">
                    <Link className="btn text-bold" to={`/programs/${c.id}`}>
                        Programs
                    </Link>
                    <Link className="btn text-bold" to={`/schedule/${c.id}`}>
                        Schedule
                    </Link>
                </div>
            </section>
        </>
    );
}

export default RadioChannel;
