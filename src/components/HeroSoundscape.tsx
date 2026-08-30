import { useEffect, useRef } from "react";

/**
 * Small opt-in interaction sounds for the hero. Nothing plays on page load;
 * audio is created only after the visitor interacts with a hero control.
 */
export function HeroSoundscape() {
  const contextRef = useRef<AudioContext | null>(null);
  const lastPlayedRef = useRef(0);

  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-hero-interactive]");
    if (!section) return;

    const getContext = () => {
      if (contextRef.current) return contextRef.current;
      const AudioContextConstructor =
        window.AudioContext ||
        (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioContextConstructor) return null;
      contextRef.current = new AudioContextConstructor();
      return contextRef.current;
    };

    const playTone = (frequency: number, duration: number, volume: number) => {
      const now = performance.now();
      if (now - lastPlayedRef.current < 90) return;
      lastPlayedRef.current = now;

      const context = getContext();
      if (!context) return;
      void context.resume();

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const start = context.currentTime;
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, start);
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.08, start + duration);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + duration + 0.02);
    };

    const onPointerOver = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-sound]")
        : null;
      if (!target || !section.contains(target)) return;
      if (event.relatedTarget instanceof Node && target.contains(event.relatedTarget)) return;
      playTone(520, 0.055, 0.012);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-sound]")
        : null;
      if (target && section.contains(target)) playTone(680, 0.085, 0.016);
    };

    section.addEventListener("pointerover", onPointerOver);
    section.addEventListener("click", onClick);
    return () => {
      section.removeEventListener("pointerover", onPointerOver);
      section.removeEventListener("click", onClick);
      contextRef.current?.close();
      contextRef.current = null;
    };
  }, []);

  return null;
}
