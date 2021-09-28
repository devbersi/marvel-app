import React,{ useContext, useState} from 'react';
import {
  DivTotal,
  Title,
  Label,
  Input,
  Button,
  Form,
  Div,
  SecondTitle,
  ButtonRegister,
  ForgetPassword,
  Checkbox,
  DivOptions,
  DivBackground,
  Anchor,
} from './styles/styles';
import background from '../../Assets/images/login.png';

const Login = () => {
  const [credentials, setCredentials] = useState({ user: '', pass: '' })

  const handleFormSubmit = () => {
    console.log(credentials)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  return (
    <DivBackground style={{ backgroundImage: 'url(' + background + ')', backgroundSize: 'cover' }}>
      <DivTotal>
        <Form autoComplete="nope">
          <Title>Bem-Vindo(a) de Volta!</Title>
          <SecondTitle>Acesse sua Conta.</SecondTitle>
          <Div>
            <Input type="text" name="user" autoComplete="off" placeholder="User" />
          </Div>
          <Div>
            <Input type="password" name="pass" placeholder="Password" />
          </Div>
          <DivOptions>
            <Label>
              Salvar login
              <Checkbox type="checkbox" />
            </Label>
            <ForgetPassword href="/">Esqueci a senha</ForgetPassword>
          </DivOptions>
          <Button type="submit" onChange={handleFormSubmit}>
            Entrar
          </Button>

          <ButtonRegister>
            Ainda não tem Login? <Anchor href="/Register">Cadastre-se</Anchor>
          </ButtonRegister>
        </Form>
      </DivTotal>
    </DivBackground>
  );
}

export default Login

