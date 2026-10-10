export function Logo({ size = 32 }: { size?: number }) {
  return (
    <span
      role="img"
      aria-label="Nutripeach"
      style={{ fontSize: size * 0.8, lineHeight: 1, width: size, height: size }}
      className="flex items-center justify-center"
    >
      🍑
    </span>
  );
}
