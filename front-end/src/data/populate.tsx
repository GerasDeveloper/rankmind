import { faker } from "@faker-js/faker";

interface Aluno {
  posicao: number;
  nome: string;
  curso: string;
  concorrencia: string;
  rede: string;
  nota: number;
}

export default function populateAlunos(qtd = 100): Aluno[] {
  const cursos = ["INFOR", "ADM", "ENFER"];
  const concorrencias = ["Ampla", "Cota de Bairro", "PCD"];
  const redes = ["Pública", "Privada"];

  const alunos: Aluno[] = [];

  for (let i = 1; i <= qtd; i++) {
    const nome = faker.person.fullName();
    const curso = faker.helpers.arrayElement(cursos);
    const concorrencia = faker.helpers.arrayElement(concorrencias);
    const rede = faker.helpers.arrayElement(redes);
    const nota = Number(faker.number.float({ min: 5, max: 10 }).toFixed(3));

    alunos.push({ posicao: i, nome, curso, concorrencia, rede, nota });
  }

  alunos.sort((a, b) => b.nota - a.nota);

  alunos.forEach((aluno, index) => (aluno.posicao = index + 1));

  return alunos;
}