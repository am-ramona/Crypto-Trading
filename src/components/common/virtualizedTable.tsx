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
// import { Scrollbars } from 'react-custom-scrollbars';
// import Scrollbar from './scrollbar';

const classes = {
    flexContainer: 'ReactVirtualizedDemo-flexContainer',
    tableRow: 'ReactVirtualizedDemo-tableRow',
    tableRowHover: 'ReactVirtualizedDemo-tableRowHover',
    tableCell: 'ReactVirtualizedDemo-tableCell',
    noClick: 'ReactVirtualizedDemo-noClick',
};

const styles = ({ theme }: { theme: Theme }) =>
({
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
        ...(theme.direction === 'rtl' && {
            paddingLeft: '0 !important',
        }),
        ...(theme.direction !== 'rtl' && {
            paddingRight: undefined,
        }),
    },
    [`& .${classes.flexContainer}`]: {
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        //   fontSize: '13px'
    },
    [`& .${classes.tableRow}`]: {
        cursor: 'pointer',
    },
    [`& .${classes.tableRowHover}`]: {
        '&:hover': {
            backgroundColor: theme.palette.grey[200],
        },
    },
    [`& .${classes.tableCell}`]: {
        flex: 1,
        //   fontSize: '12px'
    },
    [`& .${classes.noClick}`]: {
        cursor: 'initial',
    },
} as const);

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

interface Data {
    price: string;
    size: string;
    priceAfter: string;
    id: number;
}
type Sample = [string, string, string];

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
// import * as React from 'react';
// // import styles from './List.example.css';
// import AutoSizer from '../AutoSizer';
// import List from './List';
// import {
//   ContentBox,
//   ContentBoxHeader,
//   ContentBoxParagraph,
// } from '../demo/ContentBox';
// import {LabeledInput, InputRow} from '../demo/LabeledInput';

// export default class ListExample extends React.PureComponent {
//   static contextTypes = {
//     list: PropTypes.instanceOf(Immutable.List).isRequired,
//   };

//   constructor(props, context) {
//     super(props, context);

//     this.state = {
//       listHeight: 300,
//       listRowHeight: 50,
//       overscanRowCount: 10,
//       rowCount: context.list.size,
//       scrollToIndex: undefined,
//       showScrollingPlaceholder: false,
//       useDynamicRowHeight: false,
//     };

//     this._getRowHeight = this._getRowHeight.bind(this);
//     this._noRowsRenderer = this._noRowsRenderer.bind(this);
//     this._onRowCountChange = this._onRowCountChange.bind(this);
//     this._onScrollToRowChange = this._onScrollToRowChange.bind(this);
//     this._rowRenderer = this._rowRenderer.bind(this);
//   }

//   render() {
//     const {
//       listHeight,
//       listRowHeight,
//       overscanRowCount,
//       rowCount,
//       scrollToIndex,
//       showScrollingPlaceholder,
//       useDynamicRowHeight,
//     } = this.state;

//     return (
//       <ContentBox id="virtualizedTable">
//         <ContentBoxHeader
//           text="List"
//           sourceLink="https://github.com/bvaughn/react-virtualized/blob/master/source/List/List.example.js"
//           docsLink="https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md"
//         />

//         <ContentBoxParagraph>
//           The list below is windowed (or "virtualized") meaning that only the
//           visible rows are rendered. Adjust its configurable properties below to
//           see how it reacts.
//         </ContentBoxParagraph>

//         <ContentBoxParagraph>
//           <label className="checkboxLabel">
//             <input
//               aria-label="Use dynamic row heights?"
//               checked={useDynamicRowHeight}
//               className="checkbox"
//               type="checkbox"
//               onChange={event =>
//                 this.setState({useDynamicRowHeight: event.target.checked})
//               }
//             />
//             Use dynamic row heights?
//           </label>

//           {/* <label className={styles.checkboxLabel}> */}
//           <label className="checkboxLabel">
//             <input
//               aria-label="Show scrolling placeholder?"
//               checked={showScrollingPlaceholder}
//               className="checkbox"
//               type="checkbox"
//               onChange={event =>
//                 this.setState({
//                   showScrollingPlaceholder: event.target.checked,
//                 })
//               }
//             />
//             Show scrolling placeholder?
//           </label>
//         </ContentBoxParagraph>

