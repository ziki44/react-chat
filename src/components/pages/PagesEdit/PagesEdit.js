import React from "react";
import EditForm from "../../sections/Edit/EditForm";
import { Form, useLoaderData } from "react-router-dom";
import { getMessages } from "../../helpers/http";
import { url } from "../../helpers/config";

const PagesEdit = () => {
        // getMessages(`url/${params.messageId}`)
        // .then((data) => console.log(data))
        // .catch((e) => console.log(e.message))
    
    return (
        <>
            <EditForm/>
        </>
    )
}

export default PagesEdit;