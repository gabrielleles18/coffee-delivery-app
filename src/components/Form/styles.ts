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

    .row-cep {
        grid-area: cep;
    }

    .row-street {
        grid-area: street-home;
    }

    .row-number {
        grid-area: number-home;
    }

    .row-complement {
        grid-area: complement;
    }

    .row-neighborhood {
        grid-area: neighborhood;
    }

    .row-city {
        grid-area: city;
    }

    .row-state {
        grid-area: state-home;
    }

    .row {
        display: flex;
        flex-direction: column;

        input {
            width: 100%;
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

        span {
            color: red;
            font-size: 1.3rem;
        }
    }
`;
