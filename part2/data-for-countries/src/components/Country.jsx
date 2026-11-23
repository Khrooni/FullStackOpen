import Weather from './Weather'

const Country = ({ country }) => {
  const capital = country.capital?.[0]

  return (
    <div>
      <h2>{country.name.common}</h2>

      <div>Capital: {capital}</div>
      <div>Area: {country.area}</div>

      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map(language =>
          <li key={language}> {language} </li>
        )}
      </ul>

      <img
        src={country.flags.png}
        alt={country.flags.alt}
        width="200"
      />

      {capital &&
        <Weather capital={capital} />
      }
    </div>
  )
}

export default Country