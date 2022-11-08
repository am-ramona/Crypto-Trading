
// export type AutocompleteOption = string;

// export interface MarketsType {
//   label: string;
//   year: number;
//   id: number;
//   code?: string;
// }

export interface PerpetualsMarketsType {
    label: string;
    year?: number;
    id?: number;
}

export interface ComboBoxProps {
    updateValue: (arg: PerpetualsMarketsType | null | unknown) => void;
  }