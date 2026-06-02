const included = [
  {
    title: "Planejamento Estratégico Mensal",
    desc: "Definição dos temas, campanhas, calendário de conteúdo e objetivos de comunicação para o mês.",
    reason: "Para que cada publicação tenha intenção, direção e ajude a fortalecer a ONG, o livro e a imagem da Kelly."
  },
  {
    title: "Posts para o Feed",
    desc: "Criação de conteúdos para posicionamento, autoridade, educação, divulgação da ONG e divulgação do livro.",
    reason: "O feed constrói credibilidade. Quando alguém visita o perfil, precisa entender rapidamente quem é Kelly, qual é a missão e por que deve confiar."
  },
  {
    title: "Reels Estratégicos",
    desc: "Ideias, roteiros e edição de vídeos curtos para aumentar alcance, engajamento e descoberta por novas pessoas.",
    reason: "Reels são importantes para alcançar pessoas que ainda não seguem o perfil e ampliar a visibilidade da causa."
  },
  {
    title: "Stories Recorrentes",
    desc: "Planejamento de stories para relacionamento, bastidores, avisos, campanhas, provas sociais e chamadas para ação.",
    reason: "Stories mantêm a audiência próxima, criam conexão diária e ajudam a transformar seguidores em apoiadores."
  },
  {
    title: "Legendas e Chamadas Estratégicas",
    desc: "Criação de textos com objetivo claro: engajar, informar, gerar confiança e incentivar ação.",
    reason: "Não basta postar bonito. A legenda precisa conduzir a pessoa para comentar, clicar, apoiar, conhecer o livro ou entrar em contato."
  },
  {
    title: "Landing Page e Captação de Leads",
    desc: "Gestão da página de apoio para apresentar a missão, divulgar campanhas e captar contatos interessados.",
    reason: "O Instagram gera atenção, mas a landing page ajuda a transformar essa atenção em contatos, oportunidades e possíveis apoiadores."
  },
  {
    title: "Divulgação do Livro",
    desc: "Conteúdos pensados para posicionar o livro como parte da história, autoridade e missão da Kelly.",
    reason: "O livro não será apenas mencionado. Ele será usado estrategicamente para fortalecer a mensagem e ampliar a credibilidade."
  },
  {
    title: "Divulgação da ONG",
    desc: "Conteúdos institucionais, emocionais e educativos para mostrar impacto, propósito e necessidade de apoio.",
    reason: "A ONG precisa ser vista com clareza, profissionalismo e confiança para atrair parceiros, doadores e novas oportunidades."
  },
  {
    title: "Impulsionamento pelo Instagram",
    desc: "Configuração e acompanhamento de impulsionamentos simples diretamente pelo Instagram.",
    reason: "Ajuda a aumentar alcance e visibilidade das publicações mais importantes. O orçamento de mídia é pago separadamente pela cliente."
  }
];

const notIncluded = [
  "Gestão completa de tráfego pago avançado",
  "Campanhas complexas de Meta Ads",
  "Remarketing",
  "Atendimento de mensagens no direct",
  "Produção presencial de vídeos",
  "Criação de website completo fora da landing page",
  "Orçamento de impulsionamento ou mídia paga"
];

const process = [
  "Alinhamento da mensagem e objetivos do mês",
  "Planejamento dos conteúdos e campanhas",
  "Criação dos posts, reels, stories e legendas",
  "Publicação e organização da comunicação",
  "Acompanhamento dos conteúdos e ajustes estratégicos"
];

