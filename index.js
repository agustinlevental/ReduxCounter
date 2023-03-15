import Counter from './Components/Counter';
import { Provider } from 'react-redux';
import store from "./store/index";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
<Counter/>
</Provider>
  </React.StrictMode>
);
