"use client";

import PixelText from "./PixelText";

export default function Footer() {
  return (
    <footer className="px-8 py-20 bg-[#090a23] text-[#F5E6C8] text-center">

      <div className="flex flex-col items-center gap-4">

        {/* Main line */}
        <PixelText>READY TO BUILD →</PixelText>

        {/* Secondary line */}
        <p className="text-xs opacity-50 tracking-widest">
          MORE SYSTEMS COMING SOON
        </p>

      </div>

    </footer>
  );
}