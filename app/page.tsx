const included = [
  {
    title: "Planejamento Estratégico Mensal",
    desc: "Definição dos temas, campanhas, calendário de conteúdo e objetivos de comunicação para o mês.",
    reason: "Para que cada publicação tenha intenção, direção e ajude a fortalecer a ONG, o livro e a imagem da Kelly."
  },
  {
    title: "Posts para o Feed",
    desc: "Criação de conteúdos para autoridade, educação, divulgação da ONG e divulgação do livro.",
    reason: "O feed constrói credibilidade quando alguém visita o perfil."
  },
  {
    title: "Reels Estratégicos",
    desc: "Ideias, roteiros, edição e organização de vídeos curtos para alcance e engajamento.",
    reason: "Reels ajudam novas pessoas a descobrirem a ONG, a Kelly e o livro."
  },
  {
    title: "Vídeos com IA",
    desc: "Criação de vídeos com inteligência artificial para divulgação da ONG, campanhas e livro.",
    reason: "Aumenta o impacto visual sem depender de filmagens presenciais."
  },
  {
    title: "Stories Recorrentes",
    desc: "Planejamento de stories para bastidores, avisos, campanhas, conexão e chamadas para ação.",
    reason: "Stories mantêm relacionamento com a audiência."
  },
  {
    title: "Landing Page para Leads",
    desc: "Página de apoio para apresentar a missão e captar contatos interessados.",
    reason: "Transforma atenção em contatos, oportunidades e possíveis apoiadores."
  },
  {
    title: "Divulgação da ONG",
    desc: "Conteúdos institucionais, emocionais e educativos sobre propósito e impacto.",
    reason: "Ajuda a atrair parceiros, apoiadores e mais visibilidade."
  },
  {
    title: "Divulgação do Livro",
    desc: "Conteúdos estratégicos para apresentar o livro e fortalecer a autoridade da Kelly.",
    reason: "O livro será usado como peça de posicionamento e credibilidade."
  },
  {
    title: "Impulsionamento no Instagram",
    desc: "Configuração e acompanhamento de impulsionamentos simples pelo Instagram.",
    reason: "O orçamento pago ao Instagram é separado e definido pela cliente."
  }
];

const notIncluded = [
  "Filmagens presenciais com equipe de gravação",
  "Captação presencial de imagens em eventos",
  "Atendimento de mensagens no direct",
  "Criação de website completo além da landing page de captação",
  "Valor pago ao Instagram/Meta para impulsionar publicações"
];

const process = [
  "Alinhamento dos objetivos do mês",
  "Planejamento dos conteúdos e campanhas",
  "Criação dos posts, reels, stories, vídeos com IA e legendas",
  "Publicação e organização da comunicação",
  "Acompanhamento e ajustes estratégicos"
];

