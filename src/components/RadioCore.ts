export async function getAllProgramsChannelJSON(id: string) {
    const response = await fetch(`http://api.sr.se/api/v2/programs/index?channelid=${id}&&format=json&&pagination=false`);
    const data = await response.json();
    return data;
}

export async function getAllAiringProgramsChannelJSON(id: string) {
    const response = await fetch(`https://api.sr.se/api/v2/programs/index?channelid=${id}&&format=json&&pagination=false&&isarchived=false`);
    const data = await response.json();
    return data;
}

export async function getAllChannelsJSON() {
    const response = await fetch("https://api.sr.se/api/v2/channels?format=json&&pagination=false");
    const data = await response.json();
    return data;
}

export async function getProgramsOnDateOnChannelJSON(id: string, date: string) {
    const response = await fetch(`https://api.sr.se/api/v2/scheduledepisodes?channelid=${id}&date=${date}&format=json&&pagination=false`);
    const data = await response.json();
    return data;
}

export async function getAllCategoriesJSON() {
    const response = await fetch(`https://api.sr.se/api/v2/programcategories?pagination=false&&format=json`);
    const data = await response.json();
    return data;
}

export function stringToDate(date: string) {
    const find = date.match(/\d+/);
    if (find !== null) {
        const day = new Intl.DateTimeFormat("sv-SE", {
            dateStyle: "full",
            timeStyle: "long",
        }).format(new Date(Number(find[0])));
        return day;
    } else {
        return "Incorrect date format";
    }
}