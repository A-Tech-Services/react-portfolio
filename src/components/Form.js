import "./FormStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () =>{
    const form = useRef();

    // notification box.
    const notify = () =>{
        toast.success("Message Sent Successfully!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }


    // function for sending the emails.
    const sendEmail = (e) => {
        e.preventDefault();
        const ServiceID = "service_67tw2ic";
        const TemplateID = "template_949w20j";
        const PublicID = "e2UoFnOGvUlWjlnwO";

        emailjs.sendForm(ServiceID, TemplateID, form.current, PublicID)
        .then((result) => {
            console.log(result.text);
            window.location = "/contact";
        }, (error) => {
            console.log(error.text);
        });
    }
    
        
    return(
        <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name:</label>
                <input type="text" name="user_name"></input>

                <label>Email:</label>
                <input type="text" name="user_email"></input>

                <label>Subject:</label>
                <input name="subject" type="text"></input>

                <label>Your Name:</label>
                <textarea name="message" rows={6} placeholder="Type Your Message Here"/>

                <button onClick={notify} className="btn">Submit</button>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Form;