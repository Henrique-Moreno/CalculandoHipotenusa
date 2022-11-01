import { useCallback } from 'react';
import './App.css';
import Banner from './Banner';
import Calculadora from './Calculadora';

function App() {

  const calculorHipotenusa = useCallback((ladoA, ladoB) => {
    const quadradoA = Math.pow(ladoA, 2)
    const quadradoB = Math.pow(ladoB, 2)
    return Math.sqrt(quadradoA + quadradoB)
  }, [])

  return (
    <div className="App">
      <Banner />
      <Calculadora calculorHipotenusa={calculorHipotenusa}/>
   
    </div>
  );
}

export default App;

