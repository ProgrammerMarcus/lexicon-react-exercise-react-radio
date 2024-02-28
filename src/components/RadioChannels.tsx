import { useEffect, useState } from "react";
import "./RadioChannels.scss";

import Channel from "./interfaces/Channel";
import { getAllChannels } from "./RadioCore";

export function RadioChannels() {
    const [channels, setChannels] = useState<Channel[]>([]);

    useEffect(() => {
        getAllChannels().then((data) => setChannels(data));
    }, []);

    return (
        <>
            <main className="RadioChannels">
                <h2 className="header">Available channels</h2>
                {channels.map((c) => <div key={c.id}>{c.name}</div>)}
            </main>
        </>
    );
}

export default RadioChannels;
