import { useState, useRef, useEffect } from "react";
import { Activity, Cpu, Layers, Network, Terminal, Zap, Compass, ChevronRight, CornerDownRight } from "lucide-react";

interface AstNode {
  id: string;
  name: string;
  type: "function" | "tensor" | "pipeline" | "kernel";
  x: number; // percentage
  y: number; // percentage
  latency: string;
  status: "idle" | "evaluating" | "converged";
  speculativeDepth: number;
}

const SAMPLE_NODES: AstNode[] = [
  { id: "NODE_01", name: "substrate.ast.synthesize()", type: "function", x: 18, y: 28, latency: "0.28ms", status: "converged", speculativeDepth: 64 },
  { id: "NODE_02", name: "antigravity.speculative_jit", type: "kernel", x: 52, y: 20, latency: "0.14ms", status: "evaluating", speculativeDepth: 128 },
  { id: "NODE_03", name: "cursor.multi_file_lattice", type: "pipeline", x: 82, y: 35, latency: "0.42ms", status: "converged", speculativeDepth: 96 },
  { id: "NODE_04", name: "opencode.ambient_memory", type: "tensor", x: 30, y: 68, latency: "0.31ms", status: "converged", speculativeDepth: 32 },
  { id: "NODE_05", name: "arcadia.agent_dispatcher", type: "pipeline", x: 68, y: 72, latency: "0.19ms", status: "evaluating", speculativeDepth: 160 },
];

const MODES = [
  {
    id: "speculative",
    title: "Speculative AST Topology",
    subtitle: "Antigravity & Cursor Multi-file Prediction Engine",
    description: "Evaluates ahead-of-time code mutations directly on continuous AST lattices before the user keystroke finishes settling.",
    icon: Zap,
    metric: "0.18ms",
    metricLabel: "Prediction Latency",
    badge: "Antigravity Core",
  },
  {
    id: "lattice",
    title: "Sub-millisecond Agent RPC",
    subtitle: "OpenCode Distributed Mesh Protocol",
    description: "Bidirectional high-throughput RPC channel synchronizing code diffs, workspace context, and subagent state trees in single-digit microseconds.",
    icon: Network,
    metric: "12.4 GB/s",
    metricLabel: "Lattice Throughput",
    badge: "Zero-Copy IPC",
  },
  {
    id: "tensor",
    title: "Spatial Tensor Memory",
    subtitle: "Deep Semantic Embedding Graph",
    description: "Continuous spatial coordinate system mapping every function, dependency, and variable across multi-repo workspaces for instant retrieval.",
    icon: Layers,
    metric: "1.2M",
    metricLabel: "Context Symbols",
    badge: "Sub-token Index",
  },
  {
    id: "kernel",
    title: "Autonomous Tool Harness",
    subtitle: "Arcadia Execution Sandbox",
    description: "Isolated ephemeral runtimes with hot module swapping, static verification proofs, and deterministic sandbox telemetry.",
    icon: Cpu,
    metric: "99.98%",
    metricLabel: "Deterministic Proofs",
    badge: "Wasm & Native",
  },
];

