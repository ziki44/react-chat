import React from "react";
import {Link} from "react-router-dom";


const MessegesList = ({messages, deleteMessage}) => {
    return (
            <div className="ul_container">
                <ul>
                    {messages.map(message => (
                            // <li key={message.id}>{`${message.message} - ${message.author}`}<button onClick={() => deleteMessage(message.id)}>x</button></li>
                            <li 
                                key={message.id}
                            >
                                {`${message.message} - ${message.author}`}
                                <button 
                                    onClick={() => deleteMessage(message.id)}
                                >x
                                </button>
                                <Link 
                                    to={`edit/${message.id}`}
                                >EDIT
                                </Link>
                            </li>
                    )) ?? null}
                </ul>
            </div>
    )
    
}





export default MessegesList;