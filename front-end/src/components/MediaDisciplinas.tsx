type Props = {
  notas: Record<string, Record<string, string>>;
  anos: string[];
};

export default function MediaGeralDisciplinas({ notas, anos }: Props) {
  const medias: number[] = [];

  Object.values(notas).forEach((linha) => {
    const valores = anos
      .map((ano) => linha[ano].replace(",", "."))
      .map(Number)
      .filter((n) => !isNaN(n));

    if (valores.length > 0) {
      medias.push(valores.reduce((a, b) => a + b, 0) / valores.length);
    }
  });

  const mediaFinal =
    medias.length > 0
      ? medias.reduce((a, b) => a + b, 0) / medias.length
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
      {mediaFinal !== null ? mediaFinal.toFixed(3) : "-"}
    </div>
  );
}
