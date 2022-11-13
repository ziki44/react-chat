import React from "react";

const MessagesForm = ({handleSubmitForm, author, handleAuthorChange, message, handleMessageChange, }) => {
    return (
        <form className='form' onSubmit={handleSubmitForm}>
            <table>
                <tbody>
                    <tr>
                    <td>
                        <label> Autor:
                        <input type="text" name="author" value={author} onChange={handleAuthorChange}></input>      
                        </label>
                    </td>
                    <td>
                        <label> Wiadomość:
                        <input type="text" name="message" value={message} onChange={handleMessageChange}></input>           
                        </label>
                    </td>
                    </tr>
                    <tr>
                    <td></td>
                    <td><button type='submit'>Wyślij</button></td>
                    </tr>
                </tbody>
            </table>
      </form>
    )
}

export default MessagesForm;
