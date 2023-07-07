import styled from "styled-components"

export const TabItem = styled.div`
  flex: 1;
  font-size: 1.2rem;
  color: ${(props) => props.theme.comment};
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: center;
  background-color: ${(props) => props.theme.tabBackground};
  border-radius: 0.25rem;
  padding: 0.5rem;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${(props) => props.theme.foreground};
    background-color: ${(props) => props.theme.tabHoverBackground};
  }
`
