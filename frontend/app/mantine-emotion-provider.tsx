'use client'

import React from "react";
import { CacheProvider } from '@emotion/react'
import { createEmotionCache, MantineProvider } from '@mantine/core'
import { useServerInsertedHTML } from 'next/navigation'

const cache = createEmotionCache({ key: 'my' })
cache.compat = true

export default function MantineEmotionProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ))

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  )
}
