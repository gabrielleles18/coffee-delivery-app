import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 3.2rem 0;

    .link {
        display: flex;
    }

    .actions {
        display: flex;
        gap: 1.2rem;

        .location {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            font-size: 1.4rem;
            border-radius: 6px;
            padding: 0.8rem;
            color: ${props => props.theme['purple-dark']};
            background-color: ${props => props.theme['purple-light']};
            font-weight: 500;
        }
    }
`;
