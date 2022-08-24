import React from 'react'
import { useState } from "react";
import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const auth = useAuth()

    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        auth.Register({ registerEmail, registerPassword }, () => {
            navigate("/firstPage", { replace: true });
        });
    }

    return (
        <>
            <h3> Register User</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" type="text" onChange={e => setRegisterEmail(e.target.value)} />
                </label>
                <label>
                    Password: <input name="password" type="password" onChange={e => setRegisterPassword(e.target.value)} />
                </label>
                <button type="submit">register</button>
            </form>
        </>
    )
}

export default Register