export interface Program {
    description: string,
    programcategory: {
        id: number,
        name: string
    },
    broadcastinfo: string,
    email: string,
    phone: string,
    programurl: string,
    programslug: string,
    programimage: string,
    programimagetemplate: string,
    programimagewide: string,
    programimagetemplatewide: string,
    socialimage: string,
    socialimagetemplate: string,
    socialmediaplatforms: [
        {
            platform: string,
            platformurl: string
        },
        {
            platform: string,
            platformurl: string
        }
    ],
    channel: {
        id: number,
        name: string
    },
    archived: boolean,
    hasondemand: boolean,
    haspod: boolean,
    responsibleeditor: string,
    id: number,
    name: string
}

export default Program