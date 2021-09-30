import {Container} from './components/styles/Container.styled';
import Header from './components/header';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './components/styles/Global';

const theme = {
  
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px',
}

function App() {
  // really cool way of importing global styles
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header></Header>
        <Container>
          <h1>hello</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
