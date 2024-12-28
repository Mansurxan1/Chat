import React, { createContext, useState, useContext } from 'react';
import user1 from "@i/human1.png"
import user2 from "@i/human2.png"


const ChatContext = createContext();

const initialMessages = [
  { 
    id: 1, 
    senderId: 'user1', 
    text: 'Привет. Как дела? Где ты изучаешь программирование?', 
    timestamp: '12:21', 
    type: 'text' 
  },
  { 
    id: 2, 
    senderId: 'user2', 
    text: 'Привет. Нормально. Как у тебя дела? Я учусь в учебном центре PROWEB', 
    timestamp: '12:41', 
    type: 'text' 
  },
];

const users = [
  { 
    id: 'user1', 
    name: 'Евгений', 
    avatar: user2 
  },
  { 
    id: 'user2', 
    name: 'Александр', 
    avatar: user1 
  },
];

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(initialMessages);

  const sendMessage = (userId, content, type = 'text') => {
    const newMessage = {id: messages.length + 1, senderId: userId,
      text: content, timestamp: new Date().toLocaleTimeString([], 
        { hour: '2-digit', minute: '2-digit' }), type: type,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, users, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);

