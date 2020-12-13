import styled from "styled-components"

export const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const EmptyBorderDiv = styled.div`
  width: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  margin-right: -1px; //to overlap right bottom corner of the border
`

export const TabWrapper = styled.div`
  margin-top: 0.8rem;
  overflow-x: auto;
  white-space: nowrap;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  > button {
    padding: 1.2rem;
    //for overlaping border
    :not(:last-of-type) {
      margin-right: -1px; //to avoid black spacing due to left-right border at tip
      border-right-color: #171717;
    }
  }
`

export const ApplyChangesBtnWrapper = styled.div`
  flex-grow: 1;
  padding: 0.8rem 1rem 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  white-space: nowrap;

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
`
