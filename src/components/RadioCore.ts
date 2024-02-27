const parser = new DOMParser();
export async function getChannels() {
    const response = await fetch("https://api.sr.se/api/v2/channels/");
    const text = await response.text()
    const parse = parser.parseFromString(text, "application/xml");
    console.log(parse)
}