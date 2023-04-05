import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Container, Links,Content } from "./styles"

export function Details() {
  return (
    <Container>
      <Header />
      
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao react</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Libero debitis assumendaveritatis porro molestias sunt dicta aliquam itaque,
            et consequatur eligendi quidem provident minima illum praesentium excepturi a sapiente dolorem?
          </p>

          <Section title="Links úteis" >
            <Links>
              <li><a href="#">https://github.com/samuelfsd</a></li>
              <li><a href="#">https://github.com/samuelfsd</a></li>
            </Links>
          </Section>

          <Section title="Marcadores" >
              <Tag title="Java" />
              <Tag title="javascript" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}