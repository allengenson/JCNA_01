// components/Container.tsx
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1418px] px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
