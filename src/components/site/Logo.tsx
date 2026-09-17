import mark from "@/assets/confia-mark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#inicio" className={`flex items-center gap-3 ${className}`}>
      <img src={mark} alt="Confía Gourmet" width={44} height={34} className="h-9 w-auto" />
      <span className="font-display leading-[0.95]">
        <span className="block text-lg font-extrabold tracking-tight">Confía</span>
        <span className="block text-lg font-light tracking-tight">Gourmet</span>
      </span>
    </a>
  );
}
