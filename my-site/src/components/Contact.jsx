import React from 'react'
export default function Contact() {
    return (
        <div style={{width: "90vw", display: "flex", justifyContent: "center", paddingTop: "10vh"}}>
        <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/taubman33@gmail.com" method="post">
            <fieldset id="fs-frm-inputs">
                <label for="full-name">Name</label>
                <input type="text" name="name" id="full-name" placeholder="First and Last Name" required=""/>
                    <label for="email-address">Email Address</label>
                    <input type="email" name="_replyto" id="email-address" placeholder="Please eneter your email here..." required=""/>
                        <label for="message">Message</label>
                        <textarea rows="5" name="message" id="message" placeholder="Please enter message here..." required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
        </fieldset>
                        <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}