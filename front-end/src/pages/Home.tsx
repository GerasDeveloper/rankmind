import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import populateAlunos from "../data/populate";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const alunos = populateAlunos(100);
  const navigate = useNavigate();

  const contagemCursos = { ADM: 0, ENFER: 0, INFOR: 0 };
  alunos.forEach((aluno) => {
    const curso = aluno.curso?.toUpperCase() || "";
    if (curso.includes("ADM")) contagemCursos.ADM++;
    else if (curso.includes("ENFER")) contagemCursos.ENFER++;
    else contagemCursos.INFOR++;
  });

  const total = contagemCursos.ADM + contagemCursos.ENFER + contagemCursos.INFOR;

  const dataSets = [
    {
      label: "ADM",
      data: [
        { name: "ADM", value: contagemCursos.ADM },
        { name: "Outros", value: total - contagemCursos.ADM },
      ],
    },
    {
      label: "ENFER",
      data: [
        { name: "ENFER", value: contagemCursos.ENFER },
        { name: "Outros", value: total - contagemCursos.ENFER },
      ],
    },
    {
      label:"INFOR",
      data: [
        { name: "INFOR", value: contagemCursos.INFOR },
        { name: "Outros", value: total - contagemCursos.INFOR },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0f1a] relative overflow-hidden">

      <div
        className="flex flex-col items-center justify-between
        w-[90vw] md:w-[75vw] lg:w-[60vw] 
        h-auto md:h-[670px]
        bg-linear-to-b from-[#161730] to-[#0f1020]
        rounded-3xl shadow-[0_0_40px_5px_rgba(62,93,255,0.3)]
        p-6 md:p-8 text-white gap-10"
      >
        <div
          className="flex flex-col md:flex-row justify-center items-center 
          gap-8 w-full md:h-[460px]"
        >
          {dataSets.map((set, i) => (
            <div
              key={i}
              onClick={() => navigate(`/Dashboard/${set.label}`)}
              className="bg-[#0b0b1a]/70 rounded-4xl p-4 md:p-6 
              flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.15)]
              w-[80%] sm:w-[60%] md:w-[250px] h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={set.data}
                    innerRadius="60%"
                    outerRadius="80%"
                    dataKey="value"
                    isAnimationActive={true}
                  >
                    {set.data.map((_, index) => (
                      <Cell
                        key={index}
                        fill={index === 0 ? "#39FF14" : "#1a1a1a"}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>

        <div
          className="w-[80%] h-[40%] mb-5 bg-[#0b0b1a]/60 rounded-4xl p-6 md:p-20 
          shadow-[0_0_40px_rgba(57,255,20,0.25)]
          flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[3rem] md:text-[4rem] font-bold text-[#39FF14] leading-tight">
              ▲ {total}
            </h1>
            <span className="text-xl md:text-2xl font-semibold text-[#39FF14]">
              ALUNOS
            </span>
          </div>

          <ul className="text-center md:text-left text-lg md:text-2xl font-semibold space-y-2">
            <li className="text-[#39FF14]">
              • {Math.round((contagemCursos.ADM / total) * 100)}% ADM
            </li>
            <li className="text-[#39FF14]">
              • {Math.round((contagemCursos.ENFER / total) * 100)}% ENFER
            </li>
            <li className="text-[#39FF14]">
              • {Math.round((contagemCursos.INFOR / total) * 100)}% INFOR
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
