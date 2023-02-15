import { Provider } from 'react-redux/es/exports';
import { TicTacToe } from './TicTacToe';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <TicTacToe />
    </Provider>
  );
}

export default App;
