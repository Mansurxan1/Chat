import React from 'react';
import { useChat } from '../context/ChatContext';
import ChatNav from './ChatNav';
import ChatMessages from './ChatMessage';
import ChatInput from './ChatInput';

const ChatWindow = ({ userId }) => {
  const { users } = useChat();
  const user = users.find(u => u.id === userId);

  return (
    <div className="chat__window">
      <ChatNav user={user} />
      <ChatMessages userId={userId} />
      <ChatInput userId={userId} />
    </div>
  );
};

export default ChatWindow;