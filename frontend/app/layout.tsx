"use client";
import "./globals.css";
import React, { useState } from "react";
import { Noto_Sans_Javanese } from "@next/font/google";
import MantineEmotionProvider from "./mantine-emotion-provider";

const font = Noto_Sans_Javanese({ subsets: ["javanese"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);

  return (
    <html lang="ja" className={font.className}>
      <head />
      <body>
        <MantineEmotionProvider>
          <header className="text-3xl py-4 px-4 flex justify-center border-gray-200 border-bottom-2 border-solid">
            <span>header in root layout: count {count}</span>
            <button className="ml-10" onClick={() => setCount((c) => c + 1)}>
              increment
            </button>
          </header>
          {children}
        </MantineEmotionProvider>
      </body>
    </html>
  );
}
