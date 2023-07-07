import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { changeCurrent } from '../redux/reducers/cache';
import { changeSearch } from '../redux/reducers/search';
import { changeDescription } from '../redux/reducers/gifs';

const AutocompleteSearchContainer = styled.div`
  width: 100%;
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? state.theme.primary : 'transparent',
    color: state.isSelected ? state.theme.primary : state.theme.primary,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: state.theme.primary,
      color: state.theme.primary,
    },
  }),
  control: (provided, state) => ({
    ...provided,
    borderRadius: 4,
    borderColor: state.isFocused ? state.theme.primary : state.theme.primary,
    boxShadow: state.isFocused ? `0 0 0 1px ${state.theme.primary}` : 'none',
    ':hover': {
      borderColor: state.theme.primary,
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 4,
    boxShadow: '0 0 4px ${state.theme.primary}',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.theme.secondary,
  }),
};

function AutocompleteSearch() {
  const results = useSelector(state => state.autocomplete.results);
  const dispatch = useDispatch();

  const handleInputChange = (inputValue) => {
    dispatch(changeSearch(inputValue));
  };

  const handleAutocompleteResultChange = (selectedOption) => {
    dispatch(changeCurrent({city: selectedOption.name, country: selectedOption.country}));
    dispatch(changeDescription('sunny'));
  }

  let options = []
  if(results !== null && results !== undefined){
    options = results.map((result) => ({
      value: { city: result.name, country: result.country },
      label: `${result.name} (${result.country})`,
      name: result.name,
      country: result.country,
    }));
  }
    
  return (
    <AutocompleteSearchContainer>
      <Select
        options={options}
        styles={customStyles}
        onInputChange={handleInputChange}
        onChange={handleAutocompleteResultChange}
        placeholder="Search for a city..."
      />
    </AutocompleteSearchContainer>
  );
}

export default AutocompleteSearch;