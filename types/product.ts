

export interface Product {
    _id: string;
    name: string;
    _type: "product";
    

    image: {    
        _type: "image";    
        asset: {
            _ref: string;
            _type: "reference";
        }
    };
    price: string;
    description: string;
    discountPercentage: number;
    stockLevel: number;
    category: string;
    tags: string[];
    slug: {
        _type: "slug";
        current: string;
    }
    
}