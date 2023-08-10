// ContactForm.js

import { useState } from 'react'

export default function ContactForm() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

    // Submit form data to Formspree
    fetch('https://formspree.io/f/xknljjbg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      setSubmitted(true); 
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    })

  }

  return (
    <section className="bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">

        <h1 className="text-2xl font-bold text-center">Contact Me</h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          
          <div className="flex flex-col mb-4">
            <label className="mb-2" htmlFor="name">Name</label>  
            <input className="py-2 px-3 border border-gray-400" id="name" type="text" name="name" />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2" htmlFor="email">Email</label>
            <input className="py-2 px-3 border border-gray-400" id="email" type="email" name="email" />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2" htmlFor="message">Message</label>   
            <textarea className="py-2 px-3 border border-gray-400" id="message" name="message" rows="5"></textarea>
          </div>

          <button className="px-3 py-2 bg-blue-600 text-white rounded" type="submit">
            Send Message
          </button>

        </form>

        {submitted && <p className="text-center text-green-500 mt-4">Thanks for your message!</p>}
      
      </div>
    </section>
  )

}