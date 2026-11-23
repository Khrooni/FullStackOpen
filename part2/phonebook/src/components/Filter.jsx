const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter shown with name: <input
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default Filter