import Number from './Number.js'
import DarkThemeProvider from './DarkThemeProvider';
import GlobalStyle from './GlobalStyle.js';
import SearchBar from './SearchBar.js';
import Autocomplete from './Autocomplete.js';

function App() {
  return (
    <DarkThemeProvider>
      <GlobalStyle />
      <SearchBar />
      <Autocomplete />
      <Number />
    </DarkThemeProvider>
  );
}

export default App;
