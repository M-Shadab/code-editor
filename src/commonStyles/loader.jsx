import styled, { keyframes } from "styled-components";

const bubbleUpAnim = keyframes`
    from {
        transform: scale(0.7);
    }
    to: {
        transform: scale(1.2);
    }
`;

export const Wrapper = styled.div`
  width: 4rem;

  > div:not(:last-child) {
    margin-right: 0.8rem;
  }
  > div:first-child {
    animation: ${bubbleUpAnim} 0.4s ease infinite alternate;
  }
  > div:nth-child(2) {
    animation: ${bubbleUpAnim} 0.4s ease infinite 0.2s alternate;
  }
  > div:last-child {
    animation: ${bubbleUpAnim} 0.4s ease infinite 0.4s alternate;
  }
`;

export const Circle = styled.div`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  min-width: 0.8rem;
  min-height: 0.8rem;
  border-radius: 50%;
  background: #dcdcdc;
  box-shadow: 0 0 2px 3px rgba(220, 220, 220, 0.15);
`;
