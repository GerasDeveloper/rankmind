import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Button from "../components/Button";
import populateAlunos from "../data/populate";
import Filtros from "../components/Filtros";

export default function Ranking() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("");
  const alunos = populateAlunos(100);

  const alunosFiltrados = useMemo(() => {
    return alunos.filter((aluno) => {
      const nomeMatch = aluno.nome
        .toLowerCase()
        .includes(busca.toLowerCase());

      const filtroMatch =
        !filtro ||
        aluno.curso === filtro ||
        aluno.rede === filtro ||
        aluno.concorrencia === filtro;

      return nomeMatch && filtroMatch;
    });
  }, [busca, filtro, alunos]);

  return (
    <div
      className="min-h-screen w-full px-4 py-8
      bg-linear-to-br from-[#00081a] via-[#001a0f] to-[#020016]
      text-white flex flex-col items-center gap-8"
    >

      <div className="w-full max-w-5xl flex items-center gap-4 px-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Pesquisar aluno..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full px-5 py-3 rounded-full
              bg-[#0b0b1a] text-[#ffb74d] placeholder-[#ffb74d]/40
              border border-[#ffb74d]/30 focus:ring-2 focus:ring-[#ffb74d]/40
              focus:outline-none transition-all duration-300"
          />
          <Search
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ffb74d]"
            size={22}
          />
        </div>
      </div>

      <Filtros onFiltroSelect={(filtroSelecionado) => setFiltro(filtroSelecionado)} />

      <div className="w-full max-w-5xl flex flex-col gap-3 px-2 md:px-0">
        {alunosFiltrados.map((aluno) => {
          const destaqueLaranja = aluno.posicao >= 41;
          const destaqueVerde = aluno.posicao < 41;

          return (
            <div
              key={aluno.posicao}
              className={`flex flex-col sm:flex-row justify-between items-center
                gap-3 sm:gap-6 px-6 py-4 rounded-2xl border backdrop-blur-lg transition
                ${
                  destaqueVerde
                    ? "border-[#00ff80]/40 shadow-[0_0_20px_rgba(0,255,80,0.3)]"
                    : "border-[#ffb74d]/40 shadow-[0_0_20px_rgba(255,183,77,0.3)]"
                }
                bg-[#0b0b1a]/70`}
            >

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                    ${
                      destaqueVerde
                        ? "bg-[#00ff80]/20 text-[#00ff80]"
                        : "bg-[#ffb74d]/20 text-[#ffb74d]"
                    }`}
                >
                  {aluno.posicao}
                </div>
                <p className="text-base md:text-lg text-[#e2e2e2]">
                  {aluno.nome}
                </p>
              </div>

              <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 text-sm">
                <span
                  className={`px-3 py-1 border rounded-full
                    ${
                      destaqueVerde
                        ? "border-[#00bfff] text-[#00bfff]"
                        : "border-[#ffb74d] text-[#ffb74d]"
                    }`}
                >
                  {aluno.rede}
                </span>
                <span
                  className={`px-3 py-1 border rounded-full
                    ${
                      destaqueVerde
                        ? "border-[#00bfff] text-[#00bfff]"
                        : "border-[#ffb74d] text-[#ffb74d]"
                    }`}
                >
                  {aluno.concorrencia}
                </span>
                <span
                  className={`px-4 py-1 text-base font-bold rounded-full
                    ${
                      destaqueVerde
                        ? "bg-[#00ff80]/10 text-[#00ff80]"
                        : "bg-[#ffb74d]/10 text-[#ffb74d]"
                    }`}
                >
                  {aluno.nota.toLocaleString("pt-BR", {
                    minimumFractionDigits: 3,
                  })}
                </span>
              </div>
            </div>
          );
        })}

        {alunosFiltrados.length === 0 && (
          <p className="text-center text-[#ffb74d]/80 text-lg mt-10">
            Nenhum aluno encontrado.
          </p>
        )}
      </div>

      <div className="fixed bottom-8 right-6 sm:right-10 md:right-20 z-50 drop-shadow-[0_0_20px_rgba(2,172,19,0.6)]">
        <Button>GERAR PDF</Button>
      </div>
    </div>
  );
}
