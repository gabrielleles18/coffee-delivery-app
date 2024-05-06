import styled from "styled-components";

export const CounterContainer = styled.div`
  width: 75px;
  min-height: 38px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: ${({theme}) => theme['base-button']};
  padding: 0 5px;
  justify-content: space-between;

  span {
    padding: 0 3px;
    font-size: 16px;
    color: ${({theme}) => theme['base-title']};
  }

  button {
    display: flex;
    color: ${({theme}) => theme['purple']};
    padding: 3px;
    cursor: pointer;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }

    &:focus {
      box-shadow: none;
    }
  }
`;
