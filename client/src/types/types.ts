export interface IProduct{
    imgSetPath: string;
    title: string;
    price: number;
    
}

export interface IOption{
    id: number;
    name?: string;
    year?: string;
    count?: string;
    color?: string;
    time?: string;
}

export interface ISeason{
    id: number;
    year: string;
}