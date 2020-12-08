import styled from "styled-components";

export const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EmptyBorderDiv = styled.div`
  width: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  margin-right: -1px;
`;

export const TabWrapper = styled.div`
  margin-top: 0.8rem;
  > button {
    padding: 1.2rem;
    //for overlaping border
    margin-right: -1px; //to avoid black spacing due to left-right border at tip
    :not(:last-of-type) {
      border-right-color: #171717;
    }
  }
`;

export const ApplyChangesBtnWrapper = styled.div`
  flex-grow: 1;
  padding: 0.8rem 1rem 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;

  button: first-child {
    font-size: 2rem;
  }

  button {
    img {
      transform: ${({ isRotate }) => `rotateZ(${360 * isRotate}deg)`};
      vertical-align: middle;
      height: 20px;
      transition: transform 1s ease;
    }
  }
`;
