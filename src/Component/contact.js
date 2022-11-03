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
      <h2 className="mb-3">React Contact Form Component Example</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            FirstName
          </label>
          <input className="form-control" type="text" id="first-name" required />
          <label className="form-label" htmlFor="lastName">
            lastName
          </label>
          <input className="form-control" type="text" id="last-name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn__submit" type="submit">
          {formStatus}
        </button>
      </form>
        </div>
    )
}

export default ContactForm