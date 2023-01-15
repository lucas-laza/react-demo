// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import Names from './components/Names';
import Nav from './components/Nav';

const NAMES_PATH = '/names'

function App() {
  return (
    <div className="App">
        <Nav/>
      <Routes>
        <Route path="/" element={<Counter/>} />
        <Route path={NAMES_PATH} element={<Names/>} />
      </Routes>
    </div>
  );
}

export default App;
