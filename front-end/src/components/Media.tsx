type MediaAnoProps = {
    notasAno: string[];
}

export default function MediaAno({ notasAno }: MediaAnoProps) {
    const valores = notasAno
        .map((v) => v.replace(",", "."))
        .map(Number)
        .filter((v) => !isNaN(v) && v >= 0);
    const media = valores.length > 0
        ? (valores.reduce((a, b) => a + b, 0) / valores.length).toFixed(2).replace(".", ",")
        : "-";

    return (
        <div
            className="
        w-40 h-12 rounded-xl bg-[#0B0B26] 
        text-[#EFA61F] text-lg font-semibold 
        flex items-center justify-center
        border border-[#EFA61F]/60
      "
        >
            {media}
        </div>

    )
}