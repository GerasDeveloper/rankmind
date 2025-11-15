import { faker } from "@faker-js/faker";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Perfil() {
    const image = faker.image.personPortrait();
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0e0f1a] relative overflow-hidden">
            <div className="h-100 w-75 md:w-100 md:h-110 flex flex-col gap-5 md:gap-10 bg-linear-to-b from-[#0b0b1ad1] to-[#0e0f1aa4]
            rounded-[2.5rem] border border-[#ffa827] transition-all duration-300 items-center">

                <h1 className="text-[#ffa827] text-2xl font-bold mt-2.5">Perfil</h1>
                <div
                    className={`flex items-center cursor-pointer gap-3 px-10 
                        pb-10 border-b border-white/10 transition-all duration-500 
                        "justify-center"`}
                >
                    <img
                        alt="Foto"
                        src={image}
                        className="w-15 h-15 md:ml-10 md:mt-0 lg:ml-0 rounded-full border-2 border-white/20 object-cover"
                    />

                    <div>
                        <h2 className="font-semibold text-lg mt-10 md:mt-0">Geraldo O.</h2>
                    </div>
                </div>
                <div className="gap-2 flex flex-col md:w-80 md:gap-3">
                    <InputField name="nome" placeholder="Nome" />
                    <InputField name="senha" placeholder="Senha" />
                </div>

                <Button type="button">Salvar</Button>
            </div>
        </div>
    )
}