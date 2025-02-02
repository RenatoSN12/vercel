"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Para quem é esse template?",
    answer: "Esse template foi criado para qualquer pessoa que deseja organizar suas finanças de forma simples e eficiente. Ele é ideal para autônomos, empreendedores e quem busca um controle financeiro mais estruturado.",
  },
  {
    question: "O que está incluído no template?",
    answer: "O template conta com: O template conta com: ✅ Gestão de Transações (entradas, saídas e transferências) ✅ Controle de Contas Bancárias e Saldo ✅ Gerenciamento de Cartões de Crédito e Faturas ✅ Categorias para organização dos gastos e receitas ✅ Visão Mensal das Finanças",
  },
  {
    question: "Como funciona o template na prática?",
    answer: "Você adiciona suas receitas e despesas à base de dados, e o template organiza automaticamente suas finanças, permitindo uma visão clara dos seus gastos, ganhos e saldo disponível.",
  },
  {
    question: "Preciso pagar para usar o Notion?",
    answer: "Não! O Notion tem um plano gratuito que permite utilizar o template sem custo algum. Caso queira recursos avançados, há planos pagos opcionais.",
  },
  {
    question: "Posso personalizar o template?",
    answer: "Sim! O template é totalmente editável, e você pode adaptá-lo conforme suas necessidades.",
  },
  {
    question: "Ele funciona no celular?",
    answer: "Sim! O template é compatível com computadores, tablets e smartphones, permitindo que você acesse suas finanças de qualquer lugar.",
  },
  {
    question: "O template faz integração com bancos?",
    answer: "Atualmente, o Notion não tem integração direta com bancos, mas você pode importar extratos manualmente ou usar automações externas como Zapier e Make.",
  },
  {
    question: "O template possui suporte?",
    answer: "Sim! Se tiver dúvidas ou precisar de ajuda para configurar, você pode entrar em contato com nosso suporte e teremos o maior prazer em te ajudar.",
  },
  {
    question: "Como posso garantir que minhas finanças estão seguras?",
    answer: "O Notion é uma plataforma segura, e seus dados ficam armazenados apenas na sua conta. Além disso, você pode configurar senhas e autenticação em dois fatores para maior proteção.",
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
