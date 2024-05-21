// arquivo Login/index.js

import React from 'react'
import {
  Container,
  Background,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  Button,
  Title
} from './styles'

import LeftImage from '../../assets/esquerda1.jpg'; // Importe a imagem esquerda.png
import Logo from '../../assets/Stack__2_-removebg-preview.png'

function Login() {
  return (
    <div>
      <Container>
        {/* Divida a página em 60% para a imagem e 40% para o conteúdo */}
        <Background>
          <img src={LeftImage} alt="Left Image" style={{ width: '60%', height: '100%', float: 'left' }} />
          <ContainerItens>
          <img src={Logo} alt="Logo Image" style={{ width: '60%', height: '100%', float: 'left' }} />
            <Title>Login</Title>
            <Label>Email</Label>
            <Input></Input>
            <Label>Senha</Label> 
            <Input type="password"></Input> 
            <Button>Sign in</Button>
            <SignInLink>
              Não possui conta ? <p>SignUp</p>
            </SignInLink>
          </ContainerItens>
        </Background>
      </Container>
    </div>
  )
}

export default Login
