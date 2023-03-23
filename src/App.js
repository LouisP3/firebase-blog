// import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddArticle from './pages/AddArticle/AddArticle';
import Auth from './pages/Auth/Auth';
import Homepage from './pages/Homepage/Homepage';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/addarticle' element={<AddArticle />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
