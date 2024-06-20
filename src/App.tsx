import BasicLayout from '@components/BasicLayout';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import teal from '@mui/material/colors/teal';
import { store } from '@store/store';
import { Provider } from 'react-redux';

const defaultTheme = createTheme({
  palette: {
    primary: teal,
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <CssBaseline />
        <BasicLayout />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
