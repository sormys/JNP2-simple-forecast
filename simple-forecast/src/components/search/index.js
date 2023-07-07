import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import { changeCurrent } from "../weather/reducer"
import { changeSearch } from "./reducer"
import { AutocompleteBarWrapper } from "./components"

const AutocompleteBar = () => {
  const results = useSelector((state) => state.search.results)
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

  return (
    <AutocompleteBarWrapper>
      <Select
        options={options}
        onInputChange={handleInputChange}
        onChange={handleAutocompleteResultChange}
        placeholder="Search for a city..."
      />  
    </AutocompleteBarWrapper>
  )
}

export default AutocompleteBar
