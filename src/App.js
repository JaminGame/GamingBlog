import './App.css';
import Header from './components/Header';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Info from './components/Info';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
