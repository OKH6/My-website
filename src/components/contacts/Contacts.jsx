import { useState } from "react";
import "./contacts.scss" 



export default function Contacts() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
    };
    return (




        <div>


            <div className="cant">
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
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                    </form>
                </div>
            </div>

        </div>

    )
}
