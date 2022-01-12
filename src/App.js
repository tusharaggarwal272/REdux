import './App.css';
import Bat from './Components/Bat.js'
import store from './redux/store'
import {Provider} from 'react-redux'
import Ball from './Components/Ball';
import User from './Components/User'
function App() {
  return (
    <Provider store={store}>
    <Bat/>
    <Ball/>
    <User/>
    </Provider>
  );
}

export default App;


