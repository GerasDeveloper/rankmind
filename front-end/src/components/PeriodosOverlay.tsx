import { DISCIPLINAS_REGULARES, ANOS } from "../data/disciplinas";

type Props = {
  onClose: () => void;
};

export default function PeriodosOverlay({ onClose }: Props) {
  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-90">
      <div className="w-full max-w-4xl rounded-3xl bg-[#05051A]/95 border border-[#EFA61F]/40 px-8 py-6">
        <header className="flex items-center justify-between mb-6">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#C87A2A] flex items-center justify-center text-xl"
          >
            ←
          </button>

          <h2 className="text-3xl font-semibold text-[#EFA61F] drop-shadow-[0_0_12px_rgba(239,166,31,0.7)]">
            9º - 3 PERÍODOS
          </h2>

          <div className="w-10 h-10" />
        </header>

        <div className="grid grid-cols-[1.5fr_repeat(3,1fr)] gap-4 text-sm">
          <div className="font-semibold text-[#EFA61F]">Disciplinas</div>
          <div className="text-center text-[#EFA61F]/70">1º B</div>
          <div className="text-center text-[#EFA61F]/70">2º B</div>
          <div className="text-center text-[#EFA61F]/70">3º B</div>

          {DISCIPLINAS_REGULARES.map((d) => (
            <div key={d.id} className="contents">
              <div className="text-[#EFA61F]">{d.nome}</div>
              <div className="h-9 rounded-2xl bg-[#030315]"></div>
              <div className="h-9 rounded-2xl bg-[#030315]"></div>
              <div className="h-9 rounded-2xl bg-[#030315]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
