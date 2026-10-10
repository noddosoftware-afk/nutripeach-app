import Image from "next/image";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/brand/nutripeach-icon.png"
      alt="Nutripeach"
      width={size}
      height={size}
      className="object-contain"
      priority
    />
  );
}
