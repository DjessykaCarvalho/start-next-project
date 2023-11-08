'use client'

import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/globalStyles'
import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
