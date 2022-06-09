import logo from './logo.svg';
import './App.css';
import { ComponentB } from './ComponentA/ComponentB';
import { ComponentC } from './ComponentA/ComponentC';

function App() {
  return (
    <div className="App">
      <ComponentB />
      <ComponentC />
      
    </div>
  );
}

export default App;
