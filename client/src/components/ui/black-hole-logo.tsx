export default function BlackHoleLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-8 h-8 ${className}`}>
      <div className="absolute inset-0 rounded-full accretion-disk animate-rotate-slow"></div>
      <div className="absolute inset-[30%] rounded-full bg-black dark:bg-black"></div>
    </div>
  );
}
