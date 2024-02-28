import { useEffect, useState } from "react";
import "./RadioChannels.scss";

import Channel from "./interfaces/Channel";
import { getChannels } from "./RadioCore";

export function RadioChannels() {
    const [channels, setChannels] = useState<Channel[]>([]);

    useEffect(() => {
        getChannels().then((data) => setChannels(data.channels));
    }, []);

    return (
        <>
            <main className="RadioChannels">
                <h2 className="header">Available channels</h2>
                {channels.map((c) => <div>{c.name}</div>)}
            </main>
        </>
    );
}

export default RadioChannels;
