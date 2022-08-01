/* eslint-disable */ 
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef ,useState} from 'react';
const Form = () =>{
    const [captchaReady, setCaptchaReady] = useState(false);
    const siteKey="6LfmOvAgAAAAACOs_9oUJx47wX25EmjjK6j91D4U"
    const captchaRef = useRef(null)
    const handleSubmit = (e) =>{
        e.preventDefault();
        window.grecaptcha.ready(function() {
          window.grecaptcha.execute(siteKey, {action: 'submit'}).then(function(token) {
            // Send form value as well as token to the server
            
          });
        });
    }
    const onLoadRechapta=()=>{
        setCaptchaReady(true)
    }
    return(
        <form onSubmit={handleSubmit} >
            <label htmlFor="name">Name</label>
                <input type="text" id="name" className="input"/>
                <ReCAPTCHA
                    sitekey={siteKey}
                    onLoad={onLoadRechapta}
                />
            <button>Submit</button>
        </form>
    )
}

export default Form