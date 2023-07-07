import DarkThemeProvider from './DarkThemeProvider'
import GlobalStyle from './GlobalStyle'
import Autocomplete from './Autocomplete'
import Tabs from './Tabs'
import WeatherDisplay from './WeatherDisplay'
import LocateButton from './LocateButton'
import ChangeThemeButton from './ChangeThemeButton'

function App() {
  return (
    <DarkThemeProvider>
      <GlobalStyle />
      <ChangeThemeButton />
      <LocateButton />
      <Autocomplete />
      <Tabs />
      <WeatherDisplay />
    </DarkThemeProvider>
  );
}

export default App;
