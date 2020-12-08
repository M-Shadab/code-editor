import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  height: 100%;
  display: flex;

  > div:first-child {
    width: 60%;
    border-right: 2px solid rgba(255, 255, 255, 0.09);
  }
  > div:last-child {
    width: 40%;
  }
`;
