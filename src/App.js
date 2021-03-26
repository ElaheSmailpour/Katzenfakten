
import './App.css';
import { Provider } from 'react-redux'
import {createStore,applyMiddleware} from "redux"
import katzereuder from "./reducers/katzereuder"
import KatzenFakten from "./components/KatzenFakten"
import thunk from "redux-thunk"
const meinspeicher=createStore(katzereuder,applyMiddleware(thunk))
function App() {
  return (
    <Provider store={meinspeicher}>
    <div className="App">
   
       <KatzenFakten/>
    </div>
    </Provider>
  );
}

export default App;
