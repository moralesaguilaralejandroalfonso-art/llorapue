import { Profile, Project, Service, Skill } from '../types';
// @ts-ignore
import a23Img from '../assets/images/a23_platform_1782531069589.jpg';
// @ts-ignore
import bakeryImg from '../assets/images/mr_bakery_app_1782531081193.jpg';
// @ts-ignore
import ghostubeImg from '../assets/images/ghostube_app_1782531092815.jpg';

export const initialProfile: Profile = {
  name: "Alex",
  role: "Lead Software Architect & Security Engineer",
  alias: "ghost@code",
  bio: "Diseño y desarrollo sistemas de alto rendimiento y arquitecturas de software seguras. Especializado en optimización de rendimiento, desarrollo Fullstack con React/Node/Go y despliegues en infraestructura cloud resistente.",
  email: "alexmorales3540@gmail.com",
  location: "Silicon Valley, CA (Remoto)",
  github: "github.com/alexmorales",
  linkedin: "linkedin.com/in/alexmorales",
  experience: [
    {
      period: "2024 - Presente",
      role: "Lead Architect",
      company: "GhostCode Technologies",
      description: "Liderazgo técnico en la construcción de APIs ultra rápidas y microservicios escalables. Reducción de latencia en un 40% mediante reestructuración de bases de datos y optimización de caché con Redis.",
      tags: ["Go", "React", "Docker", "AWS", "gRPC"]
    },
    {
      period: "2022 - 2024",
      role: "Senior Full-Stack Engineer",
      company: "Aether Security Labs",
      description: "Desarrollo de páneles interactivos de monitoreo en tiempo real. Implementación de protocolos robustos de autenticación JWT, RBAC y auditoría de seguridad automatizada.",
      tags: ["TypeScript", "Node.js", "React", "PostgreSQL", "GraphQL"]
    },
    {
      period: "2020 - 2022",
      role: "Backend Developer",
      company: "Synthetix Corp",
      description: "Diseño e integración de pipelines de integración continua (CI/CD) y desarrollo de servicios de procesamiento de datos con concurrencia nativa.",
      tags: ["Python", "FastAPI", "MongoDB", "GitHub Actions"]
    }
  ],
  education: [
    {
      period: "2016 - 2020",
      degree: "Ingeniería en Sistemas Computacionales",
      institution: "Universidad Tecnológica"
    },
    {
      period: "2021",
      degree: "Especialidad en Ciberseguridad y Criptografía",
      institution: "Tech Academy"
    }
  ]
};

export const initialServices: Service[] = [
  {
    id: "frontend",
    title: "Desarrollo Frontend Premium",
    description: "Interfaces de usuario de alta precisión, ultra rápidas y responsivas. Foco obsesivo en el rendimiento web, accesibilidad y layouts limpios basados en código reutilizable.",
    iconName: "Monitor",
    technologies: ["React.js", "Vite.js", "Tailwind CSS", "Next.js", "TypeScript"],
    command: "ghost init --frontend",
    codeOutput: `[info] Configurando estructura de diseño minimalista...
[info] Optimizando CSS mediante Tailwind v4...
[info] Analizando tiempos de carga (LCP < 1.2s)...
[success] React App montada con éxito.`
  },
  {
    id: "backend",
    title: "Sistemas & APIs Backend",
    description: "Microservicios escalables y APIs con tiempos de respuesta en milisegundos. Integración robusta de base de datos, colas de mensajes y manejo concurrente seguro.",
    iconName: "Cpu",
    technologies: ["Go / Golang", "Node.js (Express)", "Python", "gRPC / REST", "PostgreSQL"],
    command: "ghost init --backend",
    codeOutput: `[info] Creando pool de conexiones PostgreSQL...
[info] Levantando servidor HTTP en puerto 3000...
[info] Habilitando middleware de compresión y seguridad CORS...
[success] API escuchando peticiones en gRPC / HTTP.`
  },
  {
    id: "security",
    title: "Auditoría & Seguridad Cloud",
    description: "Evaluación exhaustiva de vulnerabilidades y hardening de sistemas. Implementación de OAuth, autenticación multi-factor, cifrado AES-256 y despliegues en contenedores seguros.",
    iconName: "ShieldAlert",
    technologies: ["OAuth 2.0", "Docker / K8s", "Criptografía AES/RSA", "Firewalls", "Snyk"],
    command: "ghost audit --secure",
    codeOutput: `[info] Analizando vulnerabilidades en dependencias...
[info] Verificando cabeceras de seguridad HTTP (Helmet)...
[info] Validando políticas CORS y protección CSRF...
[success] Auditoría terminada: 0 fallas críticas encontradas.`
  }
];

