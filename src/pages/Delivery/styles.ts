import styled from "styled-components";

export const DeliveryContainer = styled.div`
  width: 1120px;
  margin: 8rem auto 0;

  h1 {
    font-size: 32px;
    font-weight: 800;
    color: ${({theme}) => theme['yellow-dark']};
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: ${({theme}) => theme['base-title']};
  }

  .info-delivery {
    margin-top: 4rem;
    display: flex;
    flex-direction: row;
    gap: 10rem;
    align-items: center;

    .info-box {
      min-width: 512px;
      padding: 4rem;
      border-radius: 6px 36px 6px 36px;
      position: relative;
      background-color: ${({theme}) => theme['background']};
      gap: 2.5rem;
      display: flex;
      flex-direction: column;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -1px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(to right, #DBAC2C, #C47F17, #8047F8);
      }

      .item {
        display: flex;
        flex-direction: row;
        gap: 1.2rem;
        align-items: center;

        .icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        p {
          flex: 1;
          color: ${({theme}) => theme['base-text']};
          font-size: 16px;
        }
      }
    }

    img {
      width: 100%;
      height: 290px;
    }
  }
`;
