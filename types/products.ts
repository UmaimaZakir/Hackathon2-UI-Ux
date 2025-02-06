// import { Image } from "sanity";



export interface Product{
    length: number;
    _id :string;
    title: string
    _type :"product";
    productImage? :{
        asset :{
            _ref : string;
            _type :"image";
        }
    };
    price: number;
    description? : string;

    slug: {
        _type : "slug"
        current: string;
      }
      stocklevel : number;
}