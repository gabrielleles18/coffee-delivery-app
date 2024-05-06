import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 200px 1fr 60px;
  grid-template-areas:
          "cep . ."
          "street-home street-home street-home"
          "number-home complement complement"
          "neighborhood city state-home";

  .cep-input {
    grid-area: cep;
  }

  .street-input {
    grid-area: street-home;
  }

  .number-input {
    grid-area: number-home;
  }

  .complement-input {
    grid-area: complement;
  }

  .neighborhood-input {
    grid-area: neighborhood;
  }

  .city-input {
    grid-area: city;
  }

  .state-input {
    grid-area: state-home;
  }

  input {
    height: 42px;
    background-color: ${({theme}) => theme['base-input']};
    border-radius: 4px;
    color: ${({theme}) => theme['base-label']};
    padding: 1.2rem;
    border: 1px solid ${({theme}) => theme['base-button']};

    &:focus {
      color: ${({theme}) => theme['base-text']};
    }
  }
`;
