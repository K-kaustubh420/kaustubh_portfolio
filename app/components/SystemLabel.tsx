"use client";

import PixelText from "./PixelText";

export default function SystemLabel({
  text,
}: {
  text: string;
}) {
  return (
    <PixelText className="text-xs opacity-70 text-[#FFC857]">
      {text}
    </PixelText>
  );
}