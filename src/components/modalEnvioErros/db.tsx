interface Icurador {
  id: number;
  name: string;
  level: number;
}

interface IerrosTypes {
  id: number;
  group: string;
  title: string;
  description: string;
  severity: number;
  collector: string;
}

interface Iplaces {
  id: string;
  client: string;
  mall: string;
  abbr: string;
  name: string;
  is_active: boolean;
}

export const errosTypes: IerrosTypes[] = [
  {
    id: 1,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 2,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 3,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 4,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 5,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 6,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 7,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 8,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 9,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
  {
    id: 10,
    group: "ERRO",
    title: "Erro de Cadastro",
    description: "string",
    severity: 1,
    collector: "QA",
  },
];

export const curadores: Icurador[] = [
  {
    id: 1,
    name: "Alex Lanção",
    level: 2,
  },
  {
    id: 2,
    name: "Alonso",
    level: 2,
  },
  {
    id: 3,
    name: "Raquel",
    level: 2,
  },
  {
    id: 4,
    name: "Thais",
    level: 2,
  },
  {
    id: 5,
    name: "Alex Lanção",
    level: 2,
  },
  {
    id: 6,
    name: "Alonso",
    level: 2,
  },
  {
    id: 7,
    name: "Raquel",
    level: 2,
  },
  {
    id: 8,
    name: "Thais",
    level: 2,
  },
];

export const places: Iplaces[] = [
  {
    id: "268dnus484nds",
    client: "Also",
    mall: "Grande Rio",
    abbr: "RJ4",
    name: "Cacau Show",
    is_active: true,
  },
  {
    id: "268dnus484nds",
    client: "ElDourado",
    mall: "Curitiba mall",
    abbr: "PDP",
    name: "Cacau Show",
    is_active: true,
  },
  {
    id: "268dnus484nds",
    client: "Also",
    mall: "Caxias",
    abbr: "RJ4",
    name: "Cacau Show",
    is_active: true,
  },
  {
    id: "268dnus484nds",
    client: "Also",
    mall: "Shopping da Bahia",
    abbr: "SDB",
    name: "Cacau Show",
    is_active: true,
  },
];
