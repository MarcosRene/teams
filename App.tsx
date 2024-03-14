import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components'

import { Groups } from '@screens/Groups'

import theme from './src/theme'

export default function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })

  if (!isFontsLoaded) {
    return null;
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}
