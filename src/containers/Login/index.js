// arquivo Login/index.js

import React, { useState, useEffect } from 'react';
import {
  Container,
  Background,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  Button,
  Title,
  LeftImage, // Importe o styled-component da imagem da esquerda
  LogoImage // Importe o styled-component da imagem do logo
} from './styles';

import LeftImage1 from '../../assets/esquerda1.jpg'; // Importe a primeira imagem da esquerda
import LeftImage2 from '../../assets/esquerda2.jpg'; // Importe a segunda imagem da esquerda
import Logo from '../../assets/Stack__2_-removebg-preview.png'; // Importe a imagem do logo

function Login() {
  const [currentLeftImage, setCurrentLeftImage] = useState(LeftImage1); // Estado para controlar a imagem da esquerda

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeftImage((prevImage) => 
        prevImage === LeftImage1 ? LeftImage2 : LeftImage1
      );
    }, 6000); // Troca a cada 6 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Container>
        {/* Divida a página em 60% para a imagem e 40% para o conteúdo */}
        <Background>
          <LeftImage src={currentLeftImage} alt="Left Image" />
          <ContainerItens>
            <LogoImage src={Logo} alt="Logo Image" />
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

export default Login;
