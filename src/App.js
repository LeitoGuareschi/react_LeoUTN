import './App.css';
import Header from './components/Header'; /*NO COLOCAR EXTENS JS */
// TRAEME EL COMPONENTE Header desde ruta para llegar al JS*/
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App"> 
    {/*<Header></Header>*/}
    <Header/>
    <Nav/>
    <Footer/>
      
    </div>
  );
}

export default App;
