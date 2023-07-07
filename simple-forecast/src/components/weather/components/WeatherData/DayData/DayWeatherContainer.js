import styled from "styled-components"

export const DayWeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  border-radius: 0.25rem;
  padding: 1rem;
`
