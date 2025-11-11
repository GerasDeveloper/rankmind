import { useState } from "react";
import Button from "../components/Button";
import ModalRelatorio from "../components/ModalRelatorio";

export default function Relatorios() {
  const [modalAberto, setModalAberto] = useState<"basico" | "completo" | null>(null);

  const fecharModal = () => setModalAberto(null);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#0e0f1a] relative">

        <div className="flex flex-col lg:flex-row gap-10 md:gap-30 z-10 justify-center">
          <div
            className="w-[280px] h-[330px] md:w-[320px] md:h-[380px] flex flex-col justify-center items-center gap-8
            bg-linear-to-b from-[#0b0b1a7a] to-[#0e0f1aa4]
            shadow-[0_0_80px_10px_rgba(2,172,19,0.4)]
            rounded-[2.5rem] border-2 border-[#5EFF5A]"
          >
            <h1 className="mt-5 text-2xl md:text-3xl font-bold text-[#79ff72]">
              Relatório Básico
            </h1>
            <p className="text-left text-[16px] md:text-2xl text-[#79ff72] mr-10">
              Nome do Aluno;<br />
              Curso;<br />
              Rede;<br />
              Cota;<br />
              Média geral;<br />
            </p>

            <Button
              type="button"
              bgColor="#79ff72"
              onClick={() => setModalAberto("basico")}
            >
              Selecionar
            </Button>
          </div>

          <div
            className="w-[280px] h-[350px] md:w-[320px] md:h-[440px] flex flex-col justify-center items-center gap-8
            bg-linear-to-b from-[#0b0b1a7a] to-[#0e0f1aa4]
            shadow-[0_0_80px_10px_rgba(255,183,77,0.2)]
            rounded-[2.5rem] border-2 border-[#fd9935]"
          >
            <h1 className="mt-5 text-2xl md:text-3xl font-bold text-[#fd9935]">
              Relatório Completo
            </h1>
            <p className="text-left text-[16px] md:text-2xl text-[#fd9935] mr-6">
              Nome do Aluno;<br />
              CN ou RG;<br />
              Telefone;<br />
              Curso;<br />
              Rede;<br />
              Cota;<br />
              Histórico completo;<br />
            </p>

            <Button type="button" onClick={() => setModalAberto("completo")}>
              Selecionar
            </Button>
          </div>
        </div>

        {modalAberto && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="relative">
              <button
                onClick={fecharModal}
                className="absolute top-4 right-4 text-white text-2xl hover:text-[#ffb74d]"
              >
                ✕
              </button>

              {modalAberto === "basico" && (
                <ModalRelatorio
                  title="Relatório Básico"
                  color="#5EFF5A"
                  fields={[
                    { label: "Nome", placeholder: "José Adonias Gurgel de Albuquerque" },
                    { label: "Curso", placeholder: "Informática" },
                    { label: "Rede", placeholder: "Pública" },
                    { label: "Concorrência", placeholder: "Ampla" },
                  ]}
                />
              )}

              {modalAberto === "completo" && (
                <ModalRelatorio
                  title="Relatório Completo"
                  color="#FFB74D"
                  fields={[
                    { label: "Nome", placeholder: "José Adonias Gurgel de Albuquerque" },
                    { label: "CN ou RG", placeholder: "02565984600" },
                    { label: "Telefone", placeholder: "+88 99999-9999" },
                    { label: "Curso", placeholder: "Informática" },
                    { label: "Rede", placeholder: "Pública" },
                    { label: "Cota", placeholder: "Ampla" },
                  ]}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