export default function Home() {
  return (
    <main className="bg-[#F8F4EF] text-[#2A2522]">

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
          <div className="absolute inset-0 bg-[#F8F4EF]/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-[#A27B5C] mb-5">
              Kelly Marques
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              Proposta de
              <br />
              Gestão Digital
              <br />
              Estratégica
            </h1>

            <p className="mt-8 text-xl text-[#5A524C] max-w-xl leading-9">
              Uma proposta mensal para fortalecer a presença digital da ONG,
              ampliar a autoridade de Kelly Marques, divulgar o livro e transformar
              o Instagram em uma ferramenta real de visibilidade, relacionamento e crescimento.
            </p>

            <a
              href="#escopo"
              className="inline-block mt-10 px-8 py-4 rounded-full bg-[#A27B5C] text-white hover:opacity-90 transition"
            >
              Ver o que está incluído
            </a>
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

      <section className="max-w-6xl mx-auto px-8 py-24">
        <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-sm">
          <p className="uppercase tracking-[0.25em] text-[#A27B5C] mb-5 text-sm">
            Objetivo da Proposta
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Não é apenas postar no Instagram.
            <br />
            É construir presença, autoridade e confiança.
          </h2>

          <p className="text-lg leading-9 text-[#5A524C]">
            O objetivo desta proposta é organizar uma estratégia contínua de conteúdo
            para que Kelly Marques e sua organização sejam vistas com mais profissionalismo,
            clareza e impacto. O trabalho será focado em transformar o Instagram em um
            canal ativo de comunicação, divulgação da ONG, fortalecimento do livro,
            relacionamento com a audiência e geração de oportunidades futuras.
          </p>
        </div>
      </section>

      <section id="escopo" className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[0.25em] text-[#A27B5C] mb-4 text-sm">
            Escopo Mensal
          </p>

          <h2 className="text-4xl md:text-5xl font-light">
            O que será feito todo mês
          </h2>

          <p className="mt-6 text-lg text-[#5A524C] leading-8">
            Cada entrega tem uma função dentro da estratégia. O objetivo é deixar claro
            o que está sendo contratado e por que isso justifica o investimento mensal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {included.map((item) => (
            <div key={item.title} className="bg-white rounded-3xl p-8 shadow-sm border border-[#E8DDD3]">
              <h3 className="text-2xl font-light mb-4">
                {item.title}
              </h3>

              <p className="text-[#5A524C] leading-7 mb-6">
                {item.desc}
              </p>

              <div className="bg-[#F8F4EF] rounded-2xl p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-[#A27B5C] mb-3">
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

      <section className="py-24 px-8 bg-[#F4EEE8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-[#A27B5C] mb-4 text-sm">
              Valor Percebido
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-8">
              O investimento não é por posts.
              <br />
              É por uma estrutura de crescimento.
            </h2>

            <p className="text-lg leading-9 text-[#5A524C]">
              Se cada parte deste trabalho fosse contratada separadamente — planejamento,
              design, edição de reels, legendas, stories, landing page, captação,
              divulgação do livro e organização da comunicação — o custo seria muito
              maior do que o valor mensal desta proposta.
            </p>
          </div>

          <div className="bg-white rounded-[36px] p-10 shadow-sm">
            <h3 className="text-3xl font-light mb-8">
              O que o valor cobre
            </h3>

            <ul className="space-y-5 text-[#5A524C]">
              <li>✓ Estratégia mensal de comunicação</li>
              <li>✓ Criação e organização de conteúdo</li>
              <li>✓ Posts para autoridade e credibilidade</li>
              <li>✓ Reels para alcance e descoberta</li>
              <li>✓ Stories para relacionamento</li>
              <li>✓ Landing page para captação</li>
              <li>✓ Divulgação do livro e da ONG</li>
              <li>✓ Direção estratégica contínua</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[36px] p-10 shadow-sm">
            <p className="uppercase tracking-[0.25em] text-[#A27B5C] mb-4 text-sm">
              Processo
            </p>

            <h2 className="text-4xl font-light mb-8">
              Como o trabalho será conduzido
            </h2>

            <div className="space-y-5">
              {process.map((item, index) => (
                <div key={item} className="flex gap-4 items-start">
                  <div className="min-w-10 h-10 rounded-full bg-[#A27B5C] text-white flex items-center justify-center">
                    {index + 1}
                  </div>
                  <p className="text-lg text-[#5A524C] pt-2">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#2A2522] text-white rounded-[36px] p-10 shadow-sm">
            <p className="uppercase tracking-[0.25em] text-[#D8C4B6] mb-4 text-sm">
              Clareza de Escopo
            </p>

            <h2 className="text-4xl font-light mb-8">
              O que não está incluído
            </h2>

            <ul className="space-y-4 text-white/80">
              {notIncluded.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <p className="mt-8 text-white/70 leading-7">
              Esses serviços podem ser contratados separadamente caso haja necessidade futura.
              Assim, a proposta fica clara, justa e sem confusão entre gestão de conteúdo
              e tráfego pago avançado.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-28 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-[#A27B5C] mb-4 text-sm">
            Estratégia de Crescimento
          </p>

          <h2 className="text-4xl md:text-5xl mb-16 font-light">
            Como a estrutura trabalha a favor da missão
          </h2>

          <div className="grid md:grid-cols-5 gap-5 text-center">
            {["Instagram", "Audiência", "Relacionamento", "Landing Page", "Oportunidades"].map((item) => (
              <div key={item} className="bg-[#F8F4EF] rounded-3xl p-6">
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-lg text-[#5A524C] leading-8">
            A estratégia conecta conteúdo, autoridade, relacionamento e captação.
            Isso ajuda a ONG e o livro a saírem de uma presença digital passiva para
            uma comunicação mais profissional, constante e intencional.
          </p>
        </div>
      </section>

      <section className="py-28 px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-[40px] p-10 md:p-16 text-center shadow-sm border border-[#E8DDD3]">
          <p className="uppercase tracking-[0.25em] text-[#A27B5C] mb-4 text-sm">
            Investimento
          </p>

          <h2 className="text-3xl font-light mb-8">
            Gestão Digital Estratégica Mensal
          </h2>

          <p className="text-6xl font-light text-[#A27B5C]">
            US$ 300
            <span className="text-2xl">/mês</span>
          </p>

          <p className="mt-8 text-[#5A524C] leading-8">
            Este valor contempla planejamento, criação de conteúdo, posts, reels,
            stories, legendas, apoio estratégico, landing page, captação de leads,
            divulgação do livro e fortalecimento da presença digital da ONG.
          </p>

          <p className="mt-5 text-sm text-[#7B736D]">
            O valor de impulsionamento das publicações não está incluído e será pago
            separadamente pela cliente, conforme orçamento definido.
          </p>
        </div>
      </section>

      <section className="text-center py-24 px-8 bg-[#F4EEE8]">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Próximo Passo
        </h2>

        <p className="text-xl text-[#5A524C] mb-10 max-w-3xl mx-auto leading-8">
          Com a aprovação da proposta, iniciamos o alinhamento estratégico,
          organização do calendário e estruturação dos primeiros conteúdos.
        </p>

        <button className="px-10 py-5 rounded-full bg-[#A27B5C] text-white">
          Aprovar Proposta
        </button>
      </section>

    </main>
  );
}
