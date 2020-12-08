import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Loader from "../../../common/loader";
import { Input } from "../../../commonStyles/input";
import {
  Wrapper,
  ChatBotContainer,
  LeftMsgWrapper,
  RightMsgWrapper,
  MsgContainer,
  InputWrapper,
} from "../styles/chatBot";
import person from "../../../assets/svgs/person.svg";
import send from "../../../assets/svgs/send.svg";
import robot from "../../../assets/svgs/robot.svg";

const ChatBot = ({ translator }) => {
  const botElementRef = useRef(null);
  const defaultBotMsg = useSelector(
    ({ chatBot: { defaultBotMsg } }) => defaultBotMsg
  );
  const [messages, setMessages] = useState([defaultBotMsg]);
  const [query, setQuery] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const updateMessageList = (newMessageObject) =>
    setMessages((messages) => [...messages, newMessageObject]);

  const handleLoader = (value) => setShowLoader(value);

  const handleSubmitQuery = async () => {
    //handle no text input query i.e only whitespace like "", " "
    if (query.trim() === "") return;

    const userQueryObject = {
      id: Date.now(),
      message: query,
      type: "user",
    };

    updateMessageList(userQueryObject);
    setQuery("");

    try {
      handleLoader(true);
      const reply = await translator(query);
      const botReplyObject = {
        id: Date.now(),
        message: reply,
        type: "bot",
      };
      handleLoader(false);
      reply && updateMessageList(botReplyObject);
    } catch (ex) {
      console.log(ex);
      showLoader && handleLoader(false);
    }
  };

  useEffect(() => {
    //Auto Scroll Message Div, to show latest message
    if (botElementRef.current) {
      const el = botElementRef.current;
      el.scrollTop = el.scrollHeight;
    }
  });

  const renderMessageCard = (src, message) => (
    <>
      <img src={src} alt="logo" />
      <MsgContainer>
        <p>{message}</p>
      </MsgContainer>
    </>
  );

  const renderMessages = () => {
    return messages.map((messageObject) => {
      if (messageObject.type === "user") {
        return (
          <LeftMsgWrapper key={messageObject.id}>
            {renderMessageCard(person, messageObject.message)}
          </LeftMsgWrapper>
        );
      } else {
        return (
          <RightMsgWrapper key={messageObject.id}>
            {renderMessageCard(robot, messageObject.message)}
          </RightMsgWrapper>
        );
      }
    });
  };

  return (
    <Wrapper>
      <ChatBotContainer ref={botElementRef}>
        {renderMessages()}
        {showLoader && (
          <RightMsgWrapper>
            <img src={robot} alt="robot" />
            <MsgContainer>
              <Loader />
            </MsgContainer>
          </RightMsgWrapper>
        )}
      </ChatBotContainer>
      <InputWrapper>
        <Input
          placeholder="Type message here..."
          value={query}
          onKeyPress={(e) => e.key === "Enter" && handleSubmitQuery()}
          onChange={(e) => setQuery(e.target.value)}
        />
        <img src={send} alt="send message" onClick={handleSubmitQuery} />
      </InputWrapper>
    </Wrapper>
  );
};

export default ChatBot;
