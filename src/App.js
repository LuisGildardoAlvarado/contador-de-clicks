import './App.css';
import TDLogo from './images/TD.jpg';
import Boton from './componentes/Boton'
function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () =>{
    console.log("Reiniciar")
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo'
        src={TDLogo}
        alt='Logo'/>
      </div>
      <div className='contenedor-principal'>
        <Boton 
          texto="Clic"
          esBotonDeClic={true}
          manejarClick={manejarClic}
        />

        <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
