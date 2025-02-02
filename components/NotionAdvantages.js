export default function NotionAdvantage() {
  return (
    <section className="px-4 md:px-10">
      <section className="flex flex-col md:flex-row items-center justify-around my-8">
        <div className="max-w-md text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Organização Simplificada
          </h1>
          <p className="text-lg">
            Tenha todas as suas finanças em um único lugar, facilitando o
            acompanhamento de gastos, receitas e investimentos de forma clara e
            organizada.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/first-image-main.jpg"
            alt="Imagem Ilustrativa"
            className="max-w-full md:max-w-[700px] h-auto rounded-2xl"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-around my-8">
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
          <img
            src="/second-image-main.png"
            alt="Imagem Ilustrativa"
            className="max-w-full md:max-w-[500px] h-auto"
          />
        </div>
        <div className="max-w-md text-center md:text-left mb-6 md:mb-0 order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Decisões Financeiras Mais Inteligentes
          </h1>
          <p className="text-lg">
            Acesse relatórios e gráficos detalhados que ajudam a entender seus
            hábitos de gastos e planejar um futuro financeiro mais seguro.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-around my-8">
        <div className="max-w-md text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Acesso Conveniente em Qualquer Lugar
          </h1>
          <p className="text-lg">
            Gerencie suas finanças de qualquer dispositivo, a qualquer momento,
            com sincronização em tempo real e suporte offline quando necessário.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/third-image-main.png"
            alt="Imagem Ilustrativa"
            className="max-w-full md:max-w-[500px] h-auto"
          />
        </div>
      </section>
    </section>
  );
}