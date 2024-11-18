import { Box, Container, Stack } from '@mui/material';
import { PreviewPage } from './page/preview';
import { SideBar } from './components/common/sidebar';
import { drawerWidth } from './constant/constant';

function App() {
  return (
    <Box
      id="wrapper"
      sx={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <SideBar>
        <Box>
          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <p>Menu</p>
          </Stack>
        </Box>
      </SideBar>
      <Box component={'main'} sx={{ height: '100%', flexGrow: 1 }}>
        <Container
          maxWidth="lg"
          sx={{
            height: '100%',
          }}
        >
          <PreviewPage />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
