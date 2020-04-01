import React from 'react'
export default function Contact() {
    return (


        <div className = "contact-page">
            <h1> Contact Me</h1>

        <div className="form-container"
                    style={{width: "90vw", 
                    display: "flex", 
                    justifyContent: "center", 
                    paddingTop: "1vh"}}>


         

        <form id="fs-frm" 
              name="simple-contact-form" 
              accept-charset="utf-8" 
              action="https://formspree.io/xdodpqwb" 
              method="post">

            <fieldset id="fs-frm-inputs">
                <label for="full-name"><h3>Name</h3></label>
                <input type="text" 
                       name="name" 
                       id="full-name"
                       placeholder="First and Last" 
                       required=""/>

                    <label for="email-address"><h3>Email</h3></label>

                    
                    <input type="email" name="_replyto" id="email-address" placeholder=" " required=""/>
                        <label for="message"><h3>Message</h3></label>
                        <textarea rows="8" name="message" id="message" placeholder=" " required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
        </fieldset>
                        <input type="submit" value="Submit" style={{backgroundColor: "teal", color: "white", borderRadius: "10px"}}/>
        </form>
        </div>
        </div>
    )
}