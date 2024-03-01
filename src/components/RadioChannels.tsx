import { useEffect, useState } from "react";
import "../scss/common.scss";

import Channel from "./interfaces/Channel";
import { getAllChannels } from "./RadioCore";
import { Link } from "react-router-dom";
import RadioLoader from "./RadioLoader";

export function RadioChannels() {
    const [channels, setChannels] = useState<Channel[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        getAllChannels().then((data) => {setChannels(data); setLoading(false);});
    }, []);

    return (
        <>
            {loading && (<RadioLoader />)}
            <main className="list">
                <h2 className="header text-bold">Available channels</h2>
                {channels.map((c) => (
                    <section key={c.id} className="channel">
                        <div className="head">
                            <img src={c.image} alt="Channel image" className="image" />
                            <h3 className="name">{c.name}</h3>
                        </div>
                        <p className="tagline">{c.tagline}</p>
                        <Link className="btn text-bold" to={`/programs/${c.id}`}>Programs</Link>
                    </section>
                ))}
            </main>
        </>
    );
}

export default RadioChannels;
