"use client";

import React, { useEffect, useState } from "react";
import main from "../../public/libs/main";

const AppCanvas = () => {
  const [isInitialized] = useState(true);

  useEffect(() => {
    console.log("CALLING USE EFFECT!");
    if (typeof window !== "undefined") {
      //JEELIZFACEFILTER.destroy;
      main();
    }
  }, [isInitialized]);

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <canvas width="928" height="1200" id="jeeFaceFilterCanvas"></canvas>
      </main>
    </div>
  );
};

export default AppCanvas;
