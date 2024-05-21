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
  background-color: #111; /* Altere para a cor cinza escuro */
`

export const ContainerItens = styled.div`
  position: absolute;
  right: 0; /* Posicione à direita */
  top: 50%; /* Centralize verticalmente */
  transform: translateY(-50%); /* Centralize verticalmente */
  padding: 20px;
  width: 40%;
  background-color: transparent; /* Altere para a cor de fundo desejada */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centralize os itens */
`

export const Label = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  color: #fff; /* Altere para a cor branca */
  position: relative;
  right: 220px;
`

export const Input = styled.input`
  width: 70%; /* Defina a largura para 60% */
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const SignInLink = styled.a`
  display: block;
  margin-top: 20px;
  color: #fff; /* Altere para a cor branca */
  position:relative;
    right: 170px;
  p{
    text-decoration: underline; /* Sublinhe o link */
    
  }
`

export const Button = styled.button`
  margin-top: 20px; /* Adicione espaço acima do botão */
  padding: 12px 25px; /* Aumente o padding para deixar o botão maior */
  background-color: #7f00ff; /* Altere para a cor roxa */
  color: #fff;
  border: none;
  border-radius: 25px; /* Ajuste o border-radius para tornar o botão mais arredondado */
  cursor: pointer;
  position:relative;
  right: 170px;
  width: 160px;
`;

export const Title = styled.h1`
  text-align: center; /* Centralize o texto */
  color: #fff; /* Altere para a cor branca */
  margin-bottom:50px
`;
