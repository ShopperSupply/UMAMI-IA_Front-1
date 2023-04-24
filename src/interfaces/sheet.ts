import { IFormBag } from "./form";
import { IPlace } from "./place";

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

export interface ISheetRequest {
  spreadsheet: Blob | null;
  curator_id: number;
  modality: string;
  bag_patterns: IFormBag;
  place: IPlace;
}
