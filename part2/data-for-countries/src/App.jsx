import { useState, useEffect } from 'react'

import countryService from './services/countries'
import Countries from './components/Countries'
import Country from './components/Country'
import Search from './components/Search'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    setSelectedCountry(null)
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(country)
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
      />

    <Countries
      countries={filteredCountries}
      search={search}
      handleShowCountry={handleShowCountry}
    />

    {selectedCountry &&
      <Country country={selectedCountry} />
    }
    </div>
  )
}

export default App