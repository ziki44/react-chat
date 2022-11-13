import React, {useState, useEffect} from 'react';
import './App.css';
import MessegesList from '../../MessegesList';
import ChatMessages from '../../molecules/ChatMessages/ChatMessages';
import MessagesForm from '../../molecules/MessagesForm/MessagesForm';
import { v4 as uuidv4 } from 'uuid';
import { getMessages, postMessage, deleteMessage } from '../../helpers/http';
import { url, urlLukasz } from '../../helpers/config'
import styled from 'styled-components';

function App() {

  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages(url)
    .then((data) => setMessages(data))
    .catch(e => console.log(e.message))
  }, []);

  const handleMessageChange = (e) => {
    e.preventDefault()
    setMessage(e.target.value);
  }

  const handleAuthorChange = (e) => {
    e.preventDefault()
    setAuthor(e.target.value);
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let newPost = {
      id: uuidv4(),
      author: author,
      message: message
    };

    postMessage(url, newPost)
    .then(() => console.log("Udało się wysłać"))
    .then(() => {
      getMessages(url)
      .then(data => setMessages(data))
      .then(() => {
        setMessage("");
        setAuthor("");
      })
      .catch(e => console.log(e.message))
    })
    .catch(e => console.log(e.message))

  }

  const handleDeleteMessage = (id) => {
    deleteMessage(url, id)
    .then(() => console.log("Udało się usunąć!"))
    .then(() => {
      getMessages(url)
      .then(data => setMessages(data))
      .catch(e => console.log(e.message))
    })
    .catch(e => console.log(e.message))
  }

  return (
    <div className='container'>
        <MessagesForm handleSubmitForm={handleSubmitForm} author={author} handleAuthorChange={handleAuthorChange} message={message} handleMessageChange={handleMessageChange}/>
        <ChatMessages messages={messages} deleteMessage={handleDeleteMessage}/>
    </div>
  );
}

export default App;
