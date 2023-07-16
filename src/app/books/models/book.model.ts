import { PriceModel } from "./price.model";

export interface BookModel{
    id: number,
    title:string,
    author:string,
    pages:number,
    price:PriceModel,
}