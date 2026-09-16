import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Shield, FileText, Users, Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BrandLogo } from "@/components/BrandLogo";
import { TiltCard } from "@/components/TiltCard";
import { BoxReveal } from "@/components/anim/BoxReveal";
import { CountUp } from "@/components/anim/CountUp";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { Preloader } from "@/components/anim/Preloader";
import { RotatingText } from "@/components/anim/RotatingText";
import { ScrambleText } from "@/components/anim/ScrambleText";
import { Spotlight } from "@/components/anim/Spotlight";
import { WordsReveal } from "@/components/anim/WordsReveal";
import { VanishForm } from "@/components/ui/skiper-ui/skiper56";
import { Skiper31 } from "@/components/ui/skiper-ui/skiper31";
import { Skiper48 } from "@/components/ui/skiper-ui/skiper48";
import { Skiper80 } from "@/components/ui/skiper-ui/skiper80";
import { GridlineTeaser } from "@/components/gridline/GridlineTeaser";
import { HeroCanvas } from "@/components/HeroCanvas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Substrate — Kernel, Folio & Gridline" },
      {
        name: "description",
        content:
          "Substrate is a research and product studio building Kernel, a multimodal LLM chatbot; Folio, a quiet operating surface; and Gridline, a coding agent — all on one substrate.",
      },
      { property: "og:title", content: "Substrate — Kernel, Folio & Gridline" },
      {
        property: "og:description",
        content:
          "A research and product studio for the ambient computer — a multimodal chatbot, an operating surface and a coding agent on one substrate.",
      },
    ],
  }),
  component: Index,
});

const marqueeTerms = [
  "Multimodal",
  "Autonomous agents",
  "Local-first",
  "One runtime",
  "Shared memory",
  "Long context",
  "Ambient computing",
  "No translators",
];

const stats = [
  { value: 4, suffix: "", label: "Modalities, one context" },
  { value: 3, suffix: "", label: "Surfaces on the substrate" },
  { value: 128, suffix: "k", label: "Token window" },
  { value: 0, suffix: "", label: "Translators in between" },
];

const productCards = [
  {
    slug: "kernel",
    name: "Kernel",
    badge: "Model",
    hero: "One model, every modality",
    lede: "A multimodal LLM chatbot — one conversation across text, images, audio and video in a single context.",
    image: "https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&h=650&w=940",
    to: "/kernel" as const,
  },
  {
    slug: "folio",
    name: "Folio",
    badge: "App",
    hero: "The quiet operating surface",
    lede: "One canvas that already knows the shape of your morning — weather, news, memory, and an assistant that acts.",
    image: "https://images.pexels.com/photos/31216389/pexels-photo-31216389.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    to: "/folio" as const,
  },
  {
    slug: "gridline",
    name: "Gridline",
    badge: "Editor",
    hero: "Your coding agent for ambitious software",
    lede: "Agents plan, ask clarifying questions, edit across files, and prove their work with artifacts.",
    image: "https://images.pexels.com/photos/13807430/pexels-photo-13807430.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    to: "/gridline" as const,
  },
];

const researchAreas = [
  {
    title: "Unified multimodal representation",
    body: "Every modality — text, vision, audio, video — projected into one continuous space. No adapter stack, no translation loss.",
  },
  {
    title: "Local-first inference",
    body: "Weights and context stay on your device. Remote compute is an option you flip on, not a default you opt out of.",
  },
  {
    title: "Agent-native architecture",
    body: "The runtime treats agents as first-class: plans, tool calls, verification loops — not bolted on after the fact.",
  },
  {
    title: "Shared memory across surfaces",
    body: "Kernel, Folio and Gridline read the same memory. Work started in one surface finishes in another.",
  },
];

const safetyPillars = [
  {
    icon: "shield",
    title: "Local-first by design",
    body: "Weights, files and browsing state stay on your device. Remote compute is an explicit opt-in, never a default you have to find and disable.",
  },
  {
    icon: "file",
    title: "Reproducible, not claimed",
    body: "Every number we print comes from a run we can reproduce. If we cannot show the method, we do not show the figure.",
  },
  {
    icon: "users",
    title: "Human-in-the-loop",
    body: "Agents plan and ask before they build. Nothing merges without a reviewable diff and a verification loop — the human stays in the loop.",
  },
];

const publications = [
  {
    tag: "Research",
    date: "Sep 2026",
    title: "A shared lattice for multimodal attention",
    summary:
      "How projecting text, vision, audio and video into one continuous space eliminates the adapter stack and preserves cross-modal relationships.",
    href: "#",
  },
  {
    tag: "Engineering",
    date: "Aug 2026",
    title: "Local-first inference at frontier scale",
    summary:
      "The architecture behind Kernel's on-device inference — quantization, speculative decoding, and the memory budget that makes it fit.",
    href: "#",
  },
  {
    tag: "Safety",
    date: "Jul 2026",
    title: "Verification loops for autonomous agents",
    summary:
      "Why every agent action in Gridline ends in a reviewable diff and a test run — and how that constraint shapes the agent's planning.",
    href: "#",
  },
  {
    tag: "Research",
    date: "Jun 2026",
    title: "Measuring balance across modalities",
    summary:
      "A benchmark suite that scores models on every axis rather than rewarding a spike on one — and why that matters for real work.",
    href: "#",
  },
];

