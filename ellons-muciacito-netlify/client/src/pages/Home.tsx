import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Compass, Wind } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design System: Minimalist Geographic
 * Cartography Modern + Nordic Minimalism
 * Colors: Terracotta (#C85A17), Ocean Blue (#2C5282), Earth Tones
 * Typography: Playfair Display (serif, bold) for headings + Inter (sans-serif) for body
 * Layout: Asymmetric vertical sections with generous whitespace
 * Animations: Fade-in on scroll, subtle hover effects, pulsing CTA
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold font-serif text-accent">
            Ellons
          </div>
          <a
            href="https://youtube.com/@vidadeandarilho?si=JJ3WDit7Ib1fNsgP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
          >
            YouTube
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-wanderer.png"
            alt="Ellons Muciacito"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-accent tracking-widest uppercase">
                Uma jornada de 19 anos
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                A Vida de um <span className="text-accent">Andarilho</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
              Descendente de italianos, Ellons Muciacito percorreu o Brasil como andarilho por mais de 19 anos. Agora, ele enfrenta um desafio ainda maior: conquistar o mundo a pé.
            </p>

            <div className="flex gap-4 pt-8">
              <a
                href="https://youtube.com/@vidadeandarilho?si=JJ3WDit7Ib1fNsgP"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button group"
              >
                Acompanhe no YouTube
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Journey Milestones */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">A Jornada</h2>
              <p className="text-lg text-secondary max-w-2xl">
                De um andarilho brasileiro a um conquistador de continentes
              </p>
            </div>

            {/* Milestone 1: BR-319 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                      Brasil
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    BR-319: A Estrada Mais Temida
                  </h3>
                </div>

                <p className="text-lg text-secondary leading-relaxed">
                  A BR-319 é conhecida como uma das estradas mais perigosas do Brasil, atravessando a Amazônia. Ellons não apenas a percorreu, mas a conquistou, provando que a determinação supera qualquer obstáculo.
                </p>

                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Wind className="w-4 h-4 text-accent" />
                    <span>Selva Amazônica</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Compass className="w-4 h-4 text-accent" />
                    <span>2.000+ km</span>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src="/images/journey-map.png"
                  alt="Mapa da jornada"
                  className="hero-image"
                />
              </div>
            </div>

            <div className="section-divider"></div>

            {/* Milestone 2: Darien Gap */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                      Panamá - Colômbia
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Estreito de Darien: O Desafio Internacional
                  </h3>
                </div>

                <p className="text-lg text-secondary leading-relaxed">
                  Um dos lugares mais inóspitos do planeta. A selva do Darien é praticamente intransponível, mas Ellons a atravessou, marcando o início de sua conquista internacional.
                </p>

                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Wind className="w-4 h-4 text-accent" />
                    <span>Selva Impenetrável</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Compass className="w-4 h-4 text-accent" />
                    <span>Extremamente Perigoso</span>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="/images/darien-gap.png"
                  alt="Estreito de Darien"
                  className="hero-image"
                />
              </div>
            </div>

            <div className="section-divider"></div>

            {/* Milestone 3: Desert Crossing */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                      México - EUA
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Deserto do Novo México
                  </h3>
                </div>

                <p className="text-lg text-secondary leading-relaxed">
                  Após conquistar a América Central e o México, Ellons enfrentou o árido deserto do Novo México para chegar aos Estados Unidos. Uma prova final de resistência e vontade.
                </p>

                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Wind className="w-4 h-4 text-accent" />
                    <span>Deserto Árido</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Compass className="w-4 h-4 text-accent" />
                    <span>Extremas Temperaturas</span>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <img
                  src="/images/desert-crossing.png"
                  alt="Deserto do Novo México"
                  className="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Quem é Ellons?</h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-secondary">
              <p>
                Ellons Muciacito é um andarilho brasileiro descendente de italianos que abraçou a vida nas estradas há mais de 19 anos. Sua jornada começou percorrendo o Brasil, conhecendo cada canto do país a pé, vivendo de forma simples e conectado com a natureza.
              </p>

              <p>
                Mas sua sede de exploração não parou por aí. Decidiu levar sua jornada para o mundo, enfrentando desafios que poucos se atreveriam a encarar: a BR-319, o Estreito de Darien, a América Central, o México e o deserto do Novo México.
              </p>

              <p>
                Cada passo é uma história. Cada quilômetro é uma lição. Cada desafio superado é uma prova de que a determinação humana não tem limites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-accent text-accent-foreground">
        <div className="container max-w-3xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Acompanhe a Jornada
            </h2>
            <p className="text-lg opacity-90">
              Inscreva-se no canal do YouTube para acompanhar cada passo dessa aventura épica
            </p>
          </div>

          <a
            href="https://youtube.com/@vidadeandarilho?si=JJ3WDit7Ib1fNsgP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-foreground text-accent font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Ir para o YouTube
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="font-semibold">Ellons Muciacito</p>
            <p className="text-sm text-muted-foreground">
              A vida de um andarilho
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://youtube.com/@vidadeandarilho?si=JJ3WDit7Ib1fNsgP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-secondary hover:text-accent transition-colors"
            >
              YouTube
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © 2025 Ellons Muciacito. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(200, 90, 23, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(200, 90, 23, 0);
          }
        }

        .cta-button::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </div>
  );
}
