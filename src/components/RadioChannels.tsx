import { useEffect, useState } from "react";
import "./RadioChannels.scss";

import Channel from "./interfaces/Channel";
import { getAllChannels } from "./RadioCore";
import { Link } from "react-router-dom";

export function RadioChannels() {
    const [channels, setChannels] = useState<Channel[]>([]);

    useEffect(() => {
        getAllChannels().then((data) => setChannels(data));
    }, []);

    return (
        <>
            <main className="RadioChannels">
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
