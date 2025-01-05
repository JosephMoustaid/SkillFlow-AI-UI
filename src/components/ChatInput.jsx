import React, { useState } from 'react';
import { FiSend } from "react-icons/fi";
import { HiMicrophone } from "react-icons/hi";
import { HiStop } from "react-icons/hi2";
function ChatInput() {
  const [isListening, setIsListening] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  return (
    <div className="chat-input d-flex justify-content-center">
      <button className='prompt-mic shadow' onClick={toggleListening}>
        {isListening ? <HiStop />: <HiMicrophone />}
      </button>
      {isListening && <div className="listening-indicator">Listening...</div>}
      <textarea name="prompt" className="prompt-input shadow" id="" placeholder="Write a prompt here"></textarea>
      <div></div>
      <button className='prompt-send shadow'><FiSend /></button>
    </div>
  );
}

export default ChatInput;