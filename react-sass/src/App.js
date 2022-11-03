import '../src/App.scss';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Main from './components/main';
import About from './components/About';
import Articles from './components/Articles';
function App() {
  return (
    <Container >
     <Header/>
     <Main/>
     <About/>
     <Articles/>
    </Container>
  );
}

export default App;
