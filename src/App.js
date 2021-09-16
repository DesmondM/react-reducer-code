
import './App.css';
import Modal from './Modal';
import ReducerComp from './ReducerComp';
import ReducerComponent from './ReducerComponent';
import UseStateComponent from './UseStateComponent';

function App() {
  return (
    <div className="App">
      <h1>UseReducer</h1>
     {/*  <Modal/>
      <ReducerComponent/> */}
      <UseStateComponent/>
      <ReducerComp/>
    </div>
  );
}

export default App;
