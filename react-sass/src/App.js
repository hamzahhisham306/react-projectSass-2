import '../src/App.scss';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Main from './components/main';
function App() {
  return (
    <Container >
     <Header/>
     <Main/>
    </Container>
  );
}

export default App;
