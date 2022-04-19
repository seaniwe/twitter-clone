import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {login} from '../../../http/account'
import { toast } from 'react-toastify';

import styles from './style.scss' 

function LoginModal() {

    const navigate = useNavigate()
    const [name, setName] = useState('seaniwe')
    const [password, setPassword] = useState('seaniwe')

    function handleOnLogin(data) {
        if (data == 'notFound') return toast.info('Account not found!')
        if (data == 'incorrectPassword') return toast.error('Password in correct!')
        if (data == 'success') {
            toast.success('Login successfull')
            navigate('/')
        }
    }

    function onLogin() {
        if (!name) return toast.warn('Enter login')
        if (!password) return toast.warn('Enter password')
        if (name.length < 4) return toast.warn('Name length cannot be less than 4 characters')
        if (password.length < 4) return toast.warn('Password length cannot be less than 4 characters')

        login(name, password).then((response) => handleOnLogin(response.data))
    }

    return (
        <div id="Modal">
            <div className="form">
                <div className="btn-close" onClick={() => {navigate('/')}}>
                    <img src={require('./img/close.png')} alt="" />
                </div>
                <div className="inputs">
                    <div className="inputField">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                        <span className="placeholder">Name or E-Mail</span>
                    </div>
                    <div className="inputField">
                        <input type="text" value={password} onChange={e => setPassword(e.target.value)} required />
                        <span className="placeholder">Password</span>
                    </div>
                </div>

                <div className="btn" onClick={onLogin}>Sign in</div>
            </div>
        </div>
    )
}

export default LoginModal