import * as React from 'react';
import clsx from 'clsx';
import { Theme, styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import {
    AutoSizer,
    Column,
    Table,
    // TableCellRenderer,
    // TableHeaderProps,
} from 'react-virtualized';
import { ColumnData, Row, MuiVirtualizedTableProps, Data, Sample } from './virtualizedTableInterfaces';
import { classes, styles } from './styles';
// import { Scrollbars } from 'react-custom-scrollbars';
// import Scrollbar from './scrollbar';

class MuiVirtualizedTable extends React.PureComponent<MuiVirtualizedTableProps> {
    static defaultProps = {
        headerHeight: 48,
        rowHeight: 48,
    };

    getRowClassName = ({ index }: Row) => {
        const { onRowClick } = this.props;

        return clsx(classes.tableRow, classes.flexContainer, {
            [classes.tableRowHover]: index !== -1 && onRowClick != null,
        });
    };

    cellRenderer = ({ cellData, columnIndex }: { cellData: any; columnIndex: any }) => {
        const { columns, rowHeight, onRowClick } = this.props;
        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, {
                    [classes.noClick]: onRowClick == null,
                })}
                variant="body"
                style={{ height: rowHeight }}
                align={
                    (columnIndex != null && columns[columnIndex].numeric) || false
                        ? 'right'
                        : 'left'
                }
            >
                {cellData}
            </TableCell>
        );
    };

    headerRenderer = ({
        label,
        columnIndex,
    }//: TableHeaderProps & { columnIndex: number }) => {
        : { label: any; columnIndex: number }) => {
        const { headerHeight, columns } = this.props;

        return (
            <TableCell
                component="div"
                className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
                variant="head"
                style={{ height: headerHeight }}
                align={columns[columnIndex].numeric || false ? 'right' : 'left'}
            >
                <span>{label}</span>
            </TableCell>
        );
    };

    render() {
        const { columns, rowHeight, headerHeight, ...tableProps } = this.props;
        return (
            <AutoSizer>
                {({ height, width }: { height: any; width: any }) => (
                    <Table
                        height={height}
                        width={width}
                        rowHeight={rowHeight!}
                        gridStyle={{
                            direction: 'inherit',
                        }}
                        headerHeight={headerHeight!}
                        {...tableProps}
                        rowClassName={this.getRowClassName}
                    >
                        {columns.map(({ dataKey, ...other }, index) => {
                            return (
                                <Column
                                    key={dataKey}
                                    headerRenderer={(headerProps: any) =>
                                        this.headerRenderer({
                                            ...headerProps,
                                            columnIndex: index,
                                        })
                                    }
                                    //   style={{ fontSize: '13px' }}
                                    className={classes.flexContainer}
                                    cellRenderer={this.cellRenderer}
                                    dataKey={dataKey}
                                    {...other}
                                />
                            );
                        })}
                    </Table>
                )}
            </AutoSizer>
        );
    }
}

const VirtualizedTable = styled(MuiVirtualizedTable)(styles);

// ---



const sample: readonly Sample[] = [
    ['0.017', '2,900.95 | 2,900.95', '0.016'],
    ['0.017', '2,900.95 | 2,900.95', '0.016'],
    ['0.017', '2,900.95 | 2,900.95', '0.016'],
    ['0.017', '2,900.95 | 2,900.95', '0.016'],
    ['0.017', '2,900.95 | 2,900.95', '0.016'],
    ['0.017', '2,900.95 | 2,900.95', '0.016'],
    ['0.017', '2,900.95 | 2,900.95', '0.016']
];

function createData(
    id: number,
    size: string,
    price: string,
    priceAfter: string
): Data {
    return { id, size, price, priceAfter };
}

const rows: Data[] = [];

for (let i = 0; i < 200; i += 1) {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    rows.push(createData(i, ...randomSelection));
}

export default function ReactVirtualizedTable() {
    return (
        <Paper id="virtualizedTable" style={{ height: 400, width: '100%', backgroundColor: '#170010ff' }}>
            <VirtualizedTable
                rowCount={rows.length}
                rowGetter={({ index }) => rows[index]}
                columns={[
                    {
                        // width: 200,
                        label: 'Size (ETH)',
                        dataKey: 'size',
                    },
                    {
                        // width: 120,
                        label: 'Price (USDC)',
                        dataKey: 'price',
                        // numeric: true,
                    },
                    {
                        // width: 120,
                        label: 'Size (ETH)',
                        dataKey: 'priceAfter',
                        // numeric: true,
                    }
                ]}
            />
        </Paper>
    );
}

// import clsx from 'clsx';
// import Immutable from 'immutable';
// import PropTypes from 'prop-types';