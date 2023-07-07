import { DarkThemeProvider, GlobalStyle } from "../../themes"
import Autocomplete from "../search"
import Tabs from "../tabBar"
import WeatherDisplay from "../weather"
import { LocateButton, ChangeThemeButton } from "../buttons"

export const App = () => {
  return (
    <DarkThemeProvider>
      <GlobalStyle />
      <ChangeThemeButton />
      <LocateButton />
      <Autocomplete />
      <Tabs />
      <WeatherDisplay />
    </DarkThemeProvider>
  )
}

export default App