export const initialProjects: Project[] = [
  {
    id: "a23-platform",
    title: "A23 Platform",
    description: "Plataforma de IA de última generación para construir flujos de trabajo, automatizaciones y productos desde cero en minutos sin escribir código.",
    category: "Inteligencia Artificial",
    tags: ["React", "TypeScript", "Tailwind CSS", "Gemini API", "Vite"],
    features: [
      "Intersección perfecta entre IA, productividad y comunidad.",
      "Creación visual de flujos de trabajo automatizados.",
      "Integración sin fricción con modelos de lenguaje masivos (LLM)."
    ],
    codeSnippet: `// A23 Next-Gen AI Workflow Initialization
import { createWorkflow } from '@a23/core';

const myAgent = await createWorkflow({
  name: 'SalesAutomation',
  trigger: 'new_lead_received',
  model: 'gemini-2.5-pro',
  actions: [
    { type: 'summarize', source: 'email_body' },
    { type: 'slack_alert', channel: '#leads' }
  ]
});

console.log('A23 Node compiled and active!');`,
    githubUrl: "https://github.com/alexmorales/a23-platform",
    previewUrl: "https://a23.demo",
    imageUrl: a23Img,
    demoLogs: [
      "Connecting to A23 decentralized node clusters...",
      "AUTH: Token verified via SECURE_SSL.",
      "COMPILING: Building AST graph for SalesAutomation workflow...",
      "SUCCESS: Node compiled. Speed: 23ms. Memory overhead: < 1MB.",
      "Agent monitoring trigger: 'new_lead_received'."
    ]
  },
  {
    id: "mr-bakery",
    title: "Mr. Bakery App",
    description: "Herramienta definitiva diseñada para maestros panaderos, facilitando el cálculo preciso de costos de masas, recetas, balanza rápida y maximización de ingresos.",
    category: "Productividad",
    tags: ["React", "TypeScript", "Tailwind CSS", "Local Storage", "Vite"],
    features: [
      "Gestión inteligente de recetas y costos de materias primas.",
      "Simulador interactivo de balanza rápida de panadería.",
      "Módulo de contabilidad y asistente IA Chef integrado."
    ],
    codeSnippet: `// Mr. Bakery Recipe cost scaling engine
interface Ingredient { name: string; quantityGrams: number; costPerKg: number; }

export function calculateRecipeCost(ingredients: Ingredient[], marginMultiplier = 1.4) {
  const totalCost = ingredients.reduce((sum, ing) => {
    return sum + (ing.quantityGrams / 1000) * ing.costPerKg;
  }, 0);
  
  return {
    rawCost: totalCost,
    recommendedPrice: totalCost * marginMultiplier
  };
}`,
    githubUrl: "https://github.com/alexmorales/mr-bakery",
    previewUrl: "https://mrbakery.demo",
    imageUrl: bakeryImg,
    demoLogs: [
      "Initializing Mr. Bakery Local Database...",
      "RECIPES: Loaded 24 saved fórmulas (Panettone, Sourdough, Baguette).",
      "CALCULATOR: Calibrando báscula rápida... Cero absoluto ajustado.",
      "AI_CHEF: Loaded baking assistance agent model successfully.",
      "System fully operational. Current dollar rate: 40.00 Bs."
    ]
  },
  {
    id: "ghostube",
    title: "Ghostube Stream",
    description: "Sitio web de streaming de alta fidelidad ambientado en el anime Neon Runners: Ghost Circuit, optimizado para reproducción ultra fluida y navegación fluida.",
    category: "Multimedia",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Motion"],
    features: [
      "Reproductor de video adaptativo con baja latencia.",
      "Interfaz cyberpunk inmersiva con animaciones de transición fluidas.",
      "Búsqueda interactiva de episodios con filtros inteligentes."
    ],
    codeSnippet: `// Ghostube stream player mount sequence
import { mountPlayer } from 'ghostube-core-stream';

export function initializeEpisodeStream(episodeId: string) {
  const stream = mountPlayer({
    source: \`https://cdn.ghostube.xyz/streams/\${episodeId}/manifest.m3u8\`,
    lowLatencyMode: true,
    audioTrack: 'japanese_subbed'
  });
  
  console.log(\`Buffering Neon Runners Episode: \${episodeId}\`);
}`,
    githubUrl: "https://github.com/alexmorales/ghostube",
    previewUrl: "https://ghostube.demo",
    imageUrl: ghostubeImg,
    demoLogs: [
      "Buffering high-fidelity live stream manifest from CDN...",
      "STREAM: Resolving host cdn.ghostube.xyz... Connected (12ms).",
      "CODEC: Decoding H.265 stream on hardware acceleration.",
      "AUDIO: Japanese stereophonic audio tracks synchronized.",
      "EPISODE: Playback active. Latency margin: 0.14s."
    ]
  }
];

export const initialSkills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95, icon: "Code2" },
      { name: "TypeScript", level: 90, icon: "Shield" },
      { name: "Tailwind CSS", level: 98, icon: "Palette" },
      { name: "Vite / Bundlers", level: 85, icon: "Zap" }
    ]
  },
  {
    category: "Backend & DB",
    items: [
      { name: "Node.js (Express)", level: 92, icon: "Server" },
      { name: "Go (Golang)", level: 80, icon: "Cpu" },
      { name: "PostgreSQL", level: 88, icon: "Database" },
      { name: "Redis", level: 82, icon: "Zap" }
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", level: 88, icon: "FolderGit" },
      { name: "Git / CI/CD", level: 90, icon: "GitBranch" },
      { name: "AWS Cloud", level: 80, icon: "Cloud" },
      { name: "Ciberseguridad", level: 85, icon: "Lock" }
    ]
  }
];
