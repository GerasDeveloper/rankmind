import { useState } from "react";
import { Filter } from "lucide-react";

export default function Filtros({ onFiltroSelect }: { onFiltroSelect?: (filtros: string[]) => void }) {
  const [aberto, setAberto] = useState(false);
  const [selecionados, setSelecionados] = useState<string[]>([]);

  const opcoes = [
    "INFOR",
    "ADM",
    "ENFER",
    "AMPLA",
    "COTA DE BAIRRO",
    "PCD",
    "PÚBLICA",
    "PRIVADA",
  ];

  const alternarFiltro = (opcao: string) => {
    setSelecionados((prev) => {
      const jaSelecionado = prev.includes(opcao);

      let novos;
      if (jaSelecionado) {
        novos = prev.filter((f) => f !== opcao);
      } else if (prev.length < 3) {
        novos = [...prev, opcao];
      } else {
        novos = prev;
      }

      onFiltroSelect?.(novos);
      return novos;
    });
  };

  return (
    <div
      className="
        w-full max-w-5xl p-6 rounded-3xl bg-[#0c0c1e]/70 backdrop-blur-lg
        border border-[#00FF80]/20 flex flex-col items-center gap-4
        relative transition-all duration-300
      "
    >
      <button
        onClick={() => setAberto(!aberto)}
        className="
          flex items-center gap-3 text-[#efa61f] font-semibold
          hover:text-[#00ffcc] transition
        "
      >
        <Filter size={22} />
        <span>Filtros ({selecionados.length}/3)</span>
      </button>

      {aberto && (
        <div
          className="
            flex flex-wrap justify-center gap-4 mt-4
            animate-fadeIn
          "
        >
          {opcoes.map((opcao) => {
            const ativo = selecionados.includes(opcao);
            return (
              <button
                key={opcao}
                onClick={() => alternarFiltro(opcao)}
                className={`
                  px-5 py-2 border rounded-full text-sm md:text-base transition
                  ${
                    ativo
                      ? "border-[#00ffcc] bg-[#00ffcc]/20 text-[#00ffcc]"
                      : "border-[#00bfff] text-[#00bfff] hover:bg-[#00bfff]/20"
                  }
                `}
              >
                {opcao}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
