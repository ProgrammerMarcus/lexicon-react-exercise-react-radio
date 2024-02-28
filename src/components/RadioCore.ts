import Channel from "./interfaces/Channel";

function channelsToObjects(channelElements: NodeListOf<Element>) {
    const channelObjects: Channel[] = [];
    channelElements.forEach((c) => {
        channelObjects.push({
            id: c.getAttribute("id") ? c.getAttribute("id") : "Missing ID",
            name: c.getAttribute("name") ? c.getAttribute("name") : "Unknown",
            image: c.querySelector("image")?.textContent,
            imageTemplate: c.querySelector("imagetemplate")?.textContent,
            color: c.querySelector("color")?.textContent,
            tagline: c.querySelector("tagline")?.textContent,
            siteUrl: c.querySelector("siteurl")?.textContent,
            liveAudioId: c.querySelector("liveaudio")?.getAttribute("id"),
            liveAudioUrl: c.querySelector("liveaudio url")?.textContent,
            liveAudioStatKey: c.querySelector("liveaudio statkey")?.textContent,
            scheduleUrl: c.querySelector("scheduleurl")?.textContent,
            channelType: c.querySelector("channeltype")?.textContent,
            xmlTVid: c.querySelector("xmltvid")?.textContent,
        });
    });
    return channelObjects;
}

export async function getChannels() {
    const parser = new DOMParser();
    const response = await fetch("https://api.sr.se/api/v2/channels/");
    const text = await response.text();
    const parse = parser.parseFromString(text, "application/xml");
    const object = {
        page: parse.querySelector("pagination page")?.textContent,
        size: parse.querySelector("pagination size")?.textContent,
        totalHits: parse.querySelector("pagination totalhits")?.textContent,
        totalPages: parse.querySelector("pagination totalpages")?.textContent,
        nextPage: parse.querySelector("pagination nextpage")?.textContent,
        channels: channelsToObjects(parse.querySelectorAll("channels channel")),
    };
    console.log(parse, object);
}
