import InputField from "../components/InputField";
import Button from "../components/Button";
import ImageAluno from "../assets/images/ImageLogin.png";
import SelectField from "../components/SelectField";
import { useState } from "react";

export default function CadastroAluno() {
  const [nomeSocial, setNomeSocial] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");
  const [rede, setRede] = useState("");

  return (
    <div
      className="
        min-h-screen w-full
        overflow-hidden
        bg-linear-to-br from-[#001a0f] via-[#00081a] to-[#020016]
        flex flex-col lg:flex-row items-center justify-center
        px-6 py-10 lg:px-20 gap-14 text-[#ffb74d]
      "
    >

      <div
        className="
          hidden lg:flex 
          w-full md:w-120 
          h-[280px] md:h-130 
          items-center justify-center 
          mb-8 md:mb-0
          bg-linear-to-br from-[#02AC13]/20 to-[#0A0A2596]/50 
          rounded-[2em] md:rounded-[4em]
          shadow-[0_0_80px_10px_rgba(2,172,19,0.4)]
        "
      >
        <img
          src={ImageAluno}
          alt='Foto do aluno'
          className="w-[200px] flex md:w-auto mb-12 md:mb-23 object-contain"
        />
      </div>

      <div className="flex-1 w-full max-w-lg">
        <h1 className="text-2xl mt-10 lg:text-4xl font-bold mb-8 text-[#ffb74d]">
          Cadastro Aluno
        </h1>

        <form className="flex flex-col gap-5">
          <div>
            <p>Nome:</p>
            <InputField name="nome" placeholder="Nome do aluno" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p>Nome Social:</p>
              <SelectField
                name="nomesocial"
                value={nomeSocial}
                onChange={(e) => setNomeSocial(e.target.value)}
                options={[
                  { label: "Sim", value: "sim" },
                  { label: "Não", value: "nao" },
                ]}
              />
            </div>
            <div>
              <p>Matrícula:</p>
              <SelectField
                name="matricula"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
                options={[
                  { label: "Sim", value: "sim" },
                  { label: "Não", value: "nao" },
                ]}
              />
            </div>
            <div>
              <p>Curso:</p>
              <SelectField
                name="curso"
                value={curso}
                onChange={(e) => setCurso(e.target.value)}
                options={[
                  { label: "INFORMÁTICA", value: "informatica" },
                  { label: "ADMINISTRAÇÃO", value: "administracao" },
                  { label: "ENFERMAGEM", value: "enfermagem" },
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>Bairro:</p>
              <InputField name="bairro" placeholder="Centro" />
            </div>
            <div>
              <p>Telefone:</p>
              <InputField name="telefone" placeholder="(88) 99999-9999" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>RG:</p>
              <InputField name="rg" placeholder="99999999-09" />
            </div>
            <div>
              <p>CPF:</p>
              <InputField name="cpf" placeholder="999.999.999-09" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>Rede:</p>
              <SelectField
                name="rede"
                value={rede}
                onChange={(e) => setRede(e.target.value)}
                options={[
                  { label: "Pública", value: "publica" },
                  { label: "Particular", value: "particular" },
                ]}
              />
            </div>
            <div>
              <p>Concorrência:</p>
              <InputField name="concorrencia" placeholder="Ampla" />
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
