import Listtask from './Components/Listtask'
import './App.css';
import Addtask from './Components/Addtask';
import HomePage from "./Components/Home";


function App() {
  return (
    <div className="App">
      <HomePage/>
      <Addtask />
      <Listtask />
    </div>
  );
}

export default App;
