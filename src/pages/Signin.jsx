import React from 'react'
import styled from 'styled-components'
import SignUp from '../authPages/SignUp';

const Signin = ({content}) => {

  return (
    !content ? <SignUp /> : <SignInWrapper>
    <div className="left">
      <h1>Riscord</h1>
      <p>Step into seamless communication with Riscord - where connectivity meets simplicity.</p>
      <p>Sign up now to unlock a world of effortless collaboration and streamlined interaction. Join our vibrant community and elevate your communication experience to new heights. </p>
      <p>Let's Riscord!</p>
      <code><h4>© 2024 <a href='https://jaun-portfolio.vercel.app/' target='_blank' style={{ color: '#5393ff' }}>Jaun Raza</a>, All rights reserved. </h4></code>
    </div>
    <div className="right">
      {content}
    </div>
  </SignInWrapper>
  )
}

const SignInWrapper = styled.section`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  height: 90vh;
  border: 1px solid;

  .left {

    h1 {
      font-weight: bold;
    }

    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #2a2a2e;
    height: 100%;
  }
`;

export default Signin