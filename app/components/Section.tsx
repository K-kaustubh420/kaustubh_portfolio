"use client";

export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="px-8 py-24 bg-[#262d3a] text-[#F5E6C8]">
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}