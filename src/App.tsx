import BasicLayout from '@components/BasicLayout';
import { store } from '@store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BasicLayout />
    </Provider>
  );
}

export default App;
