import { useRef } from "react";
import "./UserLogin.css";

export default function UserLogin({ setUserEmail }) {
    const emailInput = useRef(null);

    function login() {
        const email = emailInput.current.value;

        if (email.length > 0) {
            setUserEmail(emailInput.current.value);
        }
    }

    return <>
        <div className="user-login-modal">
            <input className="email-input" ref={emailInput}></input>
            <button className="login-button" onClick={login}>Login</button>
        </div>
    </>
}
