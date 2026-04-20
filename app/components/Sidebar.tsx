"use client";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-[120px] flex items-center justify-center z-0 pointer-events-none">

      {/* INNER BOX (forces centering) */}
      <div className="relative w-full h-[300px] flex items-center justify-center">

        <h1
          className="
            -rotate-90
            whitespace-nowrap
            font-black
            tracking-tight
            text-white/5
            select-none
          "
          style={{
            fontSize: "clamp(100px, 8vw, 140px)",
          }}
        >
          KAUSTUBH
        </h1>

      </div>
    </div>
  );
}