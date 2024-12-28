  import React, { useState } from 'react';
  import { useChat } from '../context/ChatContext';
  import ImageModal from './ImageModal';

  const ChatMessages = ({ userId }) => {
    const { messages } = useChat();
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imageUrl) => {
      setSelectedImage(imageUrl);
    };

    const closeImageModal = () => {
      setSelectedImage(null);
    };
    
    return (
      <div className="chat__messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`text__message ${message.senderId === userId ? 'text__sent' : 'text__received'}`}
          >
            {message.type === 'text' ? (
              <div className="text__content text__break-words">{message.text}</div>
            ) : (
              <img src={message.text} alt="" className="text__uploaded-image"
                onClick={() => openImageModal(message.text)}
              />
            )}
            <div className="text__timestamp">{message.timestamp}</div>
          </div>
        ))}
        {selectedImage && (
          <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />
        )}
      </div>
    );
  };

  export default ChatMessages;
