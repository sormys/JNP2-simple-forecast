import { DarkThemeProvider, GlobalStyle } from "../../themes"
import Autocomplete from "../search"
import Tabs from "../tabBar"
import WeatherDisplay from "../weather"
import { LocateButton, ChangeThemeButton } from "../buttons"
import { Credits } from "../credits"

export const App = () => {
  return (
    <DarkThemeProvider>
      <GlobalStyle />
      <ChangeThemeButton />
      <LocateButton />
      <Credits text="Powered by weatherapi.com" />
      <Autocomplete />
      <Tabs />
      <WeatherDisplay />
    </DarkThemeProvider>
  )
}

export default App
