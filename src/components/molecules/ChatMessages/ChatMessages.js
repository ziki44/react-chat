import React from "react";

const ChatMessages = ({messages, deleteMessage}) => {
    return (
            <div className="ul_container">
                <ul>
                    {messages.map(message => (
                            <li key={message.id}>{`${message.message} - ${message.author}`}<button onClick={() => deleteMessage(message.id)}>x</button></li>
                    )) ?? null}
                </ul>
            </div>
    )
    
}





export default ChatMessages;