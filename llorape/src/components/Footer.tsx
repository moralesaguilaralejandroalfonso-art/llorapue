import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-950 py-10 px-4 sm:px-6 lg:px-8 font-mono select-none" id="app-footer">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Copy */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center text-white">
            <span className="font-display text-xs font-bold tracking-[0.15em]">GHOSTCODE</span>
          </div>
          <span className="text-[10px] text-neutral-600">
            © {new Date().getFullYear()} GHOSTCODE. Todos los derechos reservados.
          </span>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center space-x-4 text-xs">
          <a
            href="https://github.com/alexmorales"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-600 hover:text-white transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
