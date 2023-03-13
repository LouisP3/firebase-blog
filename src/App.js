// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
