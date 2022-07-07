export interface IfilterAreaOptions {
    country: {
        values: string[];
        pick: string;
    };
    color: {
        values: string[];
        pick: string;
    };
    brand: {
        values: string[];
        pick: string;
    };
    discount: {
        values: [boolean];
        pick: string;
    };
    date: {
        values: string[];
        pick: string;
    };
}
