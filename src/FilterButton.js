function FilterButton({filter, setFilter}) {
  const handleClick = () => { setFilter(filter) }

  return (
    <div className="filter" onClick={handleClick}>
      {filter}
    </div>
  )
}

export default FilterButton