export function GridlineMatrix() {
  const [activeMode, setActiveMode] = useState(0);
  const [selectedNode, setSelectedNode] = useState<AstNode>(SAMPLE_NODES[1]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, relX: 0, relY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [, setPings] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({
      x: Math.round(x),
      y: Math.round(y),
      relX: Math.round((x / rect.width) * 100),
      relY: Math.round((y / rect.height) * 100),
    });
  };

  const triggerNodeClick = (node: AstNode) => {
    setSelectedNode(node);
    setPings((prev) => [...prev.slice(-4), Date.now()]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPings((prev) => [...prev.slice(-3), Date.now()]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-ink-200/80 bg-sand-100/90 shadow-2xl backdrop-blur-xl">
      {/* Top Header Bar / HUD Info */}
      <div className="flex flex-wrap items-center justify-between border-b border-ink-200/60 bg-sand-200/60 px-5 py-3.5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-ink-900">
              GRIDLINE TELEMETRY MATRIX
            </span>
          </div>
          <span className="hidden font-mono text-[11px] text-ink-400 sm:inline">
            // Antigravity &times; Cursor &times; OpenCode Specification
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-ink-600">
          <div className="flex items-center gap-1.5 rounded bg-sand-100 px-2.5 py-1 border border-ink-200/60 shadow-xs">
            <Compass className="h-3.5 w-3.5 text-accent-500" />
            <span>
              LAT: <span className="text-ink-900 font-semibold">{mousePos.relX.toString().padStart(2, "0")}%</span> LON: <span className="text-ink-900 font-semibold">{mousePos.relY.toString().padStart(2, "0")}%</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1.5 rounded bg-sand-100 px-2.5 py-1 border border-ink-200/60 shadow-xs">
            <Activity className="h-3.5 w-3.5 text-emerald-600" />
            <span>RTT: <span className="text-emerald-700 font-semibold">&lt;0.22ms</span></span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Interactive 21st.dev / Skiper.ui Animated Grid Surface (7 cols) */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative min-h-[420px] lg:min-h-[520px] lg:col-span-7 bg-radial from-sand-50 via-sand-100 to-sand-200/90 overflow-hidden border-b lg:border-b-0 lg:border-r border-ink-200/60 select-none cursor-crosshair"
        >
          {/* Background Matrix Pattern */}
          <div className="absolute inset-0 grid-matrix-pattern opacity-60 pointer-events-none" />
          <div className="absolute inset-0 grid-matrix-fine opacity-40 pointer-events-none" />

          {/* Skiper.ui Moving Laser Beams */}
          <div className="absolute top-[28%] left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-accent-500 to-transparent beam-travel-h pointer-events-none shadow-[0_0_12px_rgba(217,119,6,0.6)]" />
          <div className="absolute top-[68%] left-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-mineral-500 to-transparent beam-travel-h pointer-events-none [animation-delay:2s] shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
          <div className="absolute top-0 left-[35%] w-[1px] h-36 bg-gradient-to-b from-transparent via-accent-500 to-transparent beam-travel-v pointer-events-none [animation-delay:1s] shadow-[0_0_12px_rgba(217,119,6,0.6)]" />
          <div className="absolute top-0 left-[75%] w-[1px] h-48 bg-gradient-to-b from-transparent via-emerald-500 to-transparent beam-travel-v pointer-events-none [animation-delay:3.5s] shadow-[0_0_12px_rgba(16,185,129,0.6)]" />

          {/* Mouse Crosshair Laser Follower */}
          {isHovered && (
            <>
              <div
                className="absolute top-0 bottom-0 w-[1px] bg-accent-500/40 pointer-events-none transition-transform duration-75"
                style={{ transform: `translateX(${mousePos.x}px)` }}
              />
              <div
                className="absolute left-0 right-0 h-[1px] bg-accent-500/40 pointer-events-none transition-transform duration-75"
                style={{ transform: `translateY(${mousePos.y}px)` }}
              />
              <div
                className="absolute pointer-events-none z-30 font-mono text-[10px] text-accent-700 bg-sand-50/90 border border-accent-300/80 px-2 py-0.5 rounded shadow-sm"
                style={{ left: Math.min(mousePos.x + 12, 380), top: Math.max(mousePos.y - 24, 10) }}
              >
                NODE_HOVER // {selectedNode.id}
              </div>
            </>
          )}

          {/* Connected SVG Topology Vectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="gridline-vector-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <polyline
              points="18%,28% 52%,20% 82%,35% 68%,72% 30%,68% 18%,28%"
              fill="rgba(217, 119, 6, 0.02)"
              stroke="url(#gridline-vector-grad)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-pulse"
            />
            <line x1="52%" y1="20%" x2="68%" y2="72%" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="18%" y1="28%" x2="82%" y2="35%" stroke="rgba(217, 119, 6, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* Interactive AST Topology Nodes */}
          {SAMPLE_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => triggerNodeClick(node)}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
              >
                {/* Outer Ping Ring */}
                {isSelected && (
                  <span className="absolute -inset-3 rounded-full bg-accent-500/25 animate-ping" />
                )}

                {/* Node Pill Card */}
                <div
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-300 shadow-md ${
                    isSelected
                      ? "bg-sand-50 border-accent-500 shadow-accent-500/10 scale-105"
                      : "bg-sand-100/90 border-ink-200/70 hover:border-ink-400 hover:bg-sand-50"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      node.status === "converged"
                        ? "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]"
                        : "bg-amber-500 animate-pulse shadow-[0_0_6px_rgba(245,158,11,0.8)]"
                    }`}
                  />
                  <div className="flex flex-col text-left">
                    <span className="font-mono text-[10px] uppercase font-bold text-ink-900 tracking-wider">
                      {node.id}
                    </span>
                    <span className="font-mono text-[9px] text-ink-500 truncate max-w-[110px]">
                      {node.name.replace("()", "")}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-accent-700 bg-sand-200/80 px-1.5 py-0.5 rounded ml-1 font-medium">
                    {node.latency}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Bottom Grid Overlay Badge */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 rounded-md bg-sand-50/90 border border-ink-200/80 px-3 py-1.5 text-[11px] font-mono text-ink-700 backdrop-blur-sm shadow-xs">
              <Terminal className="h-3.5 w-3.5 text-accent-600" />
              <span>ACTIVE TARGET: <strong className="text-ink-900">{selectedNode.name}</strong></span>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-md bg-sand-50/90 border border-ink-200/80 px-3 py-1.5 text-[11px] font-mono text-ink-700 backdrop-blur-sm shadow-xs">
              <span>DEPTH: <strong className="text-ink-900">{selectedNode.speculativeDepth} L1 TOKENS</strong></span>
            </div>
          </div>
        </div>

        {/* Right Module Control & Spec Switcher (5 cols) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-sand-50/70">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-accent-600 font-semibold">
                // SPECIFICATION MATRIX
              </span>
              <span className="rounded-full bg-accent-100 text-accent-800 border border-accent-300/60 px-2.5 py-0.5 font-mono text-[10px] font-semibold">
                {MODES[activeMode].badge}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-ink-900 tracking-tight mb-2">
              {MODES[activeMode].title}
            </h3>
            <p className="font-mono text-xs text-ink-500 mb-4">
              {MODES[activeMode].subtitle}
            </p>
            <p className="text-sm text-ink-700 leading-relaxed mb-6 font-sans">
              {MODES[activeMode].description}
            </p>

            {/* Mode Metric Box */}
            <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-sand-200/50 border border-ink-200/70">
              <div>
                <span className="block font-mono text-[10px] uppercase text-ink-500 tracking-wider">
                  {MODES[activeMode].metricLabel}
                </span>
                <span className="font-mono text-2xl font-semibold text-ink-900">
                  {MODES[activeMode].metric}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-ink-500 tracking-wider">
                  Active AST Nodes
                </span>
                <span className="font-mono text-2xl font-semibold text-accent-600">
                  {selectedNode.speculativeDepth * 4}
                </span>
              </div>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="space-y-2">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-400 mb-2">
                SELECT ARCHITECTURE MODE
              </span>
              {MODES.map((mode, idx) => {
                const Icon = mode.icon;
                const isCurrent = activeMode === idx;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(idx)}
                    className={`w-full text-left flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                      isCurrent
                        ? "bg-sand-100 border-ink-900 shadow-xs"
                        : "bg-transparent border-ink-200/60 hover:bg-sand-100/60 hover:border-ink-300 text-ink-600"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-1.5 rounded-md ${
                          isCurrent ? "bg-ink-900 text-sand-50" : "bg-sand-200 text-ink-600"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <span className={`block text-xs font-semibold ${isCurrent ? "text-ink-900" : "text-ink-700"}`}>
                          {mode.title}
                        </span>
                        <span className="block font-mono text-[10px] text-ink-400 truncate max-w-[200px]">
                          {mode.subtitle}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${
                        isCurrent ? "text-ink-900 translate-x-0.5" : "text-ink-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Terminal Footer Line */}
          <div className="mt-8 pt-4 border-t border-ink-200/60 flex items-center justify-between font-mono text-[11px] text-ink-500">
            <div className="flex items-center gap-1.5">
              <CornerDownRight className="h-3.5 w-3.5 text-accent-500" />
              <span>speculative_threads: ok</span>
            </div>
            <span className="text-emerald-700 font-semibold">SYNCHRONIZED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
