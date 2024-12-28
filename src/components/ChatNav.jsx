import React from 'react';

const ChatNav = ({ user }) => {
  return (
    <div className="chat__nav">
      <div className="user__avatar">
        <img src={user.avatar} alt={user.name} />
      </div>
      <div className="user__info">
        <div className="user__name">{user.name}</div>
        <div className="user__status">Онлайн</div>
      </div>
    </div>
  );
};

export default ChatNav;

