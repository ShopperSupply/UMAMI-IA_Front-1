import { IPlace } from "./place";

export interface IFormEnvioError {
  curator: string;
  error_type: string;
  coor: string;
  sheet: string;
  client: string;
  abbr: string;
  mall: string;
  place: string;
}

export interface IFormBag {
  iva?: number;
  width?: number;
  height?: number;
  weight?: number;
  length?: number;
}

export interface IFormPlanilha {
  spreadsheet: File | null;
  curator_id: number;
  modality: string;
  bag_patterns: IFormBag;
  place: IPlace;
}

export interface IConfirmAction {
  message: string;
}
