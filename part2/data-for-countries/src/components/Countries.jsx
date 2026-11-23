import Country from './Country'

const CountryList = ({ countries, search, handleShowCountry }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  }

  if (countries.length > 1) {
    return (
      <div>
        {countries.map(country =>
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleShowCountry(country)}>
              show
            </button>
          </div>
        )}
      </div>
      )
  }

  if (countries.length === 1) {
    return <Country country={countries[0]} />
  }

  if (search !== '') {
    return <p>No matching countries found</p>
  }

  return null
}

export default CountryList