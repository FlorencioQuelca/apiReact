import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CountryCard from './components/CountryCard'

function App() {
  const [count, setCount] = useState(0)
  const [countries, setCountries] = useState()
   useEffect(() => {
    const URL ='https://restcountries.com/v3.1/lang/spa'
    axios.get(URL)
     .then( res => setCountries(res.data))
     .then( err => console.log(err))
         
   }, [])
   console.log(countries);
   /**
    * nuevo componentes con esta informacion
    * bandera
    * nombre de pais
    * capital4
    * cantidad de habitantes
    * en que contiene esta 
    * area que ocupa
    */


  return (
    <div className="App">
      <h1> CONSUMIENDO UNA API</h1>
      <div className='card-container'>
       {
        countries?.map(country =>(
          <CountryCard
             key ={country.name.official}
             country={country}
          
          />
        ))
       }
      </div>
    
    </div>
  )
}

export default App
