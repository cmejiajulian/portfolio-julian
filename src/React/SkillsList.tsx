import React, { useState } from "react";

// Íconos SVG para cada categoría
const CategoryIcons: Record<string, JSX.Element> = {
  "Desarrollo Web Frontend": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z" />
    </svg>
  ),
  "Análisis y Visualización de Datos": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 17h2v-7H3v7zm4 0h2v-4H7v4zm4 0h2V7h-2v10zm4 0h2v-2h-2v2zm4 0h2V4h-2v13z" />
    </svg>
  ),
  "Diseño UI/UX y Prototipado": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
};

// Lista de habilidades
const skills: Record<string, string[]> = {
  "Desarrollo Web Frontend": [
    "Aplicaciones con React y JavaScript moderno",
    "Sitios web responsivos y optimizados",
    "Uso de Git y GitHub para control de versiones",
  ],
  "Análisis y Visualización de Datos": [
    "Manipulación de datos con Python (pandas, matplotlib, numpy)",
    "Visualización interactiva con Power BI",
    "Automatización de reportes e interpretación de datos",
  ],
  "Diseño UI/UX y Prototipado": [
    "Prototipos funcionales en Figma y Canva",
    "Mejora de experiencia de usuario",
    "Diseño enfocado en usabilidad y accesibilidad",
  ],
};

const SkillsList: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (category: string) => {
    setOpenItem(openItem === category ? null : category);
  };

  return (
    <div className="text-left pt-6 md:pt-10">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold mb-6">
        ¿Qué hago?
      </h3>
      <ul className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category}>
            <div
              onClick={() => toggleItem(category)}
              className="w-full max-w-md bg-[#1414149c] rounded-2xl border border-[var(--white-icon-tr)] hover:bg-opacity-80 transition-all cursor-pointer overflow-hidden"
            >
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  {CategoryIcons[category]}
                  <span className="text-[var(--white)] text-lg font-medium">
                    {category}
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className={`w-6 h-6 text-[var(--white)] transform transition-transform ${
                    openItem === category ? "rotate-180" : ""
                  }`}
                >
                  <path d="M12 15.5l-6-6 1.41-1.41L12 12.67l4.59-4.58L18 9.5l-6 6z" />
                </svg>
              </div>
              <div
                className={`px-4 transition-all duration-300 text-sm text-[var(--white-icon)] ${
                  openItem === category
                    ? "max-h-[300px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <ul className="space-y-2 mt-2">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
