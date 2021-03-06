import { Button, Card, Divider } from "antd"
import React, { useState } from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import styled from '@emotion/styled'

import logo from 'assets/logo.png';
import left from 'assets/left.svg';
import right from 'assets/right.svg';

export const UnauthenticatedApp = () => {
  

  const [isRegister, setIsRegister] = useState(false)

  return (
    <Container >
      <Background />
      <ShadowCard>
      <Header />

        <Title>
          {
            isRegister ? 'please register': 'please login'
          }
        </Title>
        {
          isRegister ? <RegisterScreen /> : <LoginScreen />
        }
        <Divider /> 
        <a onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? 'has Account? go login' : "no account? go register"}</a>
      </ShadowCard>
      
    </Container>
  )
}

export const LongButton = styled(Button)`
width: 100%
`

const Title = styled.h2`
margin-bottom: 2.4rem;
color: rgb(94,108,132)
`

const Header = styled.header`
background: url(${logo}) no-repeat center;
padding: 5rem 0;
background-size: 8rem;
width:100%
`

const Background = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: left bottom, right bottom;
background-size: calc(((100vw - 40rem)/2) - 3.2rem), calc(((100vw - 40rem)/2) - 3.2rem), cover;
background-image: url(${left}), url(${right})
`


const ShadowCard = styled(Card)`
width: 40rem;
min-height: 56rem;
padding: 3.2rem 4rem;
border-radius: 0.3rem;
box-sizing: border-box;
box-shadow: rgba(0,0,0,0.1) 0 0 10px;
text-align: center
`


const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
`