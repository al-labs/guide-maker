import React from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import '@blocknote/core/fonts/inter.css'
import '@blocknote/mantine/style.css'
import App from './ui/App'

const root = createRoot(document.getElementById('root')!)
root.render(
  <MantineProvider defaultColorScheme="light">
    <App />
  </MantineProvider>
)