//         <InputRow>
//           <LabeledInput
//             label="Num rows"
//             name="rowCount"
//             onChange={this._onRowCountChange}
//             value={rowCount}
//           />
//           <LabeledInput
//             label="Scroll to"
//             name="onScrollToRow"
//             placeholder="Index..."
//             onChange={this._onScrollToRowChange}
//             value={scrollToIndex || ''}
//           />
//           <LabeledInput
//             label="List height"
//             name="listHeight"
//             onChange={event =>
//               this.setState({
//                 listHeight: parseInt(event.target.value, 10) || 1,
//               })
//             }
//             value={listHeight}
//           />
//           <LabeledInput
//             disabled={useDynamicRowHeight}
//             label="Row height"
//             name="listRowHeight"
//             onChange={event =>
//               this.setState({
//                 listRowHeight: parseInt(event.target.value, 10) || 1,
//               })
//             }
//             value={listRowHeight}
//           />
//           <LabeledInput
//             label="Overscan"
//             name="overscanRowCount"
//             onChange={event =>
//               this.setState({
//                 overscanRowCount: parseInt(event.target.value, 10) || 0,
//               })
//             }
//             value={overscanRowCount}
//           />
//         </InputRow>

//         <div>
//           <AutoSizer disableHeight>
//             {({width}) => (
//               <List
//                 ref="List"
//                 className="List"
//                 height={listHeight}
//                 overscanRowCount={overscanRowCount}
//                 noRowsRenderer={this._noRowsRenderer}
//                 rowCount={rowCount}
//                 rowHeight={
//                   useDynamicRowHeight ? this._getRowHeight : listRowHeight
//                 }
//                 rowRenderer={this._rowRenderer}
//                 scrollToIndex={scrollToIndex}
//                 width={width}
//               />
//             )}
//           </AutoSizer>
//         </div>
//       </ContentBox>
//     );
//   }

//   _getDatum(index) {
//     const {list} = this.context;

//     return list.get(index % list.size);
//   }

//   _getRowHeight({index}) {
//     return this._getDatum(index).size;
//   }

//   _noRowsRenderer() {
//     return <div className="noRows">No rows</div>;
//   }

//   _onRowCountChange(event) {
//     const rowCount = parseInt(event.target.value, 10) || 0;

//     this.setState({rowCount});
//   }

//   _onScrollToRowChange(event) {
//     const {rowCount} = this.state;
//     let scrollToIndex = Math.min(
//       rowCount - 1,
//       parseInt(event.target.value, 10),
//     );

//     if (isNaN(scrollToIndex)) {
//       scrollToIndex = undefined;
//     }

//     this.setState({scrollToIndex});
//   }

//   _rowRenderer({index, isScrolling, key, style}) {
//     const {showScrollingPlaceholder, useDynamicRowHeight} = this.state;

//     if (showScrollingPlaceholder && isScrolling) {
//       return (
//         <div
//           className="row isScrollingPlaceholder"
//           key={key}
//           style={style}>
//           Scrolling...
//         </div>
//       );
//     }

//     const datum = this._getDatum(index);

//     let additionalContent;

//     if (useDynamicRowHeight) {
//       switch (datum.size) {
//         case 75:
//           additionalContent = <div>It is medium-sized.</div>;
//           break;
//         case 100:
//           additionalContent = (
//             <div>
//               It is large-sized.
//               <br />
//               It has a 3rd row.
//             </div>
//           );
//           break;
//       }
//     }

//     return (
//       <div className="row" key={key} style={style}>
//         <div
//           className="letter"
//           style={{
//             backgroundColor: datum.color,
//           }}>
//           {datum.name.charAt(0)}
//         </div>
//         <div>
//           <div className="name">{datum.name}</div>
//           <div className="index">This is row {index}</div>
//           {additionalContent}
//         </div>
//         {useDynamicRowHeight && (
//           <span className="height">{datum.size}px</span>
//         )}
//       </div>
//     );
//   }
// }