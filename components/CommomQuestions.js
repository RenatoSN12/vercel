"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "O que exatamente é esse template?",
    answer: "Este é um template do Notion projetado para ajudar na produtividade e organização.",
  },
  {
    question: "Nunca usei o Notion. Consigo usar mesmo assim?",
    answer: "Sim! O template é intuitivo e inclui instruções para iniciantes no Notion.",
  },
  {
    question: "Como esse template pode me ajudar?",
    answer: "Ele estrutura suas tarefas e metas de forma clara para facilitar sua produtividade.",
  },
  {
    question: "Eu já tentei outros métodos. O que faz esse template ser diferente?",
    answer: "O template combina técnicas comprovadas de produtividade em um único ambiente integrado.",
  },
  {
    question: "O template funciona no celular?",
    answer: "Sim! O Notion tem um aplicativo móvel totalmente compatível com o template.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-[#333333]">
        AINDA ESTÁ COM ALGUMA DÚVIDA?
      </h2>
      <p className="text-center mt-2 text-[#333333]">
        Veja <strong>abaixo</strong> as dúvidas <strong>mais comuns</strong> sobre o <strong>FocoProdutivo</strong>:
      </p>

      <div className="mt-6 space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full flex justify-between items-center text-left p-4 font-medium text-lg text-[#333333]"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 text-[#666666]">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
