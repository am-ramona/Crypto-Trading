interface Column {
    id: 'price' | 'size' | 'time' | 'sizeAfter';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

interface recentTradesData {
    price: string;
    size: string;
    time: string;
    [key: string]: any;
}

interface liquidityData {
    size: string;
    price: string;
    sizeAfter: string;
    [key: string]: any;
}

export type { Column, recentTradesData, liquidityData }