import styled from "styled-components"

export const HourlyForecastListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border};

  &:last-child {
    border-bottom: none;
  }
`
