interface PerpetualsMarketsType {
    label: string;
    year?: number;
    id?: number;
  }

interface CustomContentRendererProps {
    direction: string, 
    label: PerpetualsMarketsType
}

export type { PerpetualsMarketsType, CustomContentRendererProps }