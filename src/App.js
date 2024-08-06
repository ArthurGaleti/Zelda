import './App.css';
import Home from './pages/Home/home';
import Contato from './pages/Contatos/contato';
import Comentarios from './pages/Comentarios/comentario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './pages/Games/games';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/jogos' element={<Game/>}/>
            <Route path='/contato' element={<Contato />}/>
            <Route path='/comentarios' element={<Comentarios />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
