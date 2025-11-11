import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  bgColor?: string;  
  textColor?: string;   
  hoverColor?: string;   
}

export default function Button({
  children,
  onClick,
  type = "button",
  bgColor = "#ffb74d",
  textColor = "#1a1a1a",
  hoverColor = "#ffcc80",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      className={`
        w-50 px-10 py-3 rounded-full font-semibold
        transition-all duration-200
        shadow-[0_0_20px_rgba(255,183,77,0.4)]
        hover:opacity-90
      `}
      onMouseEnter={(e) =>
        ((e.target as HTMLButtonElement).style.backgroundColor = hoverColor)
      }
      onMouseLeave={(e) =>
        ((e.target as HTMLButtonElement).style.backgroundColor = bgColor)
      }
    >
      {children}
    </button>
  );
}
