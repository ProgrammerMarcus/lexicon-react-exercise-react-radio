import Channel from "./interfaces/Channel";

function channelsToObjects(channelElements: NodeListOf<Element>) {
    const channelObjects: Channel[] = [];
    channelElements.forEach((c) => {
        channelObjects.push({
            id: c.getAttribute("id") || "missing id",
            name: c.getAttribute("name") || "missing name",
            image: c.querySelector("image")?.textContent || "missing image",
            imageTemplate: c.querySelector("imagetemplate")?.textContent || "missing image template",
            color: c.querySelector("color")?.textContent || "missing color",
            tagline: c.querySelector("tagline")?.textContent || "missing tagline",
            siteUrl: c.querySelector("siteurl")?.textContent || "missing site url",
            liveAudioId: c.querySelector("liveaudio")?.getAttribute("id") || "missing audio id",
            liveAudioUrl: c.querySelector("liveaudio url")?.textContent || "missing live audio url",
            liveAudioStatKey: c.querySelector("liveaudio statkey")?.textContent || "missing audio stat key",
            scheduleUrl: c.querySelector("scheduleurl")?.textContent || "missing schedule url",
            channelType: c.querySelector("channeltype")?.textContent || "missing channel type",
            xmlTVid: c.querySelector("xmltvid")?.textContent || "missing xml TV id?",
        });
    });
    return channelObjects;
}

// base url "https://api.sr.se/api/v2/channels/"
export async function getChannels(url: string) {
    const parser = new DOMParser();
    const response = await fetch(url);
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
    return object
}

export async function getAllChannels() {
    const all: Channel[] = []
    let current = getChannels("https://api.sr.se/api/v2/channels/")
    current.then(o => {o.channels.forEach(c => all.push(c))})
    while ((await current).nextPage) {
        current = getChannels((await current).nextPage || "oh noes") // 
        current.then(o => {o.channels.forEach(c => all.push(c))})
    }
    return all
}
