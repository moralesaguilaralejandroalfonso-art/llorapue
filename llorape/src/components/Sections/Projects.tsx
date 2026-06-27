import { useState, useEffect, useRef } from "react";
import { Project } from "../../types";
import { initialProjects } from "../../data/portfolioData";
import { FolderGit, ExternalLink, Code, Terminal, Play, AlertCircle } from "lucide-react";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Record<string, "desc" | "code" | "demo">>({});
  const [runningDemo, setRunningDemo] = useState<Record<string, boolean>>({});
  const [demoLogs, setDemoLogs] = useState<Record<string, string[]>>({});
  
  const intervalsRef = useRef<Record<string, any>>({});

  // Auto clean up all demo intervals when the component unmounts
  useEffect(() => {
    return () => {
      Object.values(intervalsRef.current).forEach((interval: any) => {
        if (interval) {
          clearInterval(interval);
        }
      });
    };
  }, []);

  const handleTabChange = (projectId: string, tab: "desc" | "code" | "demo") => {
    setActiveTab((prev) => ({ ...prev, [projectId]: tab }));
    // If switching away from demo, clear the running demo to prevent background state updates
    if (tab !== "demo") {
      handleClearDemo(projectId);
    }
  };

  const handleRunDemo = (projectId: string, logs: string[]) => {
    if (runningDemo[projectId]) return;

    // Clear any existing active interval for this project
    if (intervalsRef.current[projectId]) {
      clearInterval(intervalsRef.current[projectId]);
    }

    setRunningDemo((prev) => ({ ...prev, [projectId]: true }));
    setDemoLogs((prev) => ({ ...prev, [projectId]: [] }));

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < logs.length) {
        setDemoLogs((prev) => ({
          ...prev,
          [projectId]: [...(prev[projectId] || []), logs[currentLog]],
        }));
        currentLog++;
      } else {
        clearInterval(interval);
        delete intervalsRef.current[projectId];
        setRunningDemo((prev) => ({ ...prev, [projectId]: false }));
      }
    }, 450);

    intervalsRef.current[projectId] = interval;
  };

  const handleClearDemo = (projectId: string) => {
    if (intervalsRef.current[projectId]) {
      clearInterval(intervalsRef.current[projectId]);
      delete intervalsRef.current[projectId];
    }
    setRunningDemo((prev) => ({ ...prev, [projectId]: false }));
    setDemoLogs((prev) => {
      const copy = { ...prev };
      delete copy[projectId];
      return copy;
    });
  };

  return (
    <section id="portafolio" className="relative bg-black border-t border-neutral-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:100%_8rem] opacity-20 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start space-y-3 mb-14" id="projects-header">
          <span className="font-mono text-xs tracking-[0.25em] text-green-400 uppercase">
            [ 02 // PORTAFOLIO ]
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Proyectos Destacados
          </h2>
          <div className="h-0.5 w-12 bg-white" />
          <p className="font-sans text-neutral-400 text-sm max-w-xl">
            Un vistazo a sistemas reales, APIs robustas y librerías de interfaz desarrolladas bajo altos estándares técnicos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="projects-grid">
          {initialProjects.map((project) => {
            const currentActiveTab = activeTab[project.id] || "desc";
            const logs = demoLogs[project.id];
            const isRunning = runningDemo[project.id];

            return (
              <div
                key={project.id}
                className="flex flex-col h-[580px] rounded border border-neutral-900 bg-neutral-950 hover:border-neutral-800 transition-all duration-150 overflow-hidden"
                id={`project-card-${project.id}`}
              >
                
                {/* Project Image Thumbnail */}
                {project.imageUrl && (
                  <div className="h-40 w-full overflow-hidden border-b border-neutral-900 relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 to-transparent" />
                  </div>
                )}
                
                {/* Project Header Banner */}
                <div className="p-5 border-b border-neutral-900 flex items-center justify-between bg-neutral-950/60">
                  <div className="flex items-center space-x-2.5">
                    <FolderGit className="h-4.5 w-4.5 text-neutral-400" />
                    <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">{project.category}</span>
                  </div>
                  
                  {/* Tabs bar */}
                  <div className="flex space-x-1" id={`project-tabs-${project.id}`}>
                    {(["desc", "code", "demo"] as const).map((tab) => {
                      const tabLabels = { desc: "Detalles", code: "Código", demo: "Terminal" };
                      const isActive = currentActiveTab === tab;
                      return (
                        <button
                          key={tab}
                          onClick={() => handleTabChange(project.id, tab)}
                          className={`px-2.5 py-1 text-[9.5px] font-mono tracking-wider rounded border transition-colors cursor-pointer ${
                            isActive
                              ? "bg-neutral-900 border-neutral-800 text-white font-medium"
                              : "border-transparent text-neutral-500 hover:text-neutral-300"
                          }`}
                        >
                          {tabLabels[tab]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main Tab Area */}
                <div className="flex-1 p-5 overflow-y-auto bg-neutral-950 flex flex-col justify-between">
                  
                  {/* TAB 1: DESCRIPTION */}
                  {currentActiveTab === "desc" && (
                    <div className="space-y-4" id={`desc-tab-content-${project.id}`}>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="font-sans text-neutral-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">CARACTERÍSTICAS</span>
                        <ul className="space-y-1.5 text-xs text-neutral-300 list-none pl-0">
                          {project.features.map((feat, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-green-500 font-mono select-none mt-0.5">•</span>
                              <span className="font-sans text-neutral-300 leading-relaxed">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: CODE SNIPPET */}
                  {currentActiveTab === "code" && (
                    <div className="flex-1 flex flex-col" id={`code-tab-content-${project.id}`}>
                      <div className="flex-1 bg-black rounded p-3.5 border border-neutral-900 overflow-auto max-h-[290px]">
                        <pre className="font-mono text-[10.5px] text-neutral-300 whitespace-pre overflow-x-auto leading-relaxed">
                          <code>{project.codeSnippet}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: DEMO TERMINAL */}
                  {currentActiveTab === "demo" && (
                    <div className="flex-1 flex flex-col" id={`demo-tab-content-${project.id}`}>
                      <div className="flex-1 bg-black border border-neutral-900 rounded p-4 flex flex-col justify-between max-h-[290px] min-h-[200px]">
                        
                        {/* Terminal Screen log */}
                        <div className="font-mono text-[10.5px] leading-relaxed overflow-y-auto flex-grow space-y-1.5 text-neutral-400">
                          {!logs ? (
                            <div className="flex flex-col items-center justify-center h-full text-center py-6">
                              <Terminal className="h-5 w-5 text-neutral-600 mb-2" />
                              <span className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">PRUEBA DE COMPILADOR</span>
                              <button
                                onClick={() => handleRunDemo(project.id, project.demoLogs)}
                                className="mt-3 flex items-center space-x-1.5 px-3 py-1 bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 rounded text-[9.5px] font-mono tracking-wider cursor-pointer transition-all"
                              >
                                <Play className="h-2.5 w-2.5 fill-current" />
                                <span>CORRER SCRIPT</span>
                              </button>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              {logs.map((logLine, idx) => {
                                let style = "text-neutral-400";
                                if (logLine && (logLine.includes("SUCCESS") || logLine.includes("Verified"))) {
                                  style = "text-green-400";
                                } else if (logLine && (logLine.includes("SELECT") || logLine.includes("ROUTING"))) {
                                  style = "text-pink-400 font-medium";
                                }
                                return (
                                  <div key={idx} className={style}>
                                    &gt; {logLine}
                                  </div>
                                );
                              })}
                              {isRunning && (
                                <div className="text-yellow-500 animate-pulse text-[10px] mt-2">
                                  Compilando...
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Logs reset/indicator if active */}
                        {logs && !isRunning && (
                          <div className="pt-2 mt-2 border-t border-neutral-900 flex justify-between items-center">
                            <span className="text-[9px] text-green-400 font-mono tracking-wider uppercase flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-400 mr-1.5" />
                              OK
                            </span>
                            <button
                              onClick={() => handleClearDemo(project.id)}
                              className="text-[9px] text-neutral-500 hover:text-white font-mono cursor-pointer"
                            >
                              Reset
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Tech stack badge list bottom alignment */}
                  <div className="pt-4 border-t border-neutral-950 flex flex-wrap gap-1 mt-auto" id={`project-stack-${project.id}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] text-neutral-500 bg-neutral-900/50 border border-neutral-950 px-1.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
