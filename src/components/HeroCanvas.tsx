import { useEffect, useRef } from "react";

/**
 * Anthropic-style hero canvas — warm, flowing light ribbons that drift
 * slowly across the viewport. Uses a canvas with additive blending to
 * create a soft, ambient glow reminiscent of the Anthropic hero.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Ribbon = {
      cx: number;
      cy: number;
      radius: number;
      speed: number;
      angle: number;
      angleSpeed: number;
      hue: number;
      alpha: number;
      pulse: number;
      pulseSpeed: number;
    };

    const hues = [28, 38, 22, 340, 12];
    const ribbons: Ribbon[] = [];

    const initRibbons = () => {
      ribbons.length = 0;
      const count = Math.max(4, Math.min(7, Math.floor(w / 220)));
      for (let i = 0; i < count; i++) {
        ribbons.push({
          cx: (w / (count + 1)) * (i + 1) + (Math.random() - 0.5) * 80,
          cy: h * 0.35 + (Math.random() - 0.5) * h * 0.3,
          radius: Math.max(120, w * (0.18 + Math.random() * 0.22)),
          speed: 0.0003 + Math.random() * 0.0004,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: 0.0002 + Math.random() * 0.0003,
          hue: hues[i % hues.length],
          alpha: 0.12 + Math.random() * 0.08,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.005 + Math.random() * 0.005,
        });
      }
    };
    initRibbons();
    window.addEventListener("resize", initRibbons);

    let raf = 0;
    let t = 0;

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);

      // Base warm gradient
      const baseGrad = ctx.createLinearGradient(0, 0, 0, h);
      baseGrad.addColorStop(0, "#f5efe6");
      baseGrad.addColorStop(0.5, "#f0e8dc");
      baseGrad.addColorStop(1, "#e8e0d2");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = "lighter";

      for (const r of ribbons) {
        r.angle += r.angleSpeed;
        r.pulse += r.pulseSpeed;
        const pulseFactor = 1 + Math.sin(r.pulse) * 0.15;
        const rad = r.radius * pulseFactor;

        // Draw multiple arcs to create ribbon-like flowing shapes
        const segments = 5;
        for (let s = 0; s < segments; s++) {
          const segAngle = r.angle + (s / segments) * Math.PI * 0.6;
          const offsetX = Math.cos(segAngle) * rad * 0.3;
          const offsetY = Math.sin(segAngle) * rad * 0.2;
          const x = r.cx + offsetX;
          const y = r.cy + offsetY;
          const segRad = Math.max(40, rad * (0.5 + s * 0.12));

          const grad = ctx.createRadialGradient(x, y, 0, x, y, segRad);
          const colorAlpha = r.alpha * (1 - s / segments) * 0.5;
          grad.addColorStop(0, `hsla(${r.hue}, 75%, 62%, ${colorAlpha})`);
          grad.addColorStop(0.5, `hsla(${r.hue}, 70%, 55%, ${colorAlpha * 0.4})`);
          grad.addColorStop(1, `hsla(${r.hue}, 65%, 45%, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(x, y, segRad, 0, Math.PI * 2);
          ctx.fill();
        }

        // Slow drift
        r.cx += Math.sin(t * r.speed) * 0.15;
        r.cy += Math.cos(t * r.speed * 0.7) * 0.1;
      }

      ctx.globalCompositeOperation = "source-over";

      // Subtle grain overlay
      ctx.globalAlpha = 0.03;
      const grainCount = 200;
      for (let i = 0; i < grainCount; i++) {
        const gx = Math.random() * w;
        const gy = Math.random() * h;
        ctx.fillStyle = Math.random() > 0.5 ? "#000" : "#fff";
        ctx.fillRect(gx, gy, 1, 1);
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", initRibbons);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
