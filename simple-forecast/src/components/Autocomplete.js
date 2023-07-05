import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeCurrent } from '../redux/reducers/cache';

const AutocompleteResultsContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const AutocompleteResult = styled.li`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.selection};
  }
`;

function AutocompleteResults() {
  const results = useSelector(state => state.autocomplete.results);
  const dispatch = useDispatch();

  const handleAutocompleteResultClick = (value) => {
    console.log("Handle autocomplete result click");
    console.log(value);
    dispatch(changeCurrent(value));
  }

  return (
    <AutocompleteResultsContainer>
      {results.map((result) => (
        <AutocompleteResult 
          key={result.id} 
          value={`${result.name} ${result.country}`} 
          onClick={() => handleAutocompleteResultClick({ city: result.name, country: result.country })}
        >{result.name} ({result.country})</AutocompleteResult>
      ))}
    </AutocompleteResultsContainer>
  );
}

export default AutocompleteResults;