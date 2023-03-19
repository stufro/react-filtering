function FilterButton({ filter, active, setFilter, clearFilter }) {
  const handleClick = () => {
    if (active) {
      clearFilter(filter)
    } else {
      setFilter(filter)
    }
  }

  return (
    <div className="filter" data-active={active ? 'true' : 'false'} onClick={handleClick}>
      {filter}
    </div>
  )
}

export default FilterButton