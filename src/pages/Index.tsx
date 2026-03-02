import { Search, Crown, HandCoins, Users, Phone, Mail, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const services = [
  {
    icon: Search,
    title: "Auditoria de VRD",
    description: "Verifico tecnicamente o valor real de reposição do seu Prédio, MMU (Máquinas e Utensílios) e MMP (Mercadorias e Matérias-Primas). Se o VRD declarado estiver abaixo do custo real, a seguradora corta sua indenização proporcionalmente — mesmo que você pague o prêmio em dia.",
  },
  {
    icon: Crown,
    title: "Blindagem contra Rateio",
    description: "A Cláusula de Rateio é a armadilha mais cara do mercado segurador. Identifico e corrijo o enquadramento da sua apólice para que, em caso de sinistro total ou parcial, o Limite Máximo de Indenização proteja integralmente o seu balanço patrimonial.",
  },
  {
    icon: HandCoins,
    title: "Engenharia de Risco e Lucros Cessantes",
    description: "Calculo o MDP (Máximo Dano Provável) e o PMP (Perda Máxima Possível) da sua operação. Além disso, calibro a cobertura de Lucros Cessantes considerando o lead time real de reposição de maquinário — porque reconstruir uma fábrica leva meses, mas repor um equipamento importado pode levar mais de um ano.",
  },
  {
    icon: Users,
    title: "Gestão de LMI e Defesa Técnica",
    description: "Atuo como seu Red Team antes do sinistro: analiso as condições gerais, identifico cláusulas de exclusão que podem invalidar sua apólice e garanto que o Limite Máximo de Indenização (LMI) seja matematicamente suficiente para reconstruir sua operação — não apenas cobrir parte dela.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <img
            src={profilePhoto}
            alt="Elzemario Kaller"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary-foreground/30 shadow-xl shrink-0"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
              Elzemario Kaller
            </h1>
            <span className="inline-block bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground text-xs md:text-sm font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              Consultor de Riscos Patrimoniais | Auditoria de Apólices de Incêndio
            </span>
            <p className="text-primary-foreground/90 leading-relaxed text-base md:text-lg max-w-xl mb-4 font-semibold italic">
              Sua apólice de incêndio pagaria 100% dos seus ativos hoje — ou a seguradora cortaria sua indenização pela metade?
            </p>
            <p className="text-primary-foreground/85 leading-relaxed text-sm md:text-base max-w-xl">
              Para indústrias com patrimônio acima de R$ 2,5 milhões, um erro silencioso na declaração do Valor em Risco (VRD) ativa a{" "}
              <strong className="text-primary-foreground font-semibold">Cláusula de Rateio</strong> — e transforma sua apólice em um documento que paga apenas uma fração do sinistro. Com{" "}
              <strong className="text-primary-foreground font-semibold">37 anos de experiência no mercado segurador</strong>, audito apólices de incêndio com precisão técnica e cirúrgica para garantir que, no dia mais difícil da sua empresa, a indenização cubra{" "}
              <strong className="text-primary-foreground font-semibold">100% da reposição real dos seus ativos</strong> — sem cortes, sem surpresas, sem negativas.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            O que uma apólice mal calibrada custa à sua empresa
          </h2>
          <p className="text-muted-foreground text-center text-sm md:text-base max-w-2xl mx-auto mb-12 italic">
            Quatro falhas críticas que identifico antes que o perito da seguradora as encontre nos escombros.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2 font-sans">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-primary text-primary-foreground py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Se um incêndio parasse sua fábrica amanhã, seu balanço sobreviveria?
          </h2>
          <p className="text-primary-foreground/85 text-sm md:text-base mb-8 max-w-2xl mx-auto">
            Faça um diagnóstico gratuito da sua exposição ao Rateio. Em 30 minutos, você saberá exatamente se sua apólice atual pagaria o suficiente para reconstruir sua operação.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm md:text-base">
            <a href="tel:+5519982404000" className="flex items-center gap-2 hover:underline">
              <Phone className="w-5 h-5" /> (19) 98240-4000
            </a>
            <a href="mailto:ekkaller@gmail.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-5 h-5" /> ekkaller@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/elzemariokaller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
