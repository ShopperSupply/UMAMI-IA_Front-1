
export interface ISheet {
  curator_id: number;
  modality: string;
  bag_patterns: {
    iva: number;
    height: number;
    width: number;
    length: number;
    weight: number;
  };
  place: {
    id: string;
    client: string;
    mall: string;
    abbr: string;
    name: string;
    is_active: true;
  };
  workbook: string;
  errors: [];
}
