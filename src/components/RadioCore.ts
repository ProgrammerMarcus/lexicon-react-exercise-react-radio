import Program from "./interfaces/Program";

export async function getAllProgramsChannelJSON(id: number) {
    const response = await fetch(`http://api.sr.se/api/v2/programs/index?channelid=${id}&&format=json&&pagination=false`);
    const data = await response.json();
    return data;
}

export async function getAllAiringProgramsChannelJSON(id: number) {
    const response = await fetch(`https://api.sr.se/api/v2/programs/index?channelid=${id}&&format=json&&pagination=false&&isarchived=false`);
    const data = await response.json();
    return data;
}

export async function getAllAiringProgramsCategoryJSON(id: number) {
    const response = await fetch(`https://api.sr.se/api/v2/programs/index?programcategoryid=${id}&&format=json&&pagination=false&&isarchived=false`);
    const data = await response.json();
    return data;
}

export async function getAllChannelsJSON() {
    const response = await fetch("https://api.sr.se/api/v2/channels?format=json&&pagination=false");
    const data = await response.json();
    return data;
}

export async function getProgramsOnDateOnChannelJSON(id: number, date: string) {
    const response = await fetch(`https://api.sr.se/api/v2/scheduledepisodes?channelid=${id}&date=${date}&format=json&&pagination=false`);
    const data = await response.json();
    return data;
}

export async function getAllCategoriesJSON() {
    const response = await fetch(`https://api.sr.se/api/v2/programcategories?pagination=false&&format=json`);
    const data = await response.json();
    return data;
}

export async function getProgramsSearch(search: string) {
    const response = await fetch(`https://api.sr.se/api/v2/programs/index?format=json&&pagination=false&&isarchived=false&&filter=%22name%22&&filtervalue=${search}`);
    const data = await response.json();
    return data;
}

export async function getProgram(id: number) {
    const response = await fetch(`https://api.sr.se/api/v2/programs/${id}?format=JSON`);
    const data = await response.json();
    return data;
}

export async function getSpecificPrograms(list: number[]) {
    const programs: Program[] = []
    for (const id of list) {
        getProgram(id).then(data => programs.push(data.program))
    }
    return programs;
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