import { useState, useEffect, useRef } from "react";
import { Play, RotateCcw, CheckCircle2, AlertTriangle, Terminal } from "lucide-react";
import { sanitizeSqlInput, executeSecurePreparedCall } from "../utils/security";

interface TerminalWidgetProps {
  onExecute?: (success: boolean) => void;
}

export default function TerminalWidget({ onExecute }: TerminalWidgetProps) {
  const [activeTab, setActiveTab] = useState<"code" | "skills" | "env">("code");
  const [isCompiling, setIsCompiling] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string[]>([]);
  const [hasExecuted, setHasExecuted] = useState(false);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto cleanup interval on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const tabs = [
    { id: "code", label: "ghost.config.js" },
    { id: "skills", label: "stack.json" },
    { id: "env", label: ".env.production" }
  ] as const;

  const codeSnippets = {
    code: `// Ghost Code - init()
const ghost = new GhostCode({
  security: 'max',
  performance: 'optimal',
  scale: Infinity
});

ghost.build({
  frontend: ['React', 'Next.js', 'Vite'],
  backend: ['Node', 'Go', 'Postgres'],
  cloud:    ['GCP', 'Docker', 'AWS']
});`,
    skills: `{
  "core_competencies": {
    "frontend": ["TypeScript", "Tailwind CSS", "Redux", "D3.js"],
    "backend": ["REST APIs", "gRPC", "WebSockets", "Redis"],
    "devops": ["Docker Compose", "CI/CD Pipelines", "Linux Admin"]
  },
  "metrics": {
    "uptime_target": "99.99%",
    "unit_test_coverage": ">90%",
    "clean_code_standards": "strict"
  }
}`,
    env: `# Security Configuration
APP_URL="https://ghostcode.dev"
SECRET_KEY="*********"
DATABASE_URL="postgresql://db_user:********@db-node"

# Performance Tuning
NODE_ENV="production"
ENABLE_CACHE=true
COMPRESSION_LEVEL=9
MAX_CONNECTION_POOL=50`
  };

  const handleRun = () => {
    if (isCompiling) return;
    
    // Clear any existing active interval before starting a new run
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsCompiling(true);
    setHasExecuted(true);
    setExecutionOutput([]);

    // Internal Security Hardening: Simulate prepared statement connection parameters
    const rawDbUrl = "postgresql://db_user:********@db-node";
    const sanitizedUrl = sanitizeSqlInput(rawDbUrl);
    
    // Execute secure parameterized query simulation internally
    const secureConn = executeSecurePreparedCall(
      "SELECT 1 FROM pg_database WHERE datname = ?",
      ["ghost_db"]
    );

    const steps = [
      "> loading ghost.config.js parameters...",
      `> securing database session [PreparedStatements: ${secureConn.secure ? "ACTIVE" : "INACTIVE"}]`,
      "> authenticating security keys [OK]",
      "> compiling typescript modules into bundle...",
      "> analyzing web performance metrics (Target: LCP < 1.2s)",
      "> testing connection pool to database... [SUCCESS]",
      "> active deployment running at PORT :3000"
    ];

    let currentStep = 0;
    intervalRef.current = setInterval(() => {
      if (currentStep < steps.length) {
        setExecutionOutput((prev) => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setIsCompiling(false);
        if (onExecute) onExecute(true);
      }
    }, 450);
  };

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsCompiling(false);
    setHasExecuted(false);
    setExecutionOutput([]);
  };

  return (
    <div 
      className="relative flex flex-col w-full rounded-lg border border-neutral-800/80 bg-neutral-950/75 backdrop-blur-md shadow-2xl overflow-hidden font-mono"
      id="terminal-widget-container"
    >
      {/* Window Title Bar */}
      <div className="flex h-11 items-center justify-between border-b border-neutral-900/60 bg-neutral-950/40 px-4 select-none">
        {/* macOS Style Window Controls */}
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
          <div className="h-3 w-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
        </div>

        {/* File Tabs */}
        <div className="flex space-x-1.5 h-full pt-1.5" id="terminal-tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (!isCompiling) {
                    setActiveTab(tab.id);
                  }
                }}
                disabled={isCompiling}
                className={`flex items-center px-3 text-[11px] h-full rounded-t-md border-t border-x transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? "border-neutral-900/60 bg-neutral-900/40 text-white font-medium"
                    : "border-transparent bg-transparent text-neutral-500 hover:text-neutral-300"
                }`}
                id={`terminal-tab-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-2" id="terminal-actions">
          {hasExecuted ? (
            <button
              onClick={handleReset}
              className="flex items-center space-x-1 text-[10px] text-neutral-400 hover:text-white transition-colors py-1 px-2 rounded hover:bg-neutral-900 border border-neutral-900 cursor-pointer"
              title="Restaurar consola"
            >
              <RotateCcw className="h-3 w-3" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          ) : (
            <button
              onClick={handleRun}
              disabled={isCompiling}
              className="flex items-center space-x-1 text-[10px] text-green-400 hover:text-green-300 transition-colors py-1 px-2.5 rounded bg-green-950/40 hover:bg-green-950/60 border border-green-900/60 cursor-pointer"
            >
              <Play className="h-3 w-3 fill-green-400" />
              <span>EJECUTAR</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Terminal Area */}
      <div className="flex-1 relative flex flex-col p-5 text-xs text-neutral-300 leading-relaxed min-h-[320px] overflow-auto bg-transparent">
        
        {!hasExecuted ? (
          <pre className="text-neutral-300 select-all font-mono whitespace-pre overflow-x-auto">
            <code>{codeSnippets[activeTab]}</code>
          </pre>
        ) : (
          <div className="flex-1 flex flex-col justify-between font-mono" id="compilation-log">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-neutral-500">
                <Terminal className="h-3.5 w-3.5" />
                <span>compiling source at localhost:3000...</span>
              </div>
              <div className="space-y-1.5 pl-1">
                {executionOutput.map((line, idx) => {
                  let colorClass = "text-neutral-400";
                  if (line && (line.includes("[SUCCESS]") || line.includes("[OK]"))) {
                    colorClass = "text-green-400 font-medium";
                  } else if (line && line.includes("running at PORT")) {
                    colorClass = "text-cyan-400 font-bold";
                  }
                  return (
                    <div key={idx} className={`text-[11px] leading-relaxed ${colorClass}`}>
                      {line}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Compilation Status Indicator */}
            <div className="mt-6 pt-4 border-t border-neutral-900/60 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {isCompiling ? (
                  <div className="flex items-center space-x-1.5 text-yellow-500">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider">COMPILANDO...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-1.5 text-green-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-[11px] font-bold uppercase tracking-wider">COMPILADO CON ÉXITO</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-neutral-500">Time: {isCompiling ? "..." : "1.35s"}</span>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Tray */}
      <div className="flex h-7 items-center justify-between border-t border-neutral-950/40 bg-neutral-950/40 px-4 text-[10px] text-neutral-600 select-none">
        <span>UTF-8</span>
        <span>JavaScript (Node.js)</span>
        <span>Ln 10, Col 4</span>
      </div>
    </div>
  );
}
