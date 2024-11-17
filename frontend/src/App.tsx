import { Container } from '@mui/material';
import { PreviewPage } from './page/preview';

function App() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <PreviewPage />
    </Container>
  );
}

export default App;
