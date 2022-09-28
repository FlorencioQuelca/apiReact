import React from 'react'

const CountryCard = ({country}) => {
  return (
    <article>
        <img src={country.flags.svg} alt="" />
        <h2>{country.name.common}</h2>
          <ul>
            <li> <span>Capital:</span>{country.capital}</li>
            <li> <span>Populations:</span>{country.population}</li>
            <li> <span>Continent:</span>{country.continents[0]}</li>
            <li> <span>Area:</span>{country.area}</li>
          </ul>
    </article>
  )
}

export default CountryCard