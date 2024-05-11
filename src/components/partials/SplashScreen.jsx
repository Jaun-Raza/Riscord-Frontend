import React, { useState } from 'react'
import styled from 'styled-components'
import Loader from './Loader'

const SplashScreen = () => {

    const [isLoading, setIsLoading] = useState(false);

    setTimeout(() => {
        setIsLoading(true)
    }, 3000)

    return (
        <SplashScreenWrapper>
            <div>
                <h1>Riscord</h1>
                {
                    isLoading ? <Loader /> : null
                }
            </div>
            <code><h4>© 2024 <a href='https://jaun-portfolio.vercel.app/' target='_blank' style={{ color: '#5393ff' }}>Jaun Raza</a>, All rights reserved. </h4></code>
        </SplashScreenWrapper>
    )
}

const SplashScreenWrapper = styled.section`  
    height: 100vh;
    display: flex;
    flex-direction: column;


    div {
        margin: auto;
        display: flex;
        gap: 2rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
            font-size: 2rem;
        }
    }
    
    code {
        text-align: center;
    }
`;

export default SplashScreen