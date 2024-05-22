import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import {
  Container,
  Background,
  ContainerItens,
  Label,
  Input,
  SignInLink,
  Button,
  Title,
  LeftImage,
  LogoImage,
} from './styles'

import LeftImage1 from '../../assets/esquerda1.jpg'
import LeftImage2 from '../../assets/esquerda2.jpg'
import Logo from '../../assets/Stack__2_-removebg-preview.png'

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [currentLeftImage, setCurrentLeftImage] = useState(LeftImage1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeftImage(prevImage =>
        prevImage === LeftImage1 ? LeftImage2 : LeftImage1
      )
    }, 6000) // Troca a cada 6 segundos

    return () => clearInterval(interval)
  }, [])

  const onSubmit = data => console.log(data)

  return (
    <div>
      <Container>
        <Background>
          <LeftImage src={currentLeftImage} alt="Left Image" />
          <ContainerItens>
            <LogoImage src={Logo} alt="Logo Image" />
            <Title>Login</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Label>Email</Label>
              <Input{...register('email')}/>

              <Label>Senha</Label>
              <Input{...register('password')}/>

              <Button type='submit'>Sign in</Button>
            </form>
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
