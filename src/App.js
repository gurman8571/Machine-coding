
import './App.css';
import Pagination from './Pagination/Body'
import Search from './Debouncing/Search'
import Folder from './Filestructure/Body'
import { Provider } from 'react-redux';
import Store from './utils/Store'
function App() {
  return (
    <div className="App">
 
  <Provider store={Store}>
  <Search/>
    </Provider>
    </div>
  );
}

export default App;
