import styled from "styled-components";

type ButtonProps = {
    typeCustom?: 'bold' | 'normal';
}
export const ButtonContainer = styled.button<ButtonProps>`
  height: ${({typeCustom}) => typeCustom === 'bold' ? '50px' : '32px'};
  background-color: ${({theme}) => theme['base-button']};
  border-radius: 8px;
  padding: 0 15px;
  
  font-size: 12px;
  color: ${({theme}) => theme['base-text']};
  text-transform: uppercase;
  cursor: pointer;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
