interface ColumnData {
    dataKey: string;
    label: string;
    numeric?: boolean;
    width?: number;
}

interface Row {
    index: number;
}

interface MuiVirtualizedTableProps {
    columns: readonly ColumnData[];
    headerHeight?: number;
    onRowClick?: () => void;
    rowCount: number;
    rowGetter: (row: Row) => Data;
    rowHeight?: number;
}

interface Data {
    price: string;
    size: string;
    priceAfter: string;
    id: number;
}
type Sample = [string, string, string];

export type { ColumnData, Row, MuiVirtualizedTableProps, Data, Sample }