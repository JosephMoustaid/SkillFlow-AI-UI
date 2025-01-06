import React, { useState } from 'react';
import Nav from "../components/Nav";
import ChatConversation from "../components/ChatConversation.jsx";
import ChatInput from "../components/ChatInput.jsx";

import logo from '../images/logo-no-bg.png';

function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [conversation, setConversation] = useState([
    { sender: 'user', text: 'Hello!', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })},
    { sender: 'bot', text: 'Hi there! How can I help you?', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
  ]);
  const [history, setHistory] = useState([
    { name: 'learning how to make a computer', conversation: [
      { sender: 'user', text: 'Hello!', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })},
      { sender: 'bot', text: 'Hi there! How can I help you?', date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    ]
    }
  ]);
  
  const handleSidebarToggle = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  const handleSendMessage = (message) => {
    const newMessage = {
      sender: 'user',
      text: message,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setConversation([...conversation, newMessage]);
  };

  return (
    <div className={`home-container ${isSidebarOpen ? 'sidebar-open' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.3s ease' }}>
      <div className="header" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--header-bg-color)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="SkillMentor" className="logo" style={{ maxHeight: '40px', maxWidth: '40px', marginRight: '0.5rem' }} />
          <span className="logo-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>SkillFlow</span>
        </div>
      </div>
      <Nav onSidebarToggle={handleSidebarToggle} history={history} setHistory={setHistory} />
      <div className="chat-container" style={{ width: '100%', transition: 'width 0.3s ease' }}>
        <ChatConversation conversation={conversation} history={history} setHistory={setHistory} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default Home;