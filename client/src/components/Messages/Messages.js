import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./Messages.css";
import EachMessage from "../eachMessageComponent/eachMessage.js";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <div key={i}>
          <EachMessage message={message} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
