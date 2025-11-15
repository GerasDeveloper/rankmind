import { TODAS_DISCIPLINAS } from "../data/disciplinas";

type Props = {
  onClose: () => void;
  selecionadas: string[];
  setSelecionadas: (ids: string[]) => void;
};

export default function DisciplinasOverlay({
  onClose,
  selecionadas,
  setSelecionadas,
}: Props) {
  function toggleDisciplina(id: string) {
    if (selecionadas.includes(id)) {
      setSelecionadas(selecionadas.filter((x) => x !== id));
    } else {
      setSelecionadas([...selecionadas, id]);
    }
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-sm flex items-center justify-center z-90">
      <div className="w-full max-w-5xl rounded-3xl bg-[#05051A]/95 border border-[#EFA61F]/40 px-8 py-6">

        <header className="flex items-center justify-between mb-6">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#C87A2A] flex items-center justify-center text-xl"
          >
            ←
          </button>

          <h2 className="text-3xl font-semibold text-[#EFA61F]">
            Disciplinas
          </h2>

          <div className="w-10 h-10" />
        </header>

        <div className="grid grid-cols-3 gap-4">
          {TODAS_DISCIPLINAS.map((disc) => {
            const ativo = selecionadas.includes(disc.id);

            return (
              <button
                key={disc.id}
                onClick={() => toggleDisciplina(disc.id)}
                className={`
                  w-full rounded-full px-4 py-3 text-center text-sm transition
                  border ${
                    ativo
                      ? "bg-[#EFA61F] text-black border-[#EFA61F]"
                      : "bg-[#06061E] text-[#EFA61F] border-[#EFA61F]/60"
                  }
                `}
              >
                {disc.nome}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
