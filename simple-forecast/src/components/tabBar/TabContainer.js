import styled from 'styled-components'

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.selection};
  border-radius: 0.25rem;
  padding: 0.5rem;
  width: 100%;
`