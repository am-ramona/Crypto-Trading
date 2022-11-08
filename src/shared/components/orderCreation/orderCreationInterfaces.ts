/*** Types & Interfaces ***/
// interface PerpetualsMarketsType {
//   label: string;
//   year?: number;
//   id?: number;
// }

interface OrderCreationProps {
    orderCreationPanel: Array<any>;
    direction?: string;
    usdcValue?: number;
    btcValue?: number;
    leverageValue?: number | number[] | undefined;
    updateDirection: (arg: string) => void;
    updateBTCValue: (arg: number) => void;
    updateUsdcValue: (arg: number) => void;
    updateLeverageValue: (arg: number) => void;
  }

export type { OrderCreationProps } 