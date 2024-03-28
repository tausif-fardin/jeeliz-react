"use client";

import React, { useEffect, useState } from "react";
import main from "../../public/libs/main";
import Image from "next/image";

const AppCanvas = () => {
  const [isInitialized] = useState(true);

  useEffect(() => {
    console.log("CALLING USE EFFECT!");
    if (typeof window !== "undefined") {
      main();
    }
  }, [isInitialized]);

  return (
    <div className="relative">
      <div className="navbar absolute top-0 w-full bg-slate-200 py-4">
        {/* Logo */}
        <div className="logo flex justify-start ml-5">
          <Image
            src="/image/ashtana-logo-transparent.png"
            height={80}
            width={160}
            alt="logo"
            className="bg-black"
          />
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <canvas
          width="600"
          height="1200"
          id="jeeFaceFilterCanvas"
          // Adjust margin-top to create space between canvas and navbar
        ></canvas>
      </main>
    </div>
  );
};

export default AppCanvas;
