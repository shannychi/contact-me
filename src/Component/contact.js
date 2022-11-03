import React from "react";

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState("Send")
    const onSumbit = (e) => {
        e.preventDefault()
        setFormStatus("Submitting...")
        const {firstName, lastName, email, message} = e.target.elements
       let fom = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: message.value,
       }
       console.log(fom)
    }
}