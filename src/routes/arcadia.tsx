import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SpectralMark } from "@/components/SpectralMark";
import { TiltCard } from "@/components/TiltCard";
import { Reveal } from "@/components/Reveal";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { CountUp } from "@/components/anim/CountUp";

export const Route = createFileRoute("/arcadia")({
  head: () => ({
    meta: [
      { title: "Arcadia — Autonomous Agent Assistant on Substrate" },
      {
        name: "description",
        content:
          "Arcadia is Substrate's autonomous agent assistant: fleet orchestration, local-first intelligence, automated triggers, and IDE-native pair engineering.",
      },
      { property: "og:title", content: "Arcadia — Autonomous Agent Assistant" },
      {
        property: "og:description",
        content:
          "Launch fleets of autonomous agents that work in parallel across your terminal, browser, Slack, and codebase.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArcadiaPage,
});

const MODELS = [
  { id: "gpt5", name: "GPT-5.6 Sol", note: "Suggested", badge: "Default" },
  { id: "grok", name: "Grok 4.6", note: "Reasoning", badge: "Fast" },
  { id: "fable", name: "Fable 5.1", note: "Max", badge: "Precision" },
  { id: "opus", name: "Claude Opus 5", note: "Deep Thought", badge: "Complex" },
  { id: "gemini", name: "Gemini 3.1 Pro", note: "Long Context", badge: "2M Token" },
  { id: "kernel", name: "Kernel 2.0 MultiModal", note: "Native Substrate", badge: "Local-First" },
];

const FLEET_TASKS = [
  {
    id: "task-1",
    title: "Fix sign-in redirect on iOS",
    repo: "cursor/mobile",
    status: "working",
    progress: 78,
    agent: "Arcadia-Delta",
    substeps: "Inspecting Safari WebKit auth callback loop",
  },
  {
    id: "task-2",
    title: "Add rate limits to public routes",
    repo: "cursor/api",
    status: "verified",
    progress: 100,
    agent: "Arcadia-Echo",
    substeps: "Merged sliding-window Redis middleware",
  },
  {
    id: "task-3",
    title: "Cache repository search results",
    repo: "cursor/web",
    status: "working",
    progress: 45,
    agent: "Arcadia-Beta",
    substeps: "Benchmarking LRU memory footprint",
  },
  {
    id: "task-4",
    title: "Investigate flaky CI shard 4",
    repo: "cursor/infra",
    status: "planning",
    progress: 20,
    agent: "Arcadia-Prime",
    substeps: "Tracing race condition in headless browser cluster",
  },
];

const PRESETS = [
  {
    label: "Refactor API Auth",
    prompt: "Migrate auth token refresh mechanism to PKCE and write unit tests",
  },
  {
    label: "Fix Flaky Tests",
    prompt: "Investigate flaky integration tests in test_websocket_sync.py and fix race conditions",
  },
  {
    label: "Build Full Feature",
    prompt: "Create an interactive 3D particle widget with three.js and integrate into dashboard",
  },
];

export function ArcadiaPage() {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]);
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [activeCliTab, setActiveCliTab] = useState<"ps" | "sh">("ps");
  const [copiedCli, setCopiedCli] = useState(false);

  // Interactive Workbench Simulation State
  const [simPrompt, setSimPrompt] = useState(
    "Implement autonomous background sync with retry backoff and telemetry",
  );
  const [simRunning, setSimRunning] = useState(false);
  const [simStep, setSimStep] = useState(0);

  // Trigger Studio State
  const [triggerInterval] = useState("Every hour");
  const [triggerChannel] = useState("#bug-reports");
  const [autoBranch] = useState("main");
  const [agentInstructions, setAgentInstructions] = useState(
    "Your task is to fix CI failures on main. Avoid racing other agents. Root cause by checking logs. Report with /apply-report-format",
  );
  const [automationActive, setAutomationActive] = useState(true);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const runSimulation = () => {
    if (simRunning) return;
    setSimRunning(true);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 900);
    setTimeout(() => setSimStep(3), 1900);
    setTimeout(() => setSimStep(4), 2800);
    setTimeout(() => {
      setSimStep(5);
      setSimRunning(false);
    }, 3800);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        <div className="hero-cloudscape" aria-hidden="true" />
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-card/70 px-4 py-1.5 shadow-sm backdrop-blur-md"
            >
              <SpectralMark variant="arcadia" className="h-5 w-5 text-primary" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-medium">
                Arcadia Agent Platform
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[0.625rem] font-mono text-primary">
                v2.4
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 text-5xl leading-[1.04] font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            >
              The autonomous agent <br />
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-clip-text text-transparent">
                built into your codebase.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              Like OpenClaw and Meta's Muse, Arcadia orchestrates parallel fleets of autonomous agents
              to plan, code, review PRs, and maintain software across all your systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#workbench"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-xl transition-all hover:scale-[1.02]"
              >
                Launch Arcadia Agent
                <span>↓</span>
              </a>
              <a
                href="#fleets"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                Fleet Orchestration
                <span>→</span>
              </a>
            </motion.div>
          </div>

          {/* 3D Interactive Workbench Demo */}
          <div id="workbench" className="mt-16 perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateX: 12, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-4xl rounded-2xl border border-border/80 bg-[#121110]/95 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-500 hover:rotate-x-1"
            >
              {/* Window Bar */}
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#f25b20]/60" />
                  <div className="h-3 w-3 rounded-full bg-[#c8b27c]/60" />
                  <div className="h-3 w-3 rounded-full bg-[#5b9b92]/60" />
                  <span className="ml-3 font-mono text-xs text-muted-foreground flex items-center gap-2">
                    <SpectralMark variant="arcadia" className="h-3.5 w-3.5 text-primary" />
                    arcadia-agent: ~/runtime/workspace
                  </span>
                </div>

                {/* Model Selector Dropdown (Cursor Reference Style) */}
                <div className="relative">
                  <button
                    onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                    className="flex items-center gap-2 rounded-lg border border-border/80 bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
                  >
                    <span className="text-primary font-mono">∞ Agent</span>
                    <span className="text-border">|</span>
                    <span>{selectedModel.name}</span>
                    <span className="text-[0.65rem] text-muted-foreground">▾</span>
                  </button>

                  <AnimatePresence>
                    {modelDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        className="absolute right-0 z-50 mt-2 w-64 rounded-xl border border-border bg-[#181614] p-2 shadow-2xl backdrop-blur-xl"
                      >
                        <p className="px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                          Select Intelligence Core
                        </p>
                        <div className="space-y-1">
                          {MODELS.map((m) => (
                            <button
                              key={m.id}
                              onClick={() => {
                                setSelectedModel(m);
                                setModelDropdownOpen(false);
                              }}
                              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-xs transition-colors ${
                                selectedModel.id === m.id
                                  ? "bg-primary/15 text-primary font-medium"
                                  : "text-foreground hover:bg-card"
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span>{m.name}</span>
                                {m.note && (
                                  <span className="text-[0.625rem] text-muted-foreground">
                                    {m.note}
                                  </span>
                                )}
                              </div>
                              <span className="rounded border border-border/60 px-1.5 py-0.5 font-mono text-[0.6rem] text-muted-foreground">
                                {m.badge}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Prompt Input Box */}
              <div className="mt-5">
                <label className="block text-xs font-mono text-muted-foreground mb-2">
                  Ask Arcadia to plan, edit, or execute anything
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={simPrompt}
                      onChange={(e) => setSimPrompt(e.target.value)}
                      placeholder="E.g. Fix flaky CI shard 4, add telemetry hooks, refactor router"
                      className="w-full rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <div className="absolute right-3 top-3 hidden items-center gap-2 font-mono text-[0.65rem] text-muted-foreground sm:flex">
                      <span className="rounded bg-[#23201d] px-1.5 py-0.5 border border-border/50">
                        @files
                      </span>
                      <span className="rounded bg-[#23201d] px-1.5 py-0.5 border border-border/50">
                        !shell
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={runSimulation}
                    disabled={simRunning}
                    className="btn-shine flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition-all hover:opacity-90 disabled:opacity-50"
                  >
                    {simRunning ? (
                      <>
                        <span className="animate-spin text-sm">↻</span>
                        <span>Executing...</span>
                      </>
                    ) : (
                      <>
                        <span>Run Plan</span>
                        <span className="text-xs">↑</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Preset Prompt Pills */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                    Try:
                  </span>
                  {PRESETS.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => setSimPrompt(p.prompt)}
                      className="rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Execution Trace Terminal View */}
              <div className="mt-6 rounded-xl border border-border/60 bg-[#0a0908] p-5 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/40 pb-2 text-[0.65rem] text-muted-foreground">
                  <span>AGENT TRACE & EXECUTION LOG</span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`h-2 w-2 rounded-full ${simRunning ? "bg-primary animate-pulse" : simStep === 5 ? "bg-emerald-500" : "bg-muted-foreground"}`}
                    />
                    {simRunning
                      ? "PROCESSING STEP " + simStep + "/5"
                      : simStep === 5
                        ? "ALL TESTS VERIFIED"
                        : "READY FOR INPUT"}
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold">{">"}</span>
                    <span className="text-foreground">
                      arcadia --model {selectedModel.id} --task "{simPrompt}"
                    </span>
                  </div>

                  {simStep >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-emerald-400">✓</span>
                      <span>[Perception] Analyzed 34 files in AST workspace lattice (12ms)</span>
                    </motion.div>
                  )}

                  {simStep >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary">⚙</span>
                      <span>
                        [Planning] Generated 3-stage execution DAG: (1) ExponentialBackoff.ts (2)
                        TelemetryPipeline.ts (3) Integration Tests
                      </span>
                    </motion.div>
                  )}

                  {simStep >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="rounded-lg border border-border/60 bg-[#141210] p-3 text-[0.7rem]"
                    >
                      <div className="flex items-center justify-between text-muted-foreground mb-1.5">
                        <span className="text-primary font-semibold">
                          [Tool Execution] edit_file: src/sync/ExponentialBackoff.ts
                        </span>
                        <span className="text-emerald-400 font-mono">+42 -6 lines</span>
                      </div>
                      <div className="text-emerald-400/90 pl-3 border-l-2 border-emerald-500/50">
                        + export const calculateBackoff = (attempt: number, baseMs: number = 250) =&gt;
                        &#123;
                        <br />+ return Math.min(baseMs * Math.pow(2, attempt) + Math.random() * 100,
                        30000);
                        <br />+ &#125;;
                      </div>
                    </motion.div>
                  )}

                  {simStep >= 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2 text-emerald-400"
                    >
                      <span>✓</span>
                      <span>[Test Suite] 18/18 integration specs passing (0 failures, 142ms)</span>
                    </motion.div>
                  )}

                  {simStep >= 5 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-between rounded-lg border border-emerald-500/30 bg-emerald-950/20 px-3 py-2 text-emerald-300"
                    >
                      <span>✨ Task fully resolved. Pull request created: #142 (Auto-approved)</span>
                      <span className="text-[0.65rem] text-muted-foreground font-mono">
                        Latency: 3.4s
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Autonomous Fleets Grid (Matching Reference Image 3) */}
      <section id="fleets" className="border-y border-border/70 bg-card/60 py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="rule-label text-primary">Autonomous Parallelism</p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  Launch fleets of cloud agents.
                </h2>
                <p className="mt-3 max-w-xl text-base text-muted-foreground">
                  Run dozens of agents in parallel on ambitious tasks for hours or days. They share
                  memory, write isolated branches, and report progress continuously.
                </p>
              </div>
              <a
                href="mailto:hello@substrate.dev?subject=Arcadia%20Fleet%20Access"
                className="cursor-amber-link text-sm font-medium"
              >
                Learn about cloud agents →
              </a>
            </div>
          </Reveal>

          {/* 3-Column Feature Cards matching Reference Image 3 */}
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Card 1: Multi-Model Intelligence */}
            <TiltCard className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-[#161412] p-7 shadow-lg transition-colors hover:border-border">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    Use the best model for every task
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    Choose between cutting-edge models from OpenAI, Anthropic, Gemini, SpaceXAI, and
                    Kernel.
                  </p>
                  <a
                    href="#workbench"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                  >
                    Explore models →
                  </a>
                </div>

                <div className="mt-8 rounded-xl border border-border/60 bg-[#0d0c0a] p-4 text-xs font-mono">
                  <div className="text-muted-foreground text-[0.65rem] mb-2">
                    Ask Arcadia to plan or build anything
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border/50 bg-card/60 px-3 py-2 text-foreground">
                    <span className="text-primary">∞ Agent</span>
                    <span className="text-muted-foreground">GPT-5.6 Sol ▾</span>
                  </div>
                  <div className="mt-2 space-y-1 text-[0.65rem] text-muted-foreground pl-2 border-l border-border/50">
                    <p className="text-primary font-medium">Auto (Suggested)</p>
                    <p>Grok 4.6</p>
                    <p className="text-foreground">GPT-5.6 Sol ✓</p>
                    <p>Fable 5.1 Max</p>
                    <p>Opus 5</p>
                    <p>Gemini 3.1 Pro</p>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Card 2: Autonomous Fleet Dashboard (Reference Image 3 Center) */}
            <TiltCard className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-[#161412] p-7 shadow-lg transition-colors hover:border-border">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    Build with autonomous agents
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    Launch fleets of agents that work in parallel on ambitious tasks for hours or
                    days.
                  </p>
                  <a
                    href="mailto:hello@substrate.dev"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                  >
                    Learn about cloud agents →
                  </a>
                </div>

                <div className="mt-8 rounded-xl border border-border/60 bg-[#0d0c0a] p-4 text-xs font-mono">
                  <div className="flex items-center justify-between border-b border-border/40 pb-2 text-[0.65rem] text-muted-foreground">
                    <span className="font-semibold text-foreground">All Repos</span>
                    <span>Recents</span>
                  </div>
                  <div className="mt-3 space-y-2.5">
                    {FLEET_TASKS.map((t) => (
                      <div
                        key={t.id}
                        className="rounded-lg border border-border/40 bg-card/40 p-2 text-[0.65rem]"
                      >
                        <div className="flex items-center justify-between text-foreground">
                          <span className="truncate font-medium">{t.title}</span>
                          <span
                            className={`rounded px-1 py-0.2 text-[0.55rem] uppercase ${
                              t.status === "verified"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : t.status === "working"
                                  ? "bg-primary/20 text-primary animate-pulse"
                                  : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {t.status}
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-0.5">{t.repo}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Card 3: Enterprise & Long Context (Reference Image 3 Right) */}
            <TiltCard className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/80 bg-[#161412] p-7 shadow-lg transition-colors hover:border-border">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    Develop enduring software
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    Trusted by modern development teams to accelerate engineering, securely and at
                    scale.
                  </p>
                  <a
                    href="mailto:hello@substrate.dev"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                  >
                    Explore enterprise →
                  </a>
                </div>

                <div className="mt-8 rounded-xl border border-border/60 bg-[#0d0c0a] p-4 text-xs">
                  <div className="space-y-3 font-mono text-[0.65rem]">
                    <div className="flex items-center justify-between border-b border-border/40 pb-2 text-muted-foreground">
                      <span>ENTERPRISE GUARDRAILS</span>
                      <span className="text-emerald-400">ACTIVE</span>
                    </div>
                    <div className="space-y-1.5 text-muted-foreground">
                      <p className="flex items-center justify-between">
                        <span>SOC2 Type II Isolation</span>
                        <span className="text-foreground">Enforced</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>Zero Retention Cache</span>
                        <span className="text-foreground">E2EE</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>On-Premise Kernel Weights</span>
                        <span className="text-foreground">Supported</span>
                      </p>
                      <p className="flex items-center justify-between">
                        <span>Multi-Agent Quorum Approval</span>
                        <span className="text-foreground">Enabled</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* In Every Tool, At Every Step (Matching Reference Image 4) */}
      <section className="relative isolate overflow-hidden border-b border-border/70 py-24 sm:py-32">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="rule-label text-primary">Ubiquitous Integration</p>
              <h2 className="mt-4 text-4xl leading-tight font-medium tracking-tight text-foreground sm:text-5xl">
                In every tool, <br />
                at every step.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Arcadia runs in your terminal, collaborates in Slack, and reviews PRs in GitHub.
                One agent fabric across your complete stack.
              </p>

              {/* Install Command Box with Tabs (Matching Reference Image 4) */}
              <div className="mt-8">
                <div className="flex items-center gap-2 border-b border-border/50 pb-2">
                  <button
                    onClick={() => setActiveCliTab("ps")}
                    className={`rounded-lg px-3 py-1 font-mono text-xs transition-colors ${
                      activeCliTab === "ps"
                        ? "bg-card text-foreground font-medium border border-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    PowerShell
                  </button>
                  <button
                    onClick={() => setActiveCliTab("sh")}
                    className={`rounded-lg px-3 py-1 font-mono text-xs transition-colors ${
                      activeCliTab === "sh"
                        ? "bg-card text-foreground font-medium border border-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Linux / WSL
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-[#0d0c0a] p-3.5 font-mono text-xs">
                  <span className="truncate text-foreground/90 select-all pr-4">
                    {activeCliTab === "ps"
                      ? "irm 'https://substrate.dev/arcadia/install?win32=true' | iex"
                      : "curl -fsSL https://substrate.dev/arcadia/install.sh | bash"}
                  </span>
                  <button
                    onClick={() =>
                      copyCommand(
                        activeCliTab === "ps"
                          ? "irm 'https://substrate.dev/arcadia/install?win32=true' | iex"
                          : "curl -fsSL https://substrate.dev/arcadia/install.sh | bash",
                      )
                    }
                    className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border/60 bg-card px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedCli ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            {/* 3D Stacked Slack & Terminal Windows (Matching Reference Image 4) */}
            <div className="relative perspective-1200">
              {/* Background Slack Window */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border/70 bg-[#171513] p-5 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between border-b border-border/40 pb-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">#feature-realtime-sync</span>
                  <div className="flex -space-x-1.5">
                    <div className="h-5 w-5 rounded-full bg-primary/40 border border-card" />
                    <div className="h-5 w-5 rounded-full bg-emerald-500/40 border border-card" />
                    <div className="h-5 w-5 rounded-full bg-blue-500/40 border border-card" />
                  </div>
                </div>
                <div className="mt-3 space-y-3 text-xs">
                  <div>
                    <span className="font-semibold text-foreground">swhitmore</span>{" "}
                    <span className="text-[0.65rem] text-muted-foreground">5m ago</span>
                    <p className="text-muted-foreground mt-0.5">
                      i wanna be able to go to substrate.dev/changelog#2.0 to see 2.0 changelog
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
                    <div className="flex items-center gap-2">
                      <SpectralMark variant="arcadia" className="h-4 w-4 text-primary" />
                      <span className="font-semibold text-primary">@arcadia</span>
                      <span className="rounded bg-primary/20 px-1 py-0.2 text-[0.6rem] text-primary">
                        APP
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-foreground/90">
                      I added direct section anchor scrolling with CSS scroll-margin-top
                      constraints and deployed preview branch.
                    </p>
                    <button className="mt-2.5 rounded bg-emerald-700/80 px-2.5 py-1 text-[0.65rem] font-medium text-white shadow hover:bg-emerald-600">
                      View PR #204
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Foreground Floating Terminal Window */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="mt-[-2.5rem] ml-6 rounded-2xl border border-border bg-[#0d0c0a] p-5 shadow-2xl backdrop-blur-2xl"
              >
                <div className="flex items-center justify-between border-b border-border/40 pb-2 text-[0.65rem] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2">arcadia agent</span>
                  </div>
                  <span className="font-mono">zsh</span>
                </div>
                <div className="mt-3 font-mono text-xs space-y-1.5">
                  <p className="text-muted-foreground">{"> agent"}</p>
                  <p className="text-foreground font-semibold">Arcadia Agent</p>
                  <p className="text-muted-foreground text-[0.7rem]">
                    ~/anysphere/research · main
                  </p>
                  <div className="mt-3 rounded border border-border/50 bg-[#161412] p-2 text-foreground/90">
                    → Plan, search, build anything
                  </div>
                  <p className="text-[0.65rem] text-primary pt-1">
                    GPT-5.6 Sol Extra High Fast
                  </p>
                  <p className="text-[0.65rem] text-muted-foreground">
                    / commands · @ files · ! shell
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Automate Repetitive Work Section (Matching Reference Image 5) */}
      <section className="border-b border-border/70 bg-[#0e0d0b] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            {/* Interactive Triggers Studio Mockup (Matching Reference Image 5) */}
            <div className="rounded-2xl border border-border bg-[#161412] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-semibold text-foreground">
                    Fix CI failures on main
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAutomationActive(!automationActive)}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      automationActive ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        automationActive ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span className="font-mono text-xs text-muted-foreground">
                    {automationActive ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>

              {/* Triggers Configuration */}
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Triggers
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-2 text-xs text-foreground">
                      <span className="text-primary font-mono">🕒</span>
                      <span>{triggerInterval}</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-2 text-xs text-foreground">
                      <span className="text-emerald-400 font-mono">💬</span>
                      <span>New message in</span>
                      <span className="rounded bg-[#23201d] px-1.5 py-0.5 border border-border/40 text-primary">
                        {triggerChannel}
                      </span>
                      <span>in cursor-website on</span>
                      <span className="rounded bg-[#23201d] px-1.5 py-0.5 border border-border/40 text-foreground">
                        {autoBranch}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Agent Instructions Box */}
                <div>
                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Agent Instructions
                  </p>
                  <textarea
                    rows={3}
                    value={agentInstructions}
                    onChange={(e) => setAgentInstructions(e.target.value)}
                    className="mt-2 w-full rounded-lg border border-border bg-[#0d0c0a] p-3 font-mono text-xs text-foreground focus:border-primary focus:outline-none"
                  />
                  <div className="mt-1 flex items-center justify-between font-mono text-[0.65rem] text-muted-foreground">
                    <span>Model: Grok 4.6 ▾</span>
                    <span>Tools: Read, Write, Test, PR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content description */}
            <div>
              <p className="rule-label text-primary">Always-on Automation</p>
              <h2 className="mt-4 text-4xl leading-tight font-medium tracking-tight text-foreground sm:text-5xl">
                Automate repetitive work.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Set up always-on agents that run on schedules or triggers to build, maintain, and
                fix your software before bugs reach production.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:hello@substrate.dev?subject=Automations%20Waitlist"
                  className="cursor-amber-link text-sm font-medium"
                >
                  Learn about Automations →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="border-b border-border/70 bg-card/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
          <div className="bg-card/80 px-6 py-12 text-center">
            <p className="font-display text-5xl font-light text-foreground">
              <CountUp value={250} suffix="k+" />
            </p>
            <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              <ScrambleText text="Autonomous PRs merged" />
            </p>
          </div>
          <div className="bg-card/80 px-6 py-12 text-center">
            <p className="font-display text-5xl font-light text-foreground">
              <CountUp value={99} suffix=".4%" />
            </p>
            <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              <ScrambleText text="First-pass test accuracy" />
            </p>
          </div>
          <div className="bg-card/80 px-6 py-12 text-center">
            <p className="font-display text-5xl font-light text-foreground">
              <CountUp value={16} suffix="x" />
            </p>
            <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              <ScrambleText text="Parallel subagent scaling" />
            </p>
          </div>
          <div className="bg-card/80 px-6 py-12 text-center">
            <p className="font-display text-5xl font-light text-foreground">
              <CountUp value={0} suffix="ms" />
            </p>
            <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
              <ScrambleText text="Telemetry data retention" />
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="border-b border-border/70 py-24 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="rule-label text-primary">Architecture Comparison</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              <BoxReveal>Engineered for full-autonomy engineering</BoxReveal>
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground text-sm">
              How Arcadia compares to OpenClaw, Meta's Muse, and traditional chat assistants.
            </p>
          </Reveal>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-border text-muted-foreground font-mono uppercase tracking-wider">
                  <th className="py-4 pr-6">Capability</th>
                  <th className="py-4 px-6 text-primary font-semibold">Arcadia (Substrate)</th>
                  <th className="py-4 px-6">OpenClaw</th>
                  <th className="py-4 px-6">Meta Muse</th>
                  <th className="py-4 pl-6">Legacy Chat LLMs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-muted-foreground">
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">Parallel Fleet Spawning</td>
                  <td className="py-4 px-6 text-primary font-semibold">✓ Infinite subagents</td>
                  <td className="py-4 px-6">✓ Limited threads</td>
                  <td className="py-4 px-6">✓ Desktop only</td>
                  <td className="py-4 pl-6">✗ Single turn</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">Local-First Inference</td>
                  <td className="py-4 px-6 text-primary font-semibold">✓ Kernel native</td>
                  <td className="py-4 px-6">✗ Cloud only</td>
                  <td className="py-4 px-6">✓ On-device</td>
                  <td className="py-4 pl-6">✗ Cloud API</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">Scheduled Automation Triggers</td>
                  <td className="py-4 px-6 text-primary font-semibold">✓ Cron, Webhook, CI</td>
                  <td className="py-4 px-6">✓ Webhooks</td>
                  <td className="py-4 px-6">✗ Manual trigger</td>
                  <td className="py-4 pl-6">✗ None</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-medium text-foreground">AST Semantic Workspace Lattice</td>
                  <td className="py-4 px-6 text-primary font-semibold">✓ Unified representation</td>
                  <td className="py-4 px-6">✗ Grep / RAG</td>
                  <td className="py-4 px-6">✓ Local parser</td>
                  <td className="py-4 pl-6">✗ Token stuffing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32 text-center">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl px-6">
          <SpectralMark variant="arcadia" className="mx-auto h-20 w-20 text-primary" />
          <h2 className="mt-8 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Start building with Arcadia.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
            Get early access to autonomous fleet orchestration and always-on automation.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:hello@substrate.dev?subject=Arcadia%20Access%20Request"
              className="btn-shine rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-xl transition-transform hover:scale-[1.02]"
            >
              Request Access
            </a>
            <Link
              to="/kernel"
              className="rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              Meet Kernel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
