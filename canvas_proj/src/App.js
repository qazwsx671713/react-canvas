import './App.css';
import Canvas from './components/Canvas/Canvas';
import {Provider} from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Canvas></Canvas>
      </div>
    </Provider>
  );
}

export default App;