const customerStories = [
  {
    quote:
      "Gridline replaced three tools in our pipeline. The agent plans, asks the right questions, and ships diffs we can actually review.",
    name: "Aditya Verma",
    role: "Staff Engineer, Northwind",
    image: "https://images.pexels.com/photos/38740728/pexels-photo-38740728.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    quote:
      "Kernel reads our screenshots and specs in one pass. We stopped translating between modalities — the model just sees it all.",
    name: "Sara Chen",
    role: "Head of Research, Lattice Labs",
    image: "https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    quote:
      "Folio is the first assistant that recedes when it has nothing to say. It earns the space on the screen.",
    name: "Marcus Webb",
    role: "Founder, Quiet Studio",
    image: "https://images.pexels.com/photos/31422830/pexels-photo-31422830.png?auto=compress&cs=tinysrgb&h=200&w=200",
  },
];

const careers = [
  {
    title: "Research Engineer — Multimodal",
    location: "Remote",
    team: "Kernel",
  },
  {
    title: "Product Engineer — Agent Runtime",
    location: "Remote",
    team: "Gridline",
  },
  {
    title: "Design Engineer — Surfaces",
    location: "Remote",
    team: "Folio",
  },
  {
    title: "Infra Engineer — Local-first Stack",
    location: "Remote",
    team: "Substrate",
  },
];

