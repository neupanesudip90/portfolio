// components/Tooltip.tsx
export function Tooltip({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group inline-flex">
      {children}
      <span
        className="absolute -top-8 left-1/2 -translate-x-1/2 
                       bg-gray-900 text-white text-xs px-2 py-1 rounded
                       whitespace-nowrap pointer-events-none
                       opacity-0 group-hover:opacity-100
                       transition-opacity duration-200 z-50"
      >
        {text}
      </span>
    </div>
  );
}
