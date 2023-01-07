"use client";
import "./globals.css";
import React from "react";
import { Noto_Sans_Javanese } from "@next/font/google";
import MantineEmotionProvider from "./mantine-emotion-provider";

const font = Noto_Sans_Javanese({ subsets: ["javanese"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={font.className}>
      <head />
      <body>
        <MantineEmotionProvider>{children}</MantineEmotionProvider>
      </body>
    </html>
  );
}
