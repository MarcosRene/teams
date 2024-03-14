import { StatusBar } from 'expo-status-bar'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components'

import { Loading } from '@components/Loading'

import { Groups } from '@screens/Groups'

import theme from './src/theme'

export default function App() {
  const [isFontsLoaded] = useFonts({
    Roboto_400Regular, Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='light' translucent/>
      {isFontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  )
}
