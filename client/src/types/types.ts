
export interface IOption{
    id: string;
    name?: string;
    year?: string;
    count?: string;
    color?: string;
    time?: string;
}

export interface IParagraph{
    header: string;
    content: string;
}
export interface ITent{
    id?: number;
    article: string;
    description: string;
    idCountry: string;
    idGarantee: string;
    idMaterialArc: string;
    idMaterialBottom: string;
    idPlacecount: string;
    idSeason: string;
    idColor: string;
    manufacturer: string;
    name: string;
    paragraphs: IParagraph[];
    price: number;
    waterproofBot: number;
    waterproofAwn: number;
    photoUrls: string[];
}

export interface ICard{
    id: number;
    name: string;
    price: number;
    imagePath: string;
}