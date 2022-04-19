import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { register } from '../../../http/account'

import styles from './style.scss' 

function RegisterModal() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOnRegister(data) {
        if (data == 'emailIsBusy') return toast.error('Email is busy!')
        if (data == 'success') {
            toast.success('Account create!')
            navigate('/')
        }
    }

    function onRegister() {
        if (!name) return toast.warn('Enter login')
        if (!email) return toast.warn('Enter email')
        if (!password) return toast.warn('Enter password')
        if (name.length < 4) return toast.warn('Name length cannot be less than 4 characters')
        if (password.length < 4) return toast.warn('Password length cannot be less than 4 characters')

        register(name, email, password).then((response) => handleOnRegister(response.data))
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
                        <span className="placeholder">Name</span>
                    </div>
                    <div className="inputField">
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
                        <span className="placeholder">E-Mail</span>
                    </div>
                    <div className="inputField">
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                        <span className="placeholder">Password</span>
                    </div>
                </div>

                <div className="btn" onClick={onRegister}>Create account</div>
            </div>
        </div>
    )
}

export default RegisterModal