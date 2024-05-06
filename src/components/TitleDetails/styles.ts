import styled from "styled-components";

export const TitleDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;

  h4 {
    font-size: 16px;
    font-weight: 600;
    color: ${({theme}) => theme['base-subtitle']};
  }

  p {
    font-size: 14px;
    color: ${({theme}) => theme['base-text']};
  }
`;
