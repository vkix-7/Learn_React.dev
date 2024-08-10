import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <div class="container2">
    <div class="left">
        <img src="https://img.freepik.com/premium-photo/man-with-microphone-with-laptop-computer-concept-illustration-support-assistance-call-center_960782-50352.jpg"  alt="Image"/></div>
    <div class="right">
        <h1>Contact Us</h1>
        <p>GET IN TOUCH</p>
        <form action="#">
            <div class="form-group">
                <label for="first-name">First Name *</label>
                <input type="text" id="first-name" name="first-name" required/>
            </div>
            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name"/>
            </div>
            <div class="form-group">
                <label for="company">Company</label>
                <input type="text" id="company" name="company"/>
            </div>
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</div>
  )
}

export default Contact