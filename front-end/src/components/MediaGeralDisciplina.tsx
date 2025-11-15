type Props = {
  notas: Record<string, Record<string, string>>;
  anos: string[];
  disciplinasSelecionadas: string[];
};

export default function MediaGeralDisciplinas({
  notas,
  anos,
  disciplinasSelecionadas,
}: Props) {
  const mediasDisciplinas: number[] = [];

  Object.entries(notas).forEach(([id, anosNotas]) => {
    if (!disciplinasSelecionadas.includes(id)) return;

    const valores = anos
      .map((ano) => anosNotas[ano].replace(",", "."))
      .map(Number)
      .filter((n) => !isNaN(n));

    if (valores.length > 0) {
      const media = valores.reduce((a, b) => a + b, 0) / valores.length;
      mediasDisciplinas.push(media);
    }
  });

  const mediaGeral =
    mediasDisciplinas.length > 0
      ? mediasDisciplinas.reduce((a, b) => a + b, 0) / mediasDisciplinas.length
      : null;

  return (
    <div
      className="
        w-40 h-12 rounded-xl bg-[#0B0B26]
        text-lg text-[#EFA61F] font-bold 
        flex items-center justify-center
        border border-[#EFA61F]/60
      "
    >
      {mediaGeral !== null ? mediaGeral.toFixed(3) : "-"}
    </div>
  );
}
