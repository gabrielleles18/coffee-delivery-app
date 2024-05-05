import styled from "styled-components";

export const CartContainer = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({theme}) => theme['yellow-light']};
  position: relative;

  .amount-order {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding: 5px;
    background-color: ${({theme}) => theme['yellow-dark']};
    color: ${({theme}) => theme.white};
    justify-content: center;
    align-items: center;
    display: flex;
    position: absolute;
    font-size: 1.2rem;
    font-weight: bold;
    top: -8px;
    right: -8px;
  }
`;
