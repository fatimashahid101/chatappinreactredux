import AppRouter from './config/Router';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
 < AppRouter />
    </Provider>

  );
}

export default App;
