
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