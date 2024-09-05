import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import styled from 'styled-components';
import UltimosLancamentos from './components/UltimosLancamentos';
import RecomendacaoLivro from './components/RecomendacaoLivro';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(117,117,117,1) 0%, rgba(94,94,94,1) 6%, rgba(40,40,40,1) 88%);

  li{
    list-style: none;
  }
`
function App() {
  return (
    <AppContainer>
      <Header></Header>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
