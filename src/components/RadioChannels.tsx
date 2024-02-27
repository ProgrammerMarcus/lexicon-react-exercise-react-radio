import "./RadioChannels.scss";

import { getChannels } from "./RadioCore"

export function RadioChannels() {
    getChannels()
    return (
        <>
            <main className="RadioChannels">
                <h2 className="header">Available channels</h2>
            </main>
        </>
    );
}

export default RadioChannels;
