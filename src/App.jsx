import { useState } from "react";
import './App.css';


function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');


  const CalcularImc = () => {
  const imc = peso / (altura * altura);
  setResultado(imc.toFixed(2));
  
  
};



return (
  <div className="App">
    <h1>Calculadora IMC</h1>
  <div>
    <label>Peso (kg):</label>
    <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)}/>
  </div>
  <div>
    <label>Altura (kg):</label>
    <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)}/>
  </div>
  <button onClick={CalcularImc}>Calcular</button>
  {resultado && <p>Seu IMC é {resultado}</p>}
  <table>
      <thead>
        <tr>
          <th>IMC</th>
          <th>Interpretação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Menos que 18.5</td>
          <td>Magreza</td>
        </tr>
        <tr>
          <td>18.5 a 24.9</td>
          <td>Normal</td>
        </tr>
        <tr>
          <td>25 to 29.9</td>
          <td>Sobrepeso</td>
        </tr>
        <tr>
          <td>30 ou mais</td>
          <td>Obesidade</td>
        </tr>
      </tbody>
    </table>

  
  
</div>

);
  



}




export default App
