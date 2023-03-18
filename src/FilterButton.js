function FilterButton({filter, active, setFilter}) {
  const handleClick = () => { setFilter(filter) }

  return (
    <div className="filter" data-active={active ? 'true' : 'false'} onClick={handleClick}>
      {filter}
    </div>
  )
}

export default FilterButton