import { useEffect, useRef } from "react";

type Node3 = { x: number; y: number; z: number };

const COLORS = ["#e0574a", "#e9a13b", "#3f7fd6", "#2f9e6e"];

function buildLattice() {
  const nodes: Node3[] = [];
  const edges: [number, number, string][] = [];
  const idx = new Map<string, number>();
  const key = (x: number, y: number, z: number) => `${x},${y},${z}`;

  const add = (x: number, y: number, z: number) => {
    const k = key(x, y, z);
    if (!idx.has(k)) {
      idx.set(k, nodes.length);
      nodes.push({ x, y, z });
    }
    return idx.get(k)!;
  };

  const size = 2;
  for (let x = -size; x <= size; x++) {
    for (let y = -size; y <= size; y++) {
      for (let z = -1; z <= 1; z++) {
        add(x, y, z);
      }
    }
  }

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i]!;
      const b = nodes[j]!;
      const d = Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z);
      const dz = Math.abs(a.z - b.z);
      if (d === 1) {
        edges.push([i, j, dz === 1 ? COLORS[2]! : COLORS[1]!]);
      } else if (
        d === 2 &&
        dz === 0 &&
        Math.abs(a.x - b.x) === 1 &&
        Math.abs(a.y - b.y) === 1 &&
        (a.x + a.y + a.z) % 2 === 0
      ) {
        edges.push([i, j, (a.x + a.y) % 2 === 0 ? COLORS[0]! : COLORS[3]!]);
      }
    }
  }

  return { nodes, edges };
}

const { nodes, edges } = buildLattice();

export function LatticeDiagram({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useRef({ rx: -0.5, ry: 0.6, drag: false, px: 0, py: 0, vx: 0.0016, vy: 0.0009 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const s = state.current;
      if (!s.drag) {
        s.ry += s.vx;
        s.rx += s.vy * Math.sin(performance.now() / 4000) * 0.6;
      }
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);
      const scale = Math.min(w, h) / 7;
      const cosX = Math.cos(s.rx);
      const sinX = Math.sin(s.rx);
      const cosY = Math.cos(s.ry);
      const sinY = Math.sin(s.ry);

      const proj = nodes.map((n) => {
        const x1 = n.x * cosY - n.z * sinY;
        const z1 = n.x * sinY + n.z * cosY;
        const y1 = n.y * cosX - z1 * sinX;
        const z2 = n.y * sinX + z1 * cosX;
        const p = 6 / (6 + z2);
        return { x: w / 2 + x1 * scale * p, y: h / 2 + y1 * scale * p, z: z2, p };
      });

      for (const [a, b, color] of edges) {
        const pa = proj[a]!;
        const pb = proj[b]!;
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.28 + 0.42 * ((pa.p + pb.p) / 2 - 0.7);
        ctx.lineWidth = 1.1 * ((pa.p + pb.p) / 2);
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      }

      for (const p of proj) {
        ctx.globalAlpha = 0.35 + 0.5 * (p.p - 0.7);
        ctx.fillStyle = "#d9a441";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.6 * p.p, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const down = (e: PointerEvent) => {
      const s = state.current;
      s.drag = true;
      s.px = e.clientX;
      s.py = e.clientY;
      canvas.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      const s = state.current;
      if (!s.drag) return;
      s.ry += (e.clientX - s.px) * 0.006;
      s.rx += (e.clientY - s.py) * 0.006;
      s.px = e.clientX;
      s.py = e.clientY;
    };
    const up = () => {
      state.current.drag = false;
    };

    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointerleave", up);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointerleave", up);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full cursor-grab touch-none active:cursor-grabbing ${className}`}
      aria-label="Interactive three-dimensional lattice of Kernel's shared representation"
      role="img"
    />
  );
}
