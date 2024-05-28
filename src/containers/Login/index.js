import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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
  ErrorMessage,
} from './styles'

import LeftImage1 from '../../assets/esquerda1.jpg'
import LeftImage2 from '../../assets/esquerda2.jpg'
import Logo from '../../assets/Stack__2_-removebg-preview.png'

const schema = Yup.object().shape({
  email: Yup.string().email("Digite um e-mail válido").required("*O e-mail é obrigatório"),
  password: Yup.string().required("A senha é obrigatória").min(6,"A senha deve ter pelo menos 6 dígitos"),
})

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

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
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Label>Email</Label>
              <Input {...register('email')} error={errors.email?.message}/>
              <ErrorMessage  className='errors' >{errors.email?.message}</ErrorMessage>

              <Label>Senha</Label>
              <Input {...register('password')} error={errors.password?.message}/>
              <ErrorMessage className='errors'>{errors.password?.message}</ErrorMessage>

              <Button type="submit">Sign in</Button>
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
