import styled from "styled-components";

export const HomeContainer = styled.div`
  
  .head {
    width: 100%;
    height: 544px;
    position: relative;
    display: flex;
    align-items: center;
    
    .background-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    .content {
      width: 1120px;
      margin: 0 auto;
      display: grid;
      gap: 5.6rem;
      grid-template-columns: 1fr 476px;
      z-index: 9;

      h1 {
        font-size: 4.8rem;
        line-height: 130%;
        font-weight: 800;
        color: ${({theme}) => theme['base-title']};
        margin-bottom: 1rem;
      }

      p {
        color: ${({theme}) => theme['base-title']};
        font-size: 2.0rem;
      }
    }
  }
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 2.4rem;
  column-gap: 4rem;
  row-gap: 2rem;
  margin-top: 6rem;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;

    .wrapper {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
`;

export const ProductContainer = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding-top: 3.2rem;
  padding-bottom: 4rem;

  h2 {
    font-size: 3.2rem;
    line-height: 130%;
    font-weight: 800;
    color: ${({theme}) => theme['base-title']};
    margin-bottom: 5.4rem;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3.2rem;
    row-gap: 4rem;
  }
`;
