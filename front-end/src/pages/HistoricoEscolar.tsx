import { useState } from "react";
import { ANOS, DISCIPLINAS_REGULARES } from "../data/disciplinas";
import type { Ano } from "../types/anos";

import DisciplinasOverlay from "../components/DisciplinaOverlay";
import PeriodosOverlay from "../components/PeriodosOverlay";

import MediaAno from "../components/Media";
import MediaDisciplina from "../components/MediaGeralDisciplina";
import MediaGeralDisciplinas from "../components/MediaDisciplinas";

export default function HistoricoEscolar() {
  const [modalidade, setModalidade] = useState<"Escola Regular" | "EJA">(
    "Escola Regular"
  );
  const [overlay, setOverlay] = useState<"disciplinas" | "periodos" | null>(null);

  const [disciplinasSelecionadas, setDisciplinasSelecionadas] = useState<string[]>(
    () => DISCIPLINAS_REGULARES.map((d) => d.id)
  );

  const [notas, setNotas] = useState<Record<string, Record<Ano, string>>>(() => {
    const base: Record<string, Record<Ano, string>> = {};
    DISCIPLINAS_REGULARES.forEach((d) => {
      base[d.id] = { "6º": "", "7º": "", "8º": "", "9º": "" };
    });
    return base;
  });

  const disciplinasAtivas = DISCIPLINAS_REGULARES.filter((d) =>
    disciplinasSelecionadas.includes(d.id)
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0e0f1a] relative overflow-hidden">

      {/* HEADER */}
      <header className="flex items-center justify-between w-full px-10 mb-6">
        <h1 className="text-5xl font-bold text-[#FFA63F]">Histórico</h1>

        <button
          onClick={() =>
            setModalidade((prev) =>
              prev === "Escola Regular" ? "EJA" : "Escola Regular"
            )
          }
          className="px-6 py-3 rounded-full bg-[#0B0B26] border border-[#EFA61F]/50 text-[#EFA61F] text-lg font-medium"
        >
          {modalidade}
        </button>

        <button className="w-15 h-15 rounded-full bg-[#C87A2A] flex items-center justify-center text-2xl">
          ✓
        </button>
      </header>

      {/* TABELA */}
      <div className="flex flex-col mt-5">

        {/* CABEÇALHO */}
        <div className="flex gap-6 mb-4">
          <span className="w-75 text-center mr-5 bg-[#0B0B26]/70 text-[#EFA61F] text-xl px-10 py-3 rounded-full border">
            Disciplinas
          </span>

          {ANOS.map((ano) => (
            <span
              key={ano}
              className="w-40 text-center py-3 rounded-full border bg-[#0B0B26] text-[#EFA61F] text-xl font-semibold ml-6"
            >
              {ano}
            </span>
          ))}

          <span className="w-40 text-center ml-8 bg-[#0B0B26]/70 text-[#EFA61F] text-xl px-5 py-3 rounded-full border">
            Média
          </span>
        </div>

        {/* CORPO */}
        <div className="flex flex-row justify-center items-center gap-12">

          {/* COLUNA DISCIPLINAS */}
          <div className="w-80 bg-[#030315] rounded-3xl p-4 flex flex-col gap-2">
            {disciplinasAtivas.map((d) => (
              <div key={d.id} className="px-4 py-2 rounded-xl text-[#EFA61F] text-xl font-medium">
                {d.nome}
              </div>
            ))}

            <button
              onClick={() => setOverlay("disciplinas")}
              className="text-xs mt-2 text-[#EFA61F] underline"
            >
              editar disciplinas
            </button>
          </div>

          {/* INPUTS DE NOTAS */}
          {ANOS.map((ano) => (
            <div key={ano} className="flex flex-col gap-2 w-40">
              {disciplinasAtivas.map((d) => (
                <input
                  key={d.id}
                  type="text"
                  value={notas[d.id][ano]}
                  onChange={(e) => {
                    const valorFiltrado = e.target.value.replace(/[^\d.,]/g, "");
                    setNotas((prev) => ({
                      ...prev,
                      [d.id]: { ...prev[d.id], [ano]: valorFiltrado },
                    }));
                  }}
                  className="w-full h-12 rounded-xl bg-[#030315] text-lg text-[#EFA61F] text-center border border-[#EFA61F] focus:ring-2 focus:ring-[#EFA61F]"
                  placeholder="-"
                />
              ))}
            </div>
          ))}

          {/* MEDIA POR DISCIPLINA */}
          <div className="flex flex-col gap-2 w-40">
            {disciplinasAtivas.map((d) => {
              const notasDisciplina = { [d.id]: notas[d.id] };
              return (
                <MediaDisciplina
                  key={d.id}
                  notas={notasDisciplina}
                  anos={ANOS}
                  disciplinasSelecionadas={[d.id]}
                />
              );
            })}
          </div>
        </div>

        {/* LINHA DAS MÉDIAS */}
        <div className="flex flex-row gap-12 mt-6 ml-[375px]">
          {ANOS.map((ano) => {
            const notasAno = disciplinasAtivas.map((d) => notas[d.id][ano]);
            return <MediaAno key={ano} notasAno={notasAno} />;
          })}

          <MediaGeralDisciplinas
            notas={notas}
            anos={ANOS}
          />
        </div>
      </div>

      {/* Overlays */}
      {overlay === "disciplinas" && (
        <DisciplinasOverlay
          onClose={() => setOverlay(null)}
          selecionadas={disciplinasSelecionadas}
          setSelecionadas={setDisciplinasSelecionadas}
        />
      )}

      {overlay === "periodos" && <PeriodosOverlay onClose={() => setOverlay(null)} />}
    </div>
  );
}
