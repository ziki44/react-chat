import React from "react";

const EditForm = () => {
    return (
            <form className='form'>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label> Autor:
                                <input type="text" name="author"></input>      
                                </label>
                            </td>
                            <td>
                                <label> Wiadomość:
                                <input type="text" name="message"></input>           
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <button type='submit'>Zapisz</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
          </form>
    )
}

export default EditForm;