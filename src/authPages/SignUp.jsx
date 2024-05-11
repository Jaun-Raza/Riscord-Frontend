import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import Signin from '../pages/Signin';
import { useSignUpMutation } from '../RTK/ApiRequests'
import Cookies from 'js-cookie'


const SignUp = () => {

    const [signUpData, setSignUpData] = useState({
        email: "",
        username: "",
        password: "",
        bio: ""
    });

    console.log(signUpData);
    const navigate = useNavigate();
    const [signUp] = useSignUpMutation();

    const handleChange = (e) => {
        console.log(e.target.name)
        setSignUpData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const { email, password, username, bio } = signUpData;

        if (!email || !password) return alert("Please fill out all fields")
        else if (!email.includes('@gmail.com')) {
            alert("Please provide a appropiate email")
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters long");
        } else {
            const res = await signUp({
                email,
                username,
                password,
                bio: bio?.slice(0, 180)
            })
            
            if (!res.data?.success) {

                if (res.data?.error) {
                    alert(res.data?.error);
                } else {
                    alert('Unable To create your account');
                }
    
            } else {
                Cookies.set('ris_ui_tok_id', res.data.token);
            }
        }
    }

    const PageContent = <SignUpWrapper>
        <h1>Riscord - SignUp</h1>
        <form onSubmit={handleClick}>
            <input type='email' placeholder='Email' name='email' value={signUpData?.email} onChange={handleChange} />
            <input type="username" placeholder='Username' name='username' value={signUpData.username} onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' value={signUpData.password} onChange={handleChange} />
            <input type="text" placeholder='Bio' name='bio' value={signUpData.bio} onChange={handleChange} />
            <span>Already Registered? <a onClick={() => {
                navigate('/login')
            }}>Login</a></span>
            <button type="submit" >Sign Up</button>
        </form>
    </SignUpWrapper>

    return (
        <Signin content={PageContent} />
    )
}

const SignUpWrapper = styled.section`
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

export default SignUp