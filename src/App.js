import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [err, setErr] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    if(city === '') return;

    const consultAPI = async () => {
      const appId = '5d7305879e8ef1df27543cedf1bb072c'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
      console.log(url)
      const response = await (await fetch(url)).json();
      setResult(response);
    }

    consultAPI();
  }, [ city, country ])

  const getData = data => {
    // console.log(data)
    if(data.city === '' || data.country === ''){
      setErr(true);
      return;
    }
    setCity(data.city);
    setCountry(data.country);
    setErr(false);
  }

  

  let componente;

  if(err){
    componente = <Error message="Ambos campos son obligatorio"/>
  } else if(result.cod === "404") {
    componente = <Error message="La ciudad no existe en nuestro registro"/>
  }else {
    componente =  <Weather
                    result={result}
                  />;
  }

  return (
    <div>
      <Header
        title='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form 
                getData={getData}
              />
            </div>
            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
