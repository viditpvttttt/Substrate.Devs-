type Props = {
  variant: "kernel" | "void" | "folio" | "substrate";
  className?: string;
  alt?: string;
};

/**
 * Official marks & logos for Substrate, Kernel, Folio, and VOID.
 */
export function SpectralMark({ variant, className = "", alt }: Props) {
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
