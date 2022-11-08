import { recentTradesData, liquidityData } from './recentTradesLiquidityInterfaces';

function createData(
    price: string,
    size: string,
    time: string
): recentTradesData {
    //{
    // const density = population / size;
    // const liquiditySizeBefore = size
    // const liquidityPrice = price
    // const liquiditySize = size
    return { price, size, time };
}

function createDataLiquidity(
    size: string,
    price: string,
    sizeAfter: string
): liquidityData {
    //{
    // const density = population / size;
    // const liquiditySizeBefore = size
    // const liquidityPrice = price
    // const liquiditySize = size
    return { size, price, sizeAfter };
}

const recentTradeRows = [
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55'),
    createData('2,900.95', '0.017', '00:15:55')
];

const liquidityRows = [
    createDataLiquidity('0.017', '2,900.95 | 2,900.95', '0.016'),
    createDataLiquidity('0.017', '2,900.95 | 2,900.95', '0.016'),
    createDataLiquidity('0.017', '2,900.95 | 2,900.95', '0.016'),
    createDataLiquidity('0.017', '2,900.95 | 2,900.95', '0.016'),
    createDataLiquidity('0.017', '2,900.95 | 2,900.95', '0.016'),
    createDataLiquidity('0.017', '2,900.95 | 2,900.95', '0.016'),
    createDataLiquidity('0.017', '2,900.95 | 2,900.95', '0.016')
];

export { recentTradeRows, liquidityRows }