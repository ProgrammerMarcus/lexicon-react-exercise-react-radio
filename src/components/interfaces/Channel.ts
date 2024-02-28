export interface Channel {
    id: string | null,
    name: string | null,
    image: string | null | undefined,
    imageTemplate: string | null | undefined,
    color: string | null | undefined,
    tagline: string | null | undefined,
    siteUrl: string | null | undefined,
    liveAudioId: string | null | undefined,
    liveAudioUrl: string | null | undefined,
    liveAudioStatKey: string | null | undefined,
    scheduleUrl: string | null | undefined,
    channelType: string | null | undefined,
    xmlTVid: string | null | undefined, // ???
}

export default Channel