"use client";

export default function PixelText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        fontFamily: "'Tiny5', monospace",
        letterSpacing: "1.5px",
      }}
    >
      {children}
    </span>
  );
}