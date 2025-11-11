import InputField from "./InputField";
import Button from "./Button";

interface ModalRelatorioProps {
  title: string;
  color?: string;
  fields: {
    label: string;
    placeholder: string;
  }[];
}

export default function ModalRelatorio({ title, fields }: ModalRelatorioProps) {
  const isBasico = title.toLowerCase().includes("básico");
  const theme = {
    borderColor: isBasico ? "#02AC13" : "#FFB74D",
    placeholderColor: isBasico ? "#79ff72" : "#FFB74D",
    titleColor: isBasico ? "#79ff72" : "#FFB74D",
    buttonColor: isBasico ? "#79ff72" : "#FFB74D",
  };

  return (
    <div
      className="w-[400px] max-w-xl mx-auto flex flex-col gap-6 p-8 
        bg-linear-to-b from-[#0b0b1ad1] to-[#0e0f1aa4]
        shadow-[0_0_80px_10px_rgba(255,183,77,0.2)]
        rounded-[2.5rem] border transition-all duration-300"
      style={{ borderColor: theme.borderColor }}
    >
      <h2 className="text-3xl font-bold text-center" style={{ color: theme.titleColor }}>
        {title}
      </h2>

      <form className="flex flex-col gap-5">
        {fields.map((field, index) => (
          <div key={index}>
            <p className="font-medium" style={{ color: theme.titleColor }}>
              {field.label}
            </p>
            <InputField
              name={field.label.toLowerCase().replaceAll(" ", "_")}
              placeholder={field.placeholder}
              borderColor={theme.borderColor}
              placeholderColor={theme.placeholderColor}
              focusColor={theme.borderColor}
            />
          </div>
        ))}

        <div className="flex justify-center pt-4">
          <Button
            bgColor={theme.buttonColor}
            hoverColor={theme.buttonColor}
            textColor="#1A1A1A"
          >
            Gerar PDF
          </Button>
        </div>
      </form>
    </div>
  );
}