function Index() {
  return (
    <>
      <Preloader />

      {/* Hero — Anthropic-style flowing canvas animation */}
      <section className="relative isolate overflow-hidden">
        <HeroCanvas />
        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl items-center justify-center px-6 py-20">
          <div className="relative z-10 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex items-center gap-3"
            >
              <BrandLogo variant="substrate" className="h-9 w-9 rounded-full" />
              <span className="rule-label">The layer underneath</span>
            </motion.div>
            <h1 className="text-5xl leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
              <WordsReveal text="We build the ground" delay={0.15} />
              <br />
              <WordsReveal text="software grows on." delay={0.45} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              A research and product studio for the ambient computer — one substrate under{" "}
              <RotatingText
                words={[
                  "Kernel, the multimodal chatbot",
                  "Folio, the quiet surface",
                  "Gridline, the coding agent",
                ]}
                className="text-foreground"
              />
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
              className="mt-11 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
            >
              <MagneticButton>
                <Link
                  to="/work"
                  className="btn-shine inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
                >
                  Explore the work
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link
                  to="/kernel"
                  className="group inline-flex items-center gap-2 text-sm text-foreground"
                >
                  Meet Kernel
                  <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-muted-foreground"
          >
            Scroll
          </motion.div>
        </div>
      </section>

      {/* Terms strip */}
      <section className="overflow-hidden border-y border-border/70 bg-card/60 py-4" aria-hidden="true">
        <div className="marquee-track [animation-play-state:running] hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {marqueeTerms.map((t) => (
                <span
                  key={`${copy}-${t}`}
                  className="mx-8 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Products — illustration cards replacing golden/silver */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <Reveal className="text-center">
          <p className="rule-label">
            <ScrambleText text="The products" />
          </p>
          <h2 className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl">
            <BoxReveal>Three surfaces, one substrate</BoxReveal>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            One multimodal chatbot, one operating surface, one coding agent — every product reads
            the same runtime, the same memory, the same substrate.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCards.map((card, i) => (
            <Reveal key={card.slug} delay={i * 0.08} className="h-full">
              <TiltCard className="h-full">
                <Link to={card.to} className="group block h-full overflow-hidden rounded-2xl border border-border/70 bg-card/60 shadow-sm transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-card/80 px-3 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-sm">
                      {card.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl text-foreground">{card.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.lede}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground transition-transform group-hover:translate-x-1">
                      Explore <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/70 bg-card/50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border/60 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-card/80 px-6 py-12 text-center">
              <p className="font-display text-6xl font-light text-foreground">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
                <ScrambleText text={s.label} />
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Research areas — AI lab style */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Reveal className="text-center">
            <p className="rule-label">
              <ScrambleText text="Research" />
            </p>
            <h2 className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl">
              <BoxReveal>What we are working on</BoxReveal>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              The problems that live in the joins between modalities, surfaces and agents —
              solved once, properly, on one substrate.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-16 gap-y-12 sm:grid-cols-2">
            {researchAreas.map((area, i) => (
              <Reveal key={area.title} delay={(i % 2) * 0.08} className="border-t border-border pt-6">
                <h3 className="text-2xl text-foreground">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & alignment — Anthropic-style */}
      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Reveal className="text-center">
            <p className="rule-label">
              <ScrambleText text="Safety & alignment" />
            </p>
            <h2 className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl">
              <BoxReveal>Build it so the human stays in the loop</BoxReveal>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              The substrate is designed so that agents, models and surfaces default to the safest
              behavior — local-first, reviewable, and measured against runs we can reproduce.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {safetyPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-border/70 bg-card/60 p-7 transition-all duration-300 hover:border-border hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {p.icon === "shield" && <Shield className="h-5 w-5" />}
                    {p.icon === "file" && <FileText className="h-5 w-5" />}
                    {p.icon === "users" && <Users className="h-5 w-5" />}
                  </div>
                  <h3 className="mt-5 text-xl text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publications — OpenAI/Anthropic-style research index */}
      <section className="border-y border-border/70 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="rule-label">
                <ScrambleText text="Research" />
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
                <BoxReveal>Publications & technical writing</BoxReveal>
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm text-foreground transition-opacity hover:opacity-70"
            >
              View all publications <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {publications.map((pub, i) => (
              <Reveal key={pub.title} delay={(i % 2) * 0.08} className="h-full">
                <a
                  href={pub.href}
                  className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card/60 p-7 transition-all duration-300 hover:border-border hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-border/70 bg-background/60 px-3 py-1 font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {pub.tag}
                    </span>
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted-foreground">
                      {pub.date}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl leading-tight text-foreground transition-colors group-hover:text-primary">
                    {pub.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pub.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-foreground transition-transform group-hover:translate-x-1">
                    Read paper <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Customer stories — testimonial cards */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Reveal className="text-center">
            <p className="rule-label">
              <ScrambleText text="Customer stories" />
            </p>
            <h2 className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl">
              <BoxReveal>Teams building on the substrate</BoxReveal>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {customerStories.map((story, i) => (
              <Reveal key={story.name} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card/60 p-7">
                  <blockquote className="flex-1 text-base leading-relaxed text-foreground">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3.5 border-t border-border/70 pt-5">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">{story.name}</p>
                      <p className="text-xs text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Surfaces — Skiper48 card carousel */}
      <section className="relative isolate overflow-hidden">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <Reveal className="text-center">
            <p className="rule-label">Surfaces</p>
            <h2 className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl">
              <BoxReveal>Swipe through what we make</BoxReveal>
            </h2>
          </Reveal>
          <div className="mt-14 flex justify-center">
            <Skiper48 />
          </div>
        </div>
      </section>

      {/* Gridline section */}
      <GridlineTeaser />

      {/* Skiper80 — expandable product showcase */}
      <section className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
        <Reveal>
          <p className="rule-label">
            <ScrambleText text="Portfolio" />
          </p>
          <h2 className="mt-4 max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
            <BoxReveal>Click to explore each product</BoxReveal>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Skiper80 />
        </Reveal>
      </section>

      {/* Skiper31 — one substrate, every product */}
      <Skiper31 />

      {/* Mission statement — Anthropic-style */}
      <section className="relative isolate overflow-hidden border-t border-border/70">
        <div className="spectral-field spectral-field-soft" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <Reveal>
            <p className="rule-label">
              <ScrambleText text="Mission" />
            </p>
            <h2 className="mt-6 text-3xl leading-[1.2] text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              We build the ground software grows on — so the model, the surface and the agent behave
              like one thing, not three glued together.
            </h2>
            <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              The interesting problems live in the joins between modalities, surfaces and agents.
              Solving them once, on one substrate, is the whole discipline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Careers — OpenAI-style job listings */}
      <section className="border-y border-border/70 bg-card/40">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="rule-label">
                <ScrambleText text="Careers" />
              </p>
              <h2 className="mt-4 max-w-xl text-3xl leading-tight text-foreground sm:text-4xl">
                <BoxReveal>Build the substrate with us</BoxReveal>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Small team, close to the code. Every role touches the runtime, the model, or the
                surface — sometimes all three.
              </p>
            </div>
            <Briefcase className="hidden h-10 w-10 text-muted-foreground sm:block" />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <div className="border-t border-border">
              {careers.map((job, i) => (
                <a
                  key={job.title}
                  href="#"
                  className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:bg-card/40"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg text-foreground transition-transform group-hover:translate-x-1.5">
                      {job.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                      {job.team}
                    </span>
                    <span className="text-sm text-muted-foreground">{job.location}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-2xl px-6 py-24 text-center sm:py-28">
        <Reveal>
          <h2 className="text-3xl leading-tight text-foreground sm:text-4xl">
            <BoxReveal>Want the behind-the-scenes?</BoxReveal>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Ask about Kernel, Folio or Gridline — we answer plainly, with the method attached.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <VanishForm
              placeholder="Ask anything about Kernel, Folio or Gridline..."
              onSubmit={() => {}}
            />
          </div>
          <div className="mt-8">
            <MagneticButton>
              <Link
                to="/studio"
                className="inline-block rounded-full border border-border bg-card/60 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                How the studio builds
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
