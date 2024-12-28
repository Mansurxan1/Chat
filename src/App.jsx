  import React from 'react';
  import { ChatProvider } from './context/ChatContext';
  import ChatWindow from './components/ChatWindow';

  function App() {
    return (
      <ChatProvider>
        <div className="app">
          <ChatWindow userId="user2" />
          <ChatWindow userId="user1" />
        </div>
      </ChatProvider>
    );
  }

  export default App;

