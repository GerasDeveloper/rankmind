import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import ImageLogin from "../assets/images/ImageLogin.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!user.trim() || !password.trim()) {
      alert("Preencha todos os campos antes de continuar!");
      return;
    }

    if (user.trim() === "Geraldo" && password.trim() === "1234") {
      navigate("/home");
    } else {
      alert("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className="
        min-h-screen flex min-h-screen 
        flex flex-col-reverse md:flex-row 
        items-center justify-center 
        bg-[#0e0f1a] text-white 
        px-6 md:px-0 items-center justify-center bg-[#0e0f1a] text-white">

      <div className="
          flex flex-col justify-center 
          w-full md:w-150 
          px-6 md:px-12 
          mt-8 md:mt-0
          mr-0 md:mr-20">
        <div className="mb-8 ml-2">
          <h1 className="text-3xl text-center font-bold text-[#ffb74d] mb-3">
            Login
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <InputField
            name="username"
            placeholder="Usuário"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <InputField
            name="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-5 lg:mt-10 flex justify-center">
            <Button type="submit">Ok</Button>
          </div>
        </form>
      </div>

      <div
        className="
          w-full md:w-160 
          h-[280px] md:h-130 
          flex items-center justify-center 
          mb-8 md:mb-0
          bg-gradient-to-br from-[#ffb74d]/30 to-[#0A0A2596]/50 
          rounded-[2em] md:rounded-[4em]
          shadow-[0_0_80px_10px_rgba(255,183,77,0.4)]
        "
      >
        <div>
          <img
            src={ImageLogin}
            alt="Imagem de um aluno em desenho 3D"
            className="w-[220px] md:w-auto mb-12 md:mb-23 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
