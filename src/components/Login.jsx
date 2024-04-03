import { useContext, useRef, useState } from 'react'
import loginStyles from '../styles/login.module.css'
import axios from 'axios';
import AuthContext, { AuthProvider } from '../services/AuthContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const unameRef = useRef();
    const pwordRef = useRef();
    const [unameErr, setunameErr] = useState('');
    const [pwordErr, setpwordErr] = useState('')
    const navigate = useNavigate();
    const [isLoogedIn, setIsLoggedIn] = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        let isFormValid = validateForm();
        if (isFormValid) {
            login()
        }
    }

    const login = () => {

       

        let uname = unameRef.current.value;
        let pword = pwordRef.current.value;

        axios.post('http://localhost:5000/freshkart/login', {
            uname, pword
        }).then(res => {
            setIsLoggedIn(true)
            navigate('/home')
        }, err => {
            toast.error("Invalid credentials", {theme:"colored", autoClose:2000})
        })
    }

    const validateForm = () => {
        let isValid = false
        let uname = unameRef.current.value;
        let pword = pwordRef.current.value;
        if (uname.trim() === '') { setunameErr('Username is requied') }
        else if (pword.trim() === '') {
            setunameErr('')
            setpwordErr('Password is requied!')
        }
        else {
            isValid = true
            setpwordErr('')
            setunameErr('')
        }
        return isValid;
    }

    return (
        <div className={loginStyles.loginContainer}>
            <ToastContainer />
            <div className={loginStyles.heading}>Login</div>
            <div className={loginStyles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor='uname'> Username
                            <input type='text' name='uname' ref={unameRef} />
                            {unameErr.length > 0 ? (
                                <span className={loginStyles.error}>{unameErr}</span>
                            ) : null}
                        </label>
                    </div>
                    <div className={loginStyles.formGroup}>
                        <label htmlFor='pword'>Password
                            <input type='password' name='pword' ref={pwordRef} />
                            {pwordErr.length > 0 ? (
                                <span className={loginStyles.error}>{pwordErr}</span>
                            ) : null}
                        </label>
                    </div>
                    <button className={loginStyles.loginBtn} type='submit'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
