type Props = {
  variant: "kernel" | "void" | "folio" | "substrate" | "arcadia";
  className?: string;
  alt?: string;
};

/**
 * Official marks & logos for Substrate, Kernel, Folio, VOID, and Arcadia.
 */
export function SpectralMark({ variant, className = "", alt }: Props) {
  if (variant === "arcadia") {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={alt || "Arcadia mark: autonomous agent intelligence loop"}
        className={className}
      >
        <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" strokeDasharray="3 3" />
        <circle cx="50" cy="50" r="32" stroke="var(--primary, #ff5e18)" strokeWidth="2.5" strokeOpacity="0.85" />
        <path
          d="M32 50 C 32 38, 40 30, 50 30 C 62 30, 70 40, 70 50 C 70 62, 60 70, 50 70 C 38 70, 32 60, 32 50 Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M50 20 L50 32 M50 68 L50 80 M20 50 L32 50 M68 50 L80 50"
          stroke="var(--primary, #ff5e18)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="6" fill="var(--primary, #ff5e18)" />
        <circle cx="50" cy="50" r="10" stroke="var(--primary, #ff5e18)" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    );
  }

  if (variant === "substrate") {
    return (
      <img
        src="/images/substrate-logo.jpg"
        alt={alt || "Substrate logo"}
        className={`object-contain rounded-full mix-blend-multiply ${className}`}
      />
    );
  }

  if (variant === "folio") {
    return (
      <img
        src="/images/folio-logo.png"
        alt={alt || "Folio logo"}
        className={`object-contain mix-blend-multiply ${className}`}
      />
    );
  }

  if (variant === "kernel") {
    return (
      <img
        src="/images/kernel-logo.png"
        alt={alt || "Kernel logo"}
        className={`object-contain mix-blend-multiply ${className}`}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label="VOID mark: a single contour tracing an empty frame"
      className={className}
    >
      {Array.from({ length: 5 }).map((_, r) =>
        Array.from({ length: 5 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={40 + c * 40}
            cy={40 + r * 40}
            r="2.4"
            fill="currentColor"
            opacity="0.2"
          />
        )),
      )}
      <path
        d="M72 44 C 40 70, 44 118, 78 122 C 108 126, 106 156, 76 168 C 52 178, 60 200, 96 198 L 168 198 C 196 196, 200 168, 178 148 C 158 130, 158 104, 176 88 C 198 68, 190 42, 158 44 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <circle cx="176" cy="120" r="4" fill="var(--spectral-b)" opacity="0.7" />
    </svg>
  );
}
