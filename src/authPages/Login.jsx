import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Signin from '../pages/Signin';
import { useLogInMutation } from '../RTK/ApiRequests';

// Cookies
import Cookies from 'js-cookie';

const Login = () => {
    const [logInData, setSlogInData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate()
    const [logIn] = useLogInMutation()

    const handleChange = (e) => {
        setSlogInData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const { email, password } = logInData;

        if (!email || !password) return alert("Please fill out all fields")
            else if (!email.includes('@gmail.com')) {
                alert("Please provide a appropiate email")
            } else if (password.length < 8) {
                alert("Password must be at least 8 characters long");
            } else {
                const res = await logIn({
                    email,
                    password
                })
                
                if (!res.data?.success) {
    
                    if (res.error?.data) {
                        alert(res.error?.data?.error);
                    } else {
                        alert('Unable To Login');
                    }
        
                } else {
                    Cookies.set('ris_ui_tok_id', res.data.token);
                    window.location.href='/'
                }
            }

    }

    const PageContent = <LogInWrapper>
            <h1>Riscord - LogIn</h1>
            <form onSubmit={handleClick}>
                <input type="email" placeholder='Email' name='email' value={logInData.email} onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' value={logInData.password} onChange={handleChange} />
                <span>Want to register? <a onClick={() => {
                    navigate('/sign-in')
                }}>SignUp</a></span>
                <button type='submit'>Log In</button>
            </form>
        </LogInWrapper>


    return (
        <Signin content={PageContent} />
    )

}

const LogInWrapper = styled.section`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;

h1 {
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

span {
    
    a {
        color: rgb(2, 105, 0);
        cursor: pointer;
    }
}

form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;

    input {
        width: 28rem;
        padding: 0.5rem;
        border: 1rem;
        font-size: 1rem;
        color: white;
        border-bottom: 1px solid;
        background: transparent;
        outline: none;
    }

    button {
        width: 7rem;
        padding: 0.5rem;
        border: none;
        border-radius: 0.3rem;
        font-size: 1rem;
        color: #fff;
        background-color: rgb(2, 105, 0);
        opacity: 0.7;
        
        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }
}
`;

export default Login