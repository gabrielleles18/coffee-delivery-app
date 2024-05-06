import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 1120px;
  margin: 4rem auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 450px;
  gap: 3.2rem;

  .card-base {
    padding: 4rem;
    border-radius: 6px;
    background-color: ${({theme}) => theme['base-card']};
  }

  .complement {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .address {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
    }

    .payment {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;

      .buttons {
        display: flex;
        flex-direction: row;
        gap: 1.2rem;
      }
    }
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  .checkout-prod {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    hr {
      border: 0;
      border-top: 1px solid ${({theme}) => theme['base-button']};
    }

    .prod {
      display: flex;
      flex-direction: row;
      gap: 2rem;

      .img {
        width: 64px;
        height: 64px;
      }

      .info {
        flex: 1;

        h4 {
          color: ${({theme}) => theme['base-subtitle']};
          font-size: 16px;
          font-weight: 500;
        }
        
        .action{
          display: flex;
          flex-direction: row;
          gap: 8px;
        }
      }

      .price {
        color: ${({theme}) => theme['base-text']};
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
`;
