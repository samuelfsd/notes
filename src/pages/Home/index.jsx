import { FiPlus, FiSearch } from 'react-icons/fi';

import {Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { Section } from '../../components/Section'

export function Home(){
  return (
    <Container>
      <Brand>
        <h1>notes</h1>
      </Brand>

      <Header />
  
      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="react" /></li>
        <li><ButtonText title="Spring" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'Fundamentos React',
            tags: [
              {id: '1', name: 'React'},
              {id: '1', name: 'Hooks'},
            ]}}
          />
        </Section>
      </Content>
      
      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}