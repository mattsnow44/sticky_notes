import React from 'react';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import { Container, Header } from 'semantic-ui-react';

const App = () => (
  <div>
    <Container>
      <Header as='h1' color='blue' textAlign='center'>Sticky Notes</Header>
      <StickyForm />
      <br />
      <StickyList />
    </Container>
  </div>
)

export default App;
