export default function Home() {
  const services = [
    "Planejamento de Conteúdo",
    "Criação de Posts para o Feed",
    "Criação e Edição de Reels",
    "Gestão de Stories",
    "Legendas Estratégicas",
    "Otimização do Perfil",
    "Gestão da Landing Page",
    "Captação de Leads",
    "Impulsionamento de Publicações"
  ];

  return (
    <main className="bg-[#F8F4EF] text-[#2A2522]">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-white/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[0.35em] text-[#A27B5C] mb-5">
              Kelly Marques
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Proposta de
              <br />
              Gestão de
              <br />
              Instagram
            </h1>

            <p className="mt-8 text-xl text-[#5A524C] max-w-xl">
              Construindo visibilidade, credibilidade e crescimento
              para sua organização através de uma presença digital
              estratégica e profissional.
            </p>

            <button className="mt-10 px-8 py-4 rounded-full bg-[#A27B5C] text-white hover:opacity-90">
              Ver Estratégia
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src="/book.png"
              alt="Livro Kelly Marques"
              className="w-[450px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.25)]"
            />
          </div>

        </div>
      </section>

      {/* MENSAGEM */}
      <section className="max-w-5xl mx-auto px-8 py-28">

        <h2 className="text-4xl mb-8 font-light">
          Uma Estratégia Personalizada Para Sua Missão
        </h2>

        <p className="text-lg leading-9 text-[#5A524C]">
          Após compreender seus objetivos e a missão da sua organização,
          desenvolvi esta proposta com foco em fortalecer sua presença
          digital, aumentar a visibilidade da ONG, ampliar sua audiência
          e construir uma base sólida para futuras doações, parcerias e
          divulgação do seu livro.
        </p>

      </section>

      {/* SERVIÇOS */}
      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-4xl text-center mb-16 font-light">
          Gestão Mensal do Instagram
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((item) => (
            <div
              key={item}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <p className="text-lg">{item}</p>
            </div>
          ))}

        </div>

      </section>

      {/* ENTREGAS MENSAIS */}
      <section className="py-24 px-8 bg-[#F4EEE8]">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-light mb-12 text-center">
            Entregas Mensais
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="text-2xl mb-4">
                Conteúdo
              </h3>

              <ul className="space-y-3">
                <li>✓ 12 Posts para o Feed</li>
                <li>✓ 8 Reels</li>
                <li>✓ Stories Semanais</li>
                <li>✓ Legendas Estratégicas</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl">
              <h3 className="text-2xl mb-4">
                Crescimento
              </h3>

              <ul className="space-y-3">
                <li>✓ Landing Page</li>
                <li>✓ Captação de Leads</li>
                <li>✓ Impulsionamento de Conteúdo</li>
                <li>✓ Otimização do Perfil</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* ESTRATÉGIA */}
      <section className="bg-white py-28 px-8">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl mb-16 font-light">
            Estratégia de Crescimento
          </h2>

          <div className="space-y-6 text-2xl">

            <p>Conteúdo Estratégico no Instagram</p>
            <p>↓</p>

            <p>Engajamento da Audiência</p>
            <p>↓</p>

            <p>Landing Page</p>
            <p>↓</p>

            <p>Captação de Leads</p>
            <p>↓</p>

            <p>Divulgação do Livro e da ONG</p>

          </div>

        </div>

      </section>

      {/* INVESTIMENTO */}
      <section className="py-28 px-8">

        <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-16 text-center shadow-sm">

          <h2 className="text-3xl font-light mb-8">
            Investimento Mensal
          </h2>

          <p className="text-6xl font-light text-[#A27B5C]">
            US$ 300
            <span className="text-2xl">/mês</span>
          </p>

          <p className="mt-6 text-[#5A524C]">
            Gestão Completa do Instagram
          </p>

          <p className="mt-2 text-[#5A524C]">
            Captação de Leads e Fortalecimento da Presença Digital
          </p>

          <p className="mt-4 text-sm text-[#7B736D]">
            O valor destinado ao impulsionamento das publicações será pago separadamente pela cliente.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-24 px-8">

        <h2 className="text-5xl font-light mb-6">
          Vamos Construir Algo Extraordinário Juntos
        </h2>

        <p className="text-xl text-[#5A524C] mb-10">
          Fortalecendo sua presença digital, ampliando seu alcance e gerando mais impacto para sua missão.
        </p>

        <button className="px-10 py-5 rounded-full bg-[#A27B5C] text-white">
          Aprovar Proposta
        </button>

      </section>

    </main>
  );
}
