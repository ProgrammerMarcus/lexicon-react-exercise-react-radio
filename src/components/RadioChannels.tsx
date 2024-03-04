import { useEffect, useState } from "react";
import "../scss/common.scss";

import Channel from "./interfaces/Channel";
import { getAllChannelsJSON } from "./RadioCore";
import RadioLoader from "./RadioLoader";
import RadioChannel from "./RadioChannel";

export function RadioChannels() {
    const [channels, setChannels] = useState<Channel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getAllChannelsJSON().then((data) => {
            setChannels(data.channels);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading && <RadioLoader />}
            <main className="list">
                <h2 className="header text-bold">Available channels</h2>
                {channels.map((c) => (
                    <RadioChannel key={c.id} c={c} />
                ))}
            </main>
        </>
    );
}

export default RadioChannels;
