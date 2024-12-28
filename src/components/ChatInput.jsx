import React, { useState, useRef } from 'react';
import { useChat } from '../context/ChatContext';
import { FaCamera } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

const ChatInput = ({ userId }) => {
  const [message, setMessage] = useState('');
  const { sendMessage } = useChat();
  const fileInputRef = useRef(null);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(userId, message);
      setMessage('');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        sendMessage(userId, event.target.result, 'image');
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click();
  };

  const adjustTextareaHeight = (e) => {
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="chat__input">
      <form onSubmit={handleSubmit}>
        <div className="textarea__wrapper">
          <textarea value={message} onChange={handleMessageChange} 
            onInput={adjustTextareaHeight} placeholder="Написать сообщение..."
            rows={1} className='textarea__text'
          />
          {message.trim() ? (
            <button type="submit" className="textarea__send-button">
              <IoSend />
            </button>
          ) : (
            <button type="button" onClick={triggerImageUpload}
              className="textarea__image-button">
              <FaCamera />
            </button>
          )}
          <input type="file" ref={fileInputRef} onChange={handleImageUpload}
            accept="image/*" style={{ display: 'none' }}
          />
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
