import TerminalWidget from "../TerminalWidget";

interface HeroProps {
  onNavToSection: (id: string) => void;
}

export default function Hero({ onNavToSection }: HeroProps) {
  return (
    <section 
      id="inicio" 
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-black px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Background grid pattern & ambient radial gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />
      
      {/* SVG Displacement Filter for melting text */}
      <svg className="absolute w-0 h-0 pointer-events-none" style={{ visibility: 'hidden', position: 'absolute' }} aria-hidden="true">
        <defs>
          <filter id="melt-filter" x="-20%" y="-20%" width="140%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.015 0.035" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      
      {/* Big Watermark Text in the background - matching image */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.12] text-center" id="hero-watermark">
        <h1 
          className="font-display text-[15vw] font-black tracking-widest text-white leading-none"
          style={{ filter: "url(#melt-filter)" }}
        >
          GHOST CODE
        </h1>
      </div>

      <div className="relative mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8" id="hero-content-left">

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-[56px] font-bold text-white tracking-tight leading-[1.08] max-w-2xl" id="hero-heading">
            portafolio<span className="text-green-500">.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="font-sans text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl" id="hero-description">
            explora nuestros proyectos. un recorrido técnico a través de sistemas de alto rendimiento, arquitecturas de software seguras y soluciones a medida diseñadas para resistir en los entornos más exigentes.
          </p>

        </div>

        {/* Right Column: Interactive Terminal Widget */}
        <div className="lg:col-span-5 flex justify-center w-full" id="hero-terminal-right">
          <div className="w-full max-w-lg lg:max-w-none">
            <TerminalWidget />
          </div>
        </div>

      </div>
    </section>
  );
}
