import styled from 'styled-components'

export const MultiDayWeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.25rem;
  padding: 1rem;
`