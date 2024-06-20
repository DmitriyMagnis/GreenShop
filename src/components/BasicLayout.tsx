import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function BasicLayout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}

export default BasicLayout;
