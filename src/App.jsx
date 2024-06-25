import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import MainModal from './components/Modals/MainModal/MainModal';

function App() {
  return (
    <BrowserRouter basename="/GP-project">
      <div className='hide-scrollbar'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/website' element={<MainModal />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
