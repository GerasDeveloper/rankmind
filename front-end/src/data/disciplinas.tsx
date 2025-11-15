import type { Disciplina } from "../types/anos";


export const DISCIPLINAS_REGULARES: Disciplina[] = [
  { id: "lp", nome: "Língua Portuguesa" },
  { id: "art", nome: "Artes" },
  { id: "ing", nome: "Inglês" },
  { id: "geo", nome: "Geografia" },
  { id: "his", nome: "História" },
  { id: "cie", nome: "Ciências" },
  { id: "er", nome: "Ensino Religioso" },
  { id: "mat", nome: "Matemática" },
  { id: "red", nome: "Redação" }
];

export const TODAS_DISCIPLINAS: Disciplina[] = [
  { id: "lp", nome: "Língua Portuguesa" },
  { id: "lit", nome: "Literatura" },
  { id: "red", nome: "Redação" },
  { id: "art", nome: "Artes" },
  { id: "er", nome: "Ensino Religioso" },
  { id: "ing", nome: "Inglês" },
  { id: "geo", nome: "Geografia" },
  { id: "his", nome: "História" },
  { id: "fil", nome: "Filosofia" },
  { id: "soc", nome: "Sociologia" },
  { id: "mat", nome: "Matemática" },
  { id: "cie", nome: "Ciências" },
  { id: "qui", nome: "Química" },
  { id: "fis", nome: "Física" },
  { id: "edf", nome: "Educação Física" }
];

export const ANOS: ("6º" | "7º" | "8º" | "9º")[] = ["6º", "7º", "8º", "9º"];
