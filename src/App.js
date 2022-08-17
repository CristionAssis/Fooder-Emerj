import Footer from './Views/Fooder/Index';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  `;

function App() {
  return (
    <Container>
      <div className="App">
        <h1>Bonjour le monde !</h1>
      <Footer/>
      </div>
    </Container>

  );
}

export default App;
