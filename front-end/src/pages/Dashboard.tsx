import { useParams, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronLeft } from "lucide-react";
import populateAlunos from "../data/populate";

export default function Dashboard() {
  const { curso } = useParams(); 
  const navigate = useNavigate();
  const alunos = populateAlunos(100);

  const alunosCurso = alunos.filter((a) => a.curso.toUpperCase() === curso?.toUpperCase());

  const total = alunosCurso.length;
  const publica = alunosCurso.filter((a) => a.rede === "Pública").length;
  const particular = alunosCurso.filter((a) => a.rede === "Privada").length;
  const pcd = alunosCurso.filter((a) => a.concorrencia === "PCD").length;

  const porcentagemPublica = total ? Math.round((publica / total) * 100) : 0;
  const porcentagemParticular = total ? Math.round((particular / total) * 100) : 0;
  const porcentagemPcd = total ? Math.round((pcd / total) * 100) : 0;

  const data = [
    { name: "Pública", value: porcentagemPublica, color: "#39FF14" },
    { name: "Particular", value: porcentagemParticular, color: "#007BFF" },
    { name: "PCD", value: porcentagemPcd, color: "#A259FF" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0E0F1A] text-white relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-12 left-5 md:top-14 md:left-24 bg-[#A86D3E] hover:bg-[#d6873a] w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,183,77,0.4)] transition"
      >
        <ChevronLeft size={40} />
      </button>

      <div className="w-90% flex flex-col md:flex-row items-center justify-center gap-12 w-[90%] md:w-[70%] max-w-6xl">

        <div className="relative w-[250px] h-[250px] md:w-[550px] md:h-[550px] drop-shadow-[0_0_50px_rgba(57,255,20,0.3)]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={2}
                isAnimationActive
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wide">
            {curso}
          </h1>

          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#0B0B1A]/80 px-4 py-3 rounded-2xl w-full md:w-80 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              <div
                className="w-8 h-8 rounded-md"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-lg font-semibold">
                {item.value}% {item.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
