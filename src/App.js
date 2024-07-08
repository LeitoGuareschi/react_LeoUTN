import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; /*NO COLOCAR EXTENS JS */
// TRAEME EL COMPONENTE Header desde ruta para llegar al JS*/
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePage from './pages/Homepage';
import Ejemplo1 from './pages/Ejemplo1';
/*importame el componente HomePage del archivo HomePage*/

function App() {
  return (
    <div className="App">
      {/*<Header></Header>*/}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/ejemplo1' element={<Ejemplo1 />} />
          {/* aca van los link */}
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
