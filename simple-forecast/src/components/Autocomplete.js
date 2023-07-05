import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../redux/reducers/search';

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

  const handleAutocompleteResultClick = (e) => {
    console.log("Handle autocomplete result click");
    console.log(e.target.value);
    dispatch(changeSearch(e.target.value));
  }

  return (
    <AutocompleteResultsContainer>
      {console.log("CHANGE ++++ "+results)}
        {results.map((result) => (
        <AutocompleteResult key={result.id} value={result.name} onClick={handleAutocompleteResultClick}>{result.name} ({result.country})</AutocompleteResult>
      ))}
    </AutocompleteResultsContainer>
  );
}

export default AutocompleteResults;