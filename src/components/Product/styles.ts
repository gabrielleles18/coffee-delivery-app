import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme['base-card']};
  padding: 2rem;
  border-radius: 6px 36px 6px 36px;
  align-items: center;

  .product-image {
    width: 120px;
    height: 120px;
    margin: -40px auto auto;
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 4px;
    flex-wrap: wrap;
    margin: 12px 0 16px 0;
    justify-content: center;

    .tag {
      padding: 4px 8px;
      border-radius: 100px;
      background-color: ${({theme}) => theme['yellow-light']};
      color: ${({theme}) => theme['yellow-dark']};
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: ${({theme}) => theme['base-subtitle']};
  }

  .resume {
    text-align: center;
    line-height: 130%;
    font-size: 14px;
    margin: 0.8rem 0 3rem 0;
    flex: 1;
  }
`;

export const Actions = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  .price {
    font-size: 15px;
    font-weight: 500;
    flex: 1;
    color: ${({theme}) => theme['base-text']};
    display: flex;
    align-items: center;
    gap: 4px;

    b {
      font-weight: 800;
      font-size: 24px;
    }
  }

  .cart-add {
    width: 38px;
    height: 38px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${({theme}) => theme['purple-dark']};

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-dark']};
    }
  }
`;
