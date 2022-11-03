import React from "react";

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState("Send message")
    const onSubmit = (e) => {
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
    return(
            <div className="container mt-5">
      <h1 className="mb-3">Contact Me</h1>
      <h4><small>Hi there contact me to ask me about anything you have in mind.</small></h4>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            First name
          </label>
          <input className="form-control" type="text" id="first_name" placeholder="enter your first name" required />
          <label className="form-label" htmlFor="lastName">
            Last name
          </label>
          <input className="form-control" type="text" id="last_name" placeholder="enter your last name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" placeholder="yourname@email.com" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" placeholder="send me a message i will reply as soon as possible" required />
        </div>
        <div>
            <label>
                <input type="checkbox" required/> 
                you agree to providing your data to Edeh Sharon who may contact you
            </label>
        </div>
        <p></p>
        <button className="btn__submit" type="submit">
          {formStatus}
        </button>
      </form>
        </div>
    )
}

export default ContactForm