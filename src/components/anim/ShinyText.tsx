/**
 * Text with a light sweep rolling through the glyphs.
 */
export function ShinyText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span className={`text-shine ${className}`}>
      <span className="[text-fill-color:transparent] [-webkit-text-fill:transparent]">{text}</span>
    </span>
  );
}
