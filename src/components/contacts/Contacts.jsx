import { useState } from "react";
import "./contacts.scss" 
import emailjs from "emailjs-com"


export default function Contacts() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      //
      console.log(e)
      e.preventDefault();
      var data = {
          name: e.target.name.value,
          email:e.target.email.value,
          message:e.target.message.value,
        
        
        }
      console.log(data)
      emailjs.send('service_itw33vk', 'template_o3b6ebo', data, 'user_ehQXfJE48zAvtxGwYMESl')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
      e.target.reset()
      












      setMessage(true);
    };
    return (




        <div>


            <div className="head">
                <hr className="hr"/>
                <h1>Contact</h1>
                <hr className="hr"/>
            </div>   


            <div className="contact" id="contacts">
                <div className="left">
                    <img src="assets/shake.svg" alt="" />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" placeholder="Name" name="name" />
                        <input type="email" className="form-control" placeholder="Email" name="email"/>
                        <textarea placeholder="Message" className="form-control" name="message"></textarea>
                        <button type="submit">Send</button>
                        {message && <span>Thanks, I'll reply ASAP :)</span>}
                    </form>
                </div>
            </div>

        </div>

    )
}
