import React from 'react';


const Messages = ({ message }) => {
  const { id, text, position,date } = message;
        return (
            <div className="chat">
              <div className="chat-message">
                <div className={position}>{text}</div>
                <div >{date}</div>
            </div>
           </div>
        )
    }
    export default Messages
