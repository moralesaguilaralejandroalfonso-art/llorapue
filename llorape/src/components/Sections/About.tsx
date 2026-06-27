import { useState, useEffect, useRef } from "react";
// @ts-ignore
import ghostcodePreviewImg from "../../assets/images/ghostcode_preview_1782597055358.jpg";
import { 
  MapPin, 
  Mail, 
  Code, 
  ShieldCheck, 
  FileCode, 
  Palette, 
  Layout, 
  Server, 
  Terminal, 
  Coffee, 
  Database, 
  GitBranch, 
  Lock, 
  Building2,
  Briefcase
} from "lucide-react";

export default function About() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("alexmorales3540@gmail.com");
    setCopiedEmail(true);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setCopiedEmail(false);
      timeoutRef.current = null;
    }, 2000);
  };

  const specialties = [
    {
      category: "FRONTEND",
      items: [
        { name: "React / Next.js", level: 95, icon: Code },
        { name: "TypeScript", level: 90, icon: ShieldCheck },
        { name: "JavaScript", level: 95, icon: FileCode },
        { name: "Tailwind CSS", level: 98, icon: Palette },
        { name: "Bootstrap", level: 85, icon: Layout },
      ]
    },
    {
      category: "BACKEND & DB",
      items: [
        { name: "Node.js (Express)", level: 92, icon: Server },
        { name: "Python", level: 94, icon: Terminal },
        { name: "Java", level: 88, icon: Coffee },
        { name: "PostgreSQL", level: 88, icon: Database },
        { name: "MySQL", level: 85, icon: Database },
        { name: "SQLite", level: 82, icon: Database },
      ]
    },
    {
      category: "DEVOPS & CLOUD",
      items: [
        { name: "Git / CI/CD", level: 90, icon: GitBranch },
        { name: "Ciberseguridad", level: 85, icon: Lock },
      ]
    }
  ];

  return (
    <section id="sobre-mi" className="relative bg-[#050505] border-t border-neutral-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-start space-y-2.5 mb-14" id="about-header">
          <h2 className="font-display text-4xl font-bold text-white tracking-tight">
            Sobre los Desarrolladores
          </h2>
          <p className="font-sans text-neutral-400 text-sm max-w-2xl leading-relaxed">
            Descubre nuestra experiencia y soluciones a medida para el desarrollo ágil de software.
          </p>
        </div>

        {/* Developers Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="developers-grid">
          
          {/* COLUMN 1: Profile Details */}
          <div 
            className="flex flex-col h-full rounded-2xl border border-neutral-900 bg-neutral-950 p-6 space-y-6 justify-between"
            id="dev-profile-card"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Alejandro Morales &amp; Alejandro Guerra
                </h3>
                <p className="text-xs text-neutral-500 font-mono mt-1.5 tracking-wider">
                  morales &amp; guerra // developers
                </p>
              </div>

              <div className="h-px bg-neutral-900" />

              <div className="text-[11px] font-mono text-neutral-400 font-bold uppercase tracking-wider leading-relaxed">
                DESARROLLADORES DE SOFTWARE &amp; SOLUCIONES DE ESCRITORIO
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Somos un equipo técnico enfocado en la construcción y optimización de software de escritorio y aplicaciones web. Con sólidos conocimientos y experiencia práctica en lenguajes como Python, PostgreSQL, Odoo, Java, entre otros, destacamos en la resolución ágil de bugs complejos, la optimización de flujos de trabajo empresariales y la implementación de refinadas mejoras estéticas y de usabilidad.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-neutral-900">
              {/* Remote Location & Company details */}
              <div className="space-y-3.5 font-mono text-xs text-neutral-400">
                <div className="flex items-center space-x-2.5">
                  <MapPin className="h-4 w-4 text-neutral-500" />
                  <span>Remoto / Global</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Building2 className="h-4 w-4 text-neutral-500" />
                  <span>GhostCode Co.</span>
                </div>
              </div>

              {/* Direct Contact copy pill */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-neutral-900">
                <div className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase shrink-0 leading-tight">
                  CONTACTO<br />DIRECTO:
                </div>
                <div className="flex-1 flex items-center justify-between bg-neutral-900/30 border border-neutral-900/80 px-3 py-2 rounded-lg truncate">
                  <span className="text-xs text-neutral-300 font-mono truncate select-all">alexmorales3540@gmail.com</span>
                  <button 
                    onClick={handleCopyEmail}
                    className="text-[10px] font-mono text-neutral-400 hover:text-white font-bold uppercase shrink-0 pl-3 border-l border-neutral-800 ml-2 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? "COPIADO!" : "COPIAR"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Specialties / Skills Grid */}
          <div 
            className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6 space-y-6"
            id="dev-specialties-card"
          >
            <div className="flex items-center space-x-2.5">
              <Terminal className="h-4 w-4 text-neutral-400" />
              <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                Especialidades
              </h3>
            </div>

            <div className="space-y-6">
              {specialties.map((group) => (
                <div key={group.category} className="space-y-3.5">
                  <h4 className="text-[10px] font-mono font-bold text-neutral-500 tracking-widest uppercase">
                    {group.category}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {group.items.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div 
                          key={skill.name} 
                          className="bg-[#0a0a0a] border border-neutral-900/80 rounded-lg p-2.5 flex flex-col justify-between h-[56px] transition-all duration-150 hover:border-neutral-800"
                        >
                          <div className="flex items-center space-x-1.5 text-neutral-300">
                            <IconComponent className="h-3.5 w-3.5 text-neutral-500 shrink-0" />
                            <span className="text-[11px] font-sans font-medium text-white truncate">{skill.name}</span>
                          </div>
                          
                          {/* Retro terminal progress slider inside the pill */}
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex-1 h-1 bg-neutral-950 rounded overflow-hidden">
                              <div 
                                className="h-full bg-neutral-500 transition-all duration-300"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                            <span className="text-[9px] font-mono text-neutral-500 shrink-0">{skill.level}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COLUMN 3: Ghost Code Web Project Preview */}
          <div 
            className="flex flex-col h-full rounded-2xl border border-neutral-900 bg-neutral-950 p-6 justify-between relative overflow-hidden"
            id="dev-preview-card"
          >
            <div className="space-y-5">
              {/* Header section */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center space-x-2 font-mono text-xs">
                  <span className="text-white font-bold">Ghost Code Web</span>
                </div>
              </div>

              {/* High-fidelity browser simulation */}
              <div className="border border-neutral-900 bg-[#070707] rounded-lg overflow-hidden flex flex-col shadow-inner aspect-[4/3] w-full relative group">
                
                {/* Browser topbar bar */}
                <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-900/60 bg-neutral-900/20 shrink-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                    <span className="h-2 w-2 rounded-full bg-green-500/60" />
                  </div>
                  <div className="bg-neutral-950 border border-neutral-900/80 text-neutral-500 text-[9px] font-mono px-4 py-0.5 rounded select-all text-center max-w-[150px] truncate">
                    ghostcode.tech
                  </div>
                  <div className="w-8" />
                </div>

                {/* Browser view content */}
                <div className="flex-1 relative overflow-hidden select-none bg-neutral-950 flex items-center justify-center">
                  <img
                    src={ghostcodePreviewImg}
                    alt="Ghost Code Web Preview"
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Bottom details */}
            <div className="pt-6 border-t border-neutral-900 flex items-center justify-between font-mono text-xs mt-6">
              <span className="text-neutral-600 uppercase tracking-wider text-[10px]">
                ESTADO: PENDIENTE
              </span>
            </div>
          </div>

        </div>

        {/* Experiencia Laboral Section */}
        <div className="mt-12 rounded-2xl border border-neutral-900 bg-neutral-950 p-6 sm:p-8 space-y-8 animate-fade-in" id="experiencia-laboral-card">
          <div className="flex items-center space-x-2.5">
            <Briefcase className="h-5 w-5 text-neutral-400" />
            <h3 className="text-lg font-display font-bold text-white tracking-tight uppercase">
              Experiencia Laboral
            </h3>
          </div>

          <div className="relative border-l border-neutral-900 pl-6 ml-2.5 space-y-10">
            {/* Item 1 */}
            <div className="relative">
              {/* Indicator dot */}
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-[#050505] border-2 border-green-500 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center space-x-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-green-500/10 text-green-400 border border-green-500/20 uppercase tracking-wider">
                    2024 - PRESENTE
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  GHOSTCODE
                </span>
              </div>

              <h4 className="text-sm font-sans font-bold text-green-400 mb-2">
                Desarrollo de Soluciones &amp; Resolución de Bugs
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-3.5 max-w-4xl">
                Construcción de herramientas y aplicaciones personalizadas. Especialización en el mantenimiento correctivo y preventivo de sitios web y sistemas de escritorio, logrando flujos de trabajo limpios e interfaces de alto impacto visual.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {["Python", "PostgreSQL", "Odoo", "Java", "Desktop Apps"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#0a0a0a] border border-neutral-900 text-neutral-400 font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative">
              {/* Indicator dot */}
              <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-[#050505] border-2 border-neutral-800 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center space-x-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-neutral-900 text-neutral-400 border border-neutral-800 uppercase tracking-wider">
                    2022 - 2024
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  PROYECTOS A MEDIDA
                </span>
              </div>

              <h4 className="text-sm font-sans font-bold text-white mb-2">
                Desarrolladores de Software Independientes
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-3.5 max-w-4xl">
                Desarrollo de automatizaciones locales con Python y base de datos relacionales PostgreSQL. Configuración y personalización de módulos en Odoo, y corrección de incidencias críticas de rendimiento en aplicaciones Java.
              </p>

              <div className="flex flex-wrap gap-1.5">
                {["Odoo", "PostgreSQL", "Python", "Java", "Web UI"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-[#0a0a0a] border border-neutral-900 text-neutral-400 font-mono text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


