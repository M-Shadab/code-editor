import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 90%;
  }
`

export const ChatBotContainer = styled.div`
  height: 55%;
  padding: 1.25rem;
  border-radius: 4px;
  box-shadow: 0 4px 8px 8px rgba(0, 0, 0, 0.08);
  background-color: #1f1f1f;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
    &-track {
      // background: #f1f1f1;
      border-radius: 10px;
    }

    &-thumb {
      background: #888;
      border-radius: 10px;
    }
  }

  > div:last-child {
    margin-bottom: 0;
  }
`

export const LeftMsgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  > img {
    width: 3rem;
    height: 3rem;
    padding: 0.2rem;
    background: #fff;
    border-radius: 50%;
    margin-right: 0.8rem;
  }
`

export const RightMsgWrapper = styled(LeftMsgWrapper)`
  flex-direction: row-reverse;
  > img {
    margin-right: 0;
    margin-left: 0.8rem;
  }
`

export const MsgContainer = styled.div`
  padding: 1rem 1.6rem;
  border-radius: 16px;
  background-color: #404040;
  p {
    font-size: 1.4rem;
    max-width: 20rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 3rem;

  img {
    cursor: pointer;
    margin-left: -4.4rem;
  }
`
