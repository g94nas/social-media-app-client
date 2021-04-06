import styled from "styled-components";

export const FeedMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .div-feed {
    width: 85%;
    h1 {
      color: var(--primaryColor);
      font-size: 3rem;
      margin-bottom: 0;
    }
  }

  .div-divider {
    height: 2px;
    background-color: var(--primaryColor);
    width: 60%;
    margin-bottom: 2.5rem;
  }
`;