export default function Home() {
  return (
    <main className="bg-[#F8F4EF] text-[#2A2522]">

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline preload="auto" className="h-full w-full object-cover">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#F8F4EF]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#A27B5C] mb-5 text-xs sm:text-sm">
              Kelly Marques
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight">
              Proposta de
              <br />
              Gestão de
              <br />
              Mídia Social
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-[#5A524C] max-w-xl leading-8 sm:leading-9">
              Uma estratégia mensal para fortalecer a presença digital da ONG,
              divulgar o livro, criar autoridade e transformar o Instagram em uma
              ferramenta real de visibilidade, conexão e captação de interessados.
            </p>

            <a href="#escopo" className="inline-block mt-9 px-7 py-4 rounded-full bg-[#A27B5C] text-white hover:opacity-90 transition">
              Ver o que está incluído
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/book.png"
              alt="Livro Kelly Marques"
              className="w-[280px] sm:w-[360px] lg:w-[450px] drop-shadow-[0_30px_55px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="bg-white rounded-[28px] sm:rounded-[40px] p-7 sm:p-10 md:p-16 shadow-sm">
          <p className="uppercase tracking-[0.22em] text-[#A27B5C] mb-5 text-xs sm:text-sm">
            Objetivo da Proposta
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-7 leading-tight">
            Não é apenas postar no Instagram.
            <br />
            É construir presença, autoridade e confiança.
          </h2>

          <p className="text-base sm:text-lg leading-8 sm:leading-9 text-[#5A524C]">
            Esta proposta foi criada para organizar uma presença digital contínua,
            profissional e estratégica. O foco é fortalecer a imagem da Kelly,
            comunicar melhor a missão da ONG, divulgar o livro e criar uma estrutura
            capaz de gerar mais conexão, visibilidade e oportunidades.
          </p>
        </div>
      </section>

      <section id="escopo" className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="uppercase tracking-[0.22em] text-[#A27B5C] mb-4 text-xs sm:text-sm">
            Escopo Mensal
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
            O que será feito todo mês
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#5A524C] leading-8">
            Cada entrega tem uma função dentro da estratégia. Assim fica claro o que
            está sendo contratado e por que o investimento de US$300/mês é baixo
            comparado ao volume de trabalho envolvido.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {included.map((item) => (
            <div key={item.title} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E8DDD3]">
              <h3 className="text-xl sm:text-2xl font-light mb-4">
                {item.title}
              </h3>

              <p className="text-[#5A524C] leading-7 mb-5">
                {item.desc}
              </p>

              <div className="bg-[#F8F4EF] rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[#A27B5C] mb-3">
                  Por que isso importa
                </p>
                <p className="text-[#5A524C] leading-7">
                  {item.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-24 px-5 sm:px-8 bg-[#F4EEE8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 items-start">
          <div>
            <p className="uppercase tracking-[0.22em] text-[#A27B5C] mb-4 text-xs sm:text-sm">
              Valor Percebido
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 leading-tight">
              O valor não é por posts.
              <br />
              É por uma estrutura completa de comunicação.
            </h2>

            <p className="text-base sm:text-lg leading-8 sm:leading-9 text-[#5A524C]">
              O trabalho envolve planejamento, criação, edição, organização,
              posicionamento, vídeos com IA, stories, reels, landing page, captação
              de leads e divulgação estratégica da ONG e do livro. Se cada parte
              fosse contratada separadamente, o custo seria muito maior.
            </p>
          </div>

          <div className="bg-white rounded-[30px] sm:rounded-[36px] p-7 sm:p-10 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-light mb-8">
              O que o valor cobre
            </h3>

            <ul className="space-y-4 sm:space-y-5 text-[#5A524C]">
              <li>✓ Estratégia mensal de comunicação</li>
              <li>✓ Posts para feed</li>
              <li>✓ Reels estratégicos</li>
              <li>✓ Vídeos com IA</li>
              <li>✓ Stories recorrentes</li>
              <li>✓ Divulgação da ONG</li>
              <li>✓ Divulgação do livro</li>
              <li>✓ Landing page para captação de leads</li>
              <li>✓ Impulsionamento simples pelo Instagram</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          <div className="bg-white rounded-[30px] sm:rounded-[36px] p-7 sm:p-10 shadow-sm">
            <p className="uppercase tracking-[0.22em] text-[#A27B5C] mb-4 text-xs sm:text-sm">
              Processo
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mb-8">
              Como o trabalho será conduzido
            </h2>

            <div className="space-y-5">
              {process.map((item, index) => (
                <div key={item} className="flex gap-4 items-start">
                  <div className="min-w-9 sm:min-w-10 h-9 sm:h-10 rounded-full bg-[#A27B5C] text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-base sm:text-lg text-[#5A524C] pt-1 sm:pt-2">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2A2522] text-white rounded-[30px] sm:rounded-[36px] p-7 sm:p-10 shadow-sm">
            <p className="uppercase tracking-[0.22em] text-[#D8C4B6] mb-4 text-xs sm:text-sm">
              Clareza de Escopo
            </p>

            <h2 className="text-3xl sm:text-4xl font-light mb-8">
              O que não está incluído
            </h2>

            <ul className="space-y-4 text-white/80">
              {notIncluded.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="mt-8 text-white/70 leading-7">
              O serviço contratado é gestão de mídia social, conteúdo, posicionamento
              e captação. O impulsionamento será feito pelo Instagram, mas o valor
              pago à plataforma para anunciar é separado dos US$300/mês.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.22em] text-[#A27B5C] mb-4 text-xs sm:text-sm">
            Estratégia de Crescimento
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-12 sm:mb-16 font-light">
            Como tudo se conecta
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-5 text-center">
            {["Conteúdo", "Audiência", "Relacionamento", "Leads", "Oportunidades"].map((item) => (
              <div key={item} className="bg-[#F8F4EF] rounded-3xl p-6">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-base sm:text-lg text-[#5A524C] leading-8">
            O Instagram gera atenção. Os posts constroem autoridade. Os reels ampliam
            alcance. Os stories criam relacionamento. A landing page capta interessados.
            E a estratégia conecta tudo para fortalecer a missão da ONG e a divulgação do livro.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 md:p-16 text-center shadow-sm border border-[#E8DDD3]">
          <p className="uppercase tracking-[0.22em] text-[#A27B5C] mb-4 text-xs sm:text-sm">
            Investimento
          </p>

          <h2 className="text-2xl sm:text-3xl font-light mb-8">
            Gestão de Mídia Social Mensal
          </h2>

          <p className="text-5xl sm:text-6xl font-light text-[#A27B5C]">
            US$ 300
            <span className="text-xl sm:text-2xl">/mês</span>
          </p>

          <p className="mt-8 text-[#5A524C] leading-8">
            Este valor contempla planejamento, criação de conteúdo, posts, reels,
            stories, vídeos com IA, legendas, landing page para captação de leads,
            divulgação do livro, divulgação da ONG e acompanhamento estratégico.
          </p>

          <p className="mt-5 text-sm text-[#7B736D] leading-6">
            O valor pago ao Instagram/Meta para impulsionar publicações não está incluído
            nos US$300/mês. Esse orçamento será definido e pago separadamente pela cliente,
            caso ela queira impulsionar algum conteúdo.
          </p>
        </div>
      </section>

      <section className="text-center py-20 sm:py-24 px-5 sm:px-8 bg-[#F4EEE8]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
          Próximo Passo
        </h2>

        <p className="text-lg sm:text-xl text-[#5A524C] mb-10 max-w-3xl mx-auto leading-8">
          Com a aprovação da proposta, iniciamos o alinhamento estratégico,
          organização do calendário e criação dos primeiros conteúdos.
        </p>

        <button className="px-9 sm:px-10 py-5 rounded-full bg-[#A27B5C] text-white">
          Aprovar Proposta
        </button>
      </section>

    </main>
  );
}
