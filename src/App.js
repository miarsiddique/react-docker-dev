import './App.css';
import Home from './containers/Homecontainer'
import Headercontainer from './containers/Headercontainer';

function App() {
  return (
    <div className="App">
        <Headercontainer/>
        <Home />
      </div>
  );
}

export default App;
