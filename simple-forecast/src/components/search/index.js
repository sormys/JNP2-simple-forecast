import React, { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import { changeCurrent } from "../weather/reducer"
import { changeSearch } from "./reducer"
import { AutocompleteBarWrapper } from "./components"
import { LineLoader } from "../loaders"
import styled from "styled-components"
import { ThemeContext } from "styled-components"

const getCustomStyles = (theme) => {
  const { primary, background, foreground, selection, text } = theme;
  return {
    control: (provided, state) => ({
      ...provided,
      color: selection,
      backgroundColor: state.isFocused ? text : background,
      borderColor: state.isFocused ? primary : background,
      boxShadow: state.isFocused ? `0 0 0 1px ${primary}` : "none",
      "&:hover": {
        borderColor: state.isFocused ? primary : background,
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? primary : selection,
      color: state.isFocused ? text : foreground,
    }),
  };
};

const StyledSelect = styled(Select)`
  .react-select__control {
    border-radius: 0;
    border: none;
    box-shadow: none;
  }
  .react-select__menu {
    border-radius: 0;
    margin-top: 0;
  }
`

const AutocompleteBar = () => {
  const results = useSelector((state) => state.search.results)
  const isLoading = useSelector((state) => state.search.isLoading)
  const dispatch = useDispatch()

  const handleInputChange = (inputValue) => {
    dispatch(changeSearch(inputValue))
  }

  const handleAutocompleteResultChange = (selectedOption) => {
    dispatch(
      changeCurrent({
        city: selectedOption.name,
        country: selectedOption.country,
      }),
    )
  }

  let options = []
  if (results !== null && results !== undefined) {
    options = results.map((result) => ({
      value: { city: result.name, country: result.country },
      label: `${result.name} (${result.country})`,
      name: result.name,
      country: result.country,
    }))
  }

  const theme = useContext(ThemeContext)
  const customStyles = getCustomStyles(theme.primary, theme.background, theme.foreground, theme.selection, theme.text)
    

  return (
    <AutocompleteBarWrapper>
      <StyledSelect
        options={options}
        onInputChange={handleInputChange}
        onChange={handleAutocompleteResultChange}
        isLoading={isLoading}
        loadingMessage={() => <LineLoader />}
        placeholder="Search for a city..."
        styles={customStyles}
      />
    </AutocompleteBarWrapper>
  )
}

export default AutocompleteBar