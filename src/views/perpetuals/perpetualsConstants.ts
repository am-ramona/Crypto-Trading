import { PerpetualsMarketsType } from './perpetualsInterfaces'

export const marketPrice: number = 41260.5;
export const freeMargin: number = 100000;
export const recentTradesColumns = [
  { id: 'price', label: 'Price (USDC)' },
  { id: 'size', label: 'Size (ETH)' },
  { id: 'time', label: 'Time' }
]
export const liquidityColumns = [
  { id: 'size', label: 'Size (ETH)' },
  { id: 'price', label: 'Price (USDC)' },
  { id: 'sizeAfter', label: 'Size (ETH)' }
]
export const marks = [
    {
      value: 0,
      label: "0%",
    },
    // {
    //   value: 20,
    //   label: '20°C',
    // },
    // {
    //   value: 37,
    //   label: '37°C',
    // },
    {
      value: 100,
      label: "100%",
    },
  ];
export const leverageMarks = [
    {
      value: 0.0,
      label: "0.0x",
    },
    // {
    //   value: 2,
    //   label: "2.00x",
    // },
    // {
    //   value: 37,
    //   label: '37°C',
    // },
    {
      value: 25.0,
      label: "25.0x",
    },
  ];
export const pages = [
    "Positions",
    "Orders",
    "Unrealised Funding",
    "Price Chart",
    "Funding Chart",
    "Recent Trades / Liquidity",
  ];
export const perpetualsMarkets: readonly PerpetualsMarketsType[] = [
    { label: "BTC-PERP", id: 1 },
    { label: "ETH-PERP", id: 2 },
  ];