"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Particles } from "./magicUI/backgound-particles";

export function Backgound() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <Particles
      refresh
      className="absolute inset-0 z-0"
      color={color}
      ease={80}
      quantity={100}
    />
  );
}
