import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Signin from '../pages/Signin';
import { useSignUpMutation } from '../RTK/ApiRequests';

const Login = () => {
    const [logInData, setSlogInData] = useState({
        email: '',
        password: '',
        bio: ''
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSlogInData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    }

    const handleClick = async () => {
        const { email, password, bio } = logInData;

    }

    const PageContent = <LogInWrapper>
            <h1>Riscord - LogIn</h1>
            <form onSubmit={handleClick}>
                <input type="email" placeholder='Email' name='email' value={logInData.email} onChange={handleChange} />
                <input type="password" placeholder='Password' name='password' value={logInData.password} onChange={handleChange} />
                <input type="bio" placeholder='Bio' name='bio' value={logInData.bio} onChange={handleChange} />
                <span>Want to register? <a onClick={() => {
                    navigate('/sign-in')
                }}>SignUp</a></span>
                <button>Log In</button>
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