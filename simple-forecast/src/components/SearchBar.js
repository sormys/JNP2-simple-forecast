import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { askForAutocomplete } from '../redux/reducers/autocomplete';
import { changeSearch } from '../redux/reducers/search';
import { useDispatch } from 'react-redux';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.background};
  border-radius: 0.25rem;
  padding: 0.5rem;
  border: 2px solid ${props => props.theme.selection};
  box-shadow: 0px 0px 5px 0px ${props => props.theme.selection};
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.foreground};
  font-size: 1rem;
  flex: 1;

  &:focus {
    outline: none;
  }
`


function SearchBar() {
  const searchInput = useSelector(state => state.search.value);
  
  const dispatch = useDispatch();

  const handleAutocomplete = (e) => {
    console.log("Handle autocomplete")
    console.log(e.target.value);
    dispatch(changeSearch(e.target.value));
  }
  return (
    <SearchBarContainer>
      <SearchInput type="text" placeholder="City" value={searchInput} onChange={handleAutocomplete}/>
    </SearchBarContainer>
  );
}

export default SearchBar;