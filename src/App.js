import {Container} from './components/styles/Container.styled';
import Header from './components/header';
import Footer from './components/header';
import Card from './components/Card';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './components/styles/Global';
import content from './content';

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
          {content.map((item, index) => (
            <Card key={index} item={item}></Card>
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
