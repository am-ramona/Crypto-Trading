import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Column, recentTradesData, liquidityData } from './recentTradesLiquidityInterfaces';
import { recentTradeRows, liquidityRows } from './recentTradesLiquidityConstants';

export default function RecentTradesLiquidityTable({ columns, cell, gridArea, height }: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const rows: recentTradesData[] | liquidityData[] = cell === 'Recent Trades' ? recentTradeRows : liquidityRows
  //   console.log('RecentTradesLiquidityTable props', props)
  //   console.log('columns', columns)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper id="recentTradesLiquidity" sx={{ width: '100%', overflow: 'auto', background: 'transparent', gridArea: gridArea, height: height }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3} sx={{ color: '#cccccc', fontSize: '13px', background: '#170010ff' }}>
                {cell}
              </TableCell>
              {/* <TableCell align="center" colSpan={3}>
                Liquidity
              </TableCell> */}
            </TableRow>
            <TableRow>
              {columns.map((column: Column) => (
                <TableCell
                  //   key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth, color: '#cccccc', fontSize: '13px', background: '#170010ff' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.price}>
                    {columns.map((column: Column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} sx={{ color: '#cccccc', fontSize: '12px', '&:nth-child(2)': { padding: 0 } }}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{
          color: '#cccccc', fontSize: '12px',
          '& .MuiTablePagination-toolbar .MuiTablePagination-actions': {
            marginLeft: 0,
            '& .MuiIconButton-root:first-of-type': { paddingRight: 0 },
            '& .MuiIconButton-root:last-child': { paddingLeft: 0 },
            '& .Mui-disabled > svg': { color: 'rgb(204 204 204 / 38%)' }
          },
          '& svg.MuiTablePagination-selectIcon, & svg': { color: '#cccccc' },
          '& .MuiTablePagination-select': { paddingLeft: 0 },
          '& .MuiTablePagination-selectLabel, & .MuiTablePagination-select, & .MuiTablePagination-displayedRows': { fontSize: '12px' },
        }}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
