import React from 'react';

function ChatConversation({ conversation }) {
  return (
    <div className="chat-conversation">
      {conversation.map((message, index) => (
        <div key={index} className={`chat-message ${message.sender}`}>
          <div className="chat-message-content">{message.text}</div>
          <div className="chat-message-meta">
            <span className="chat-message-time">{message.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatConversation;