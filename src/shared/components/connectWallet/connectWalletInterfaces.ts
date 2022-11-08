import { WalletAccount } from "@talisman-connect/wallets";

export interface connectWalletProps {
    connected: (arg: WalletAccount) => void;
}

// export interface Accounts {
//   address: string;
//   meta: object;
//   type: string;
// }
