// arquivo login/styles.js

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: #111;
`

export const ContainerItens = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  width: 40%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`

export const Label = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #fff;
  position: relative;
  right: 220px;
`

export const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 23px;
`

export const SignInLink = styled.a`
  display: block;
  margin-top: 20px;
  color: #fff;
  position: relative;
  right: 170px;
  p {
    text-decoration: underline;
  }
`

export const Button = styled.button`
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #d2691e;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  right: 170px;
  width: 160px;
  font-weight: 400px;
  font-size: 20px;
`

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  margin-bottom: 50px;
`

export const LeftImage = styled.img`
  width: 60%;
  height: 100%;
  float: left;
  border-radius: 10px;
  box-sizing: border-box;
  transition: opacity 0.5s ease;
`

export const LogoImage = styled.img`
  width: 60%;
  height: 100%;
  float: left;
  margin-bottom: 20px;
`
