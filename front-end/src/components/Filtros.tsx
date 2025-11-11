import { useState } from "react";
import { Filter } from "lucide-react";

export default function Filtros({ onFiltroSelect }: { onFiltroSelect?: (filtro: string) => void }) {
  const [aberto, setAberto] = useState(false);

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
        <span>Filtros</span>
      </button>

      {aberto && (
        <div
          className="
            flex flex-wrap justify-center gap-4 mt-4
            animate-fadeIn
          "
        >
          {opcoes.map((opcao) => (
            <button
              key={opcao}
              onClick={() => onFiltroSelect?.(opcao)}
              className="
                px-5 py-2 border border-[#00bfff]
                rounded-full text-[#00bfff]
                hover:bg-[#00bfff]/20 transition
                text-sm md:text-base active:bg-[#00bfff]/20 focus:bg-[#00bfff]/20
              "
            >
              {opcao}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
