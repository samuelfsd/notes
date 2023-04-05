import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn(){
  return (
    <Container>
      <Form>
        <h1>notes</h1>
        <p>Aplicação para gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

          <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar" />
          
        <a href="#">Criar conta!</a>
      </Form>
      <Background />
  </Container>
  )
}