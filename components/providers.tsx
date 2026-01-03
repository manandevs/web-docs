import React from 'react'
import { ThemeProvider } from 'next-themes'

interface NextThemeProviderProps {
  children: React.ReactNode;
}

export default function NextThemeProvider({ children }: NextThemeProviderProps) {
  return (
    <ThemeProvider
      attribute={"class"}
      defaultTheme='system'
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}
