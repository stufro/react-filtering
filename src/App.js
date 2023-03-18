import { useState } from 'react'
import './App.css';
import FilterButton from './FilterButton';
import Film from './Film'

const filters = ["action", "adventure", "sci-fi", "romcom", "biopic"]
const filmData = [
  { id: 1, name: "Die Hard", genre: ["action"] },
  { id: 2, name: "Doctor Who", genre: ["sci-fi"] },
  { id: 3, name: "Love Actually", genre: ["romcom"] },
  { id: 4, name: "Rocket Man", genre: ["biopic"] },
  { id: 5, name: "Jumanji: Next Level", genre: ["adventure"] },
]

function App() {
  let [films, setFilms] = useState(filmData)
  let [activeFilters, setActiveFilters] = useState([])

  const setFilter = (filter) => {
    let newFilters = activeFilters
    newFilters.push(filter)
    let newFilms = filmData.filter((film) => newFilters.some((filter) => film.genre.includes(filter)))

    setActiveFilters(newFilters)
    setFilms(newFilms)
  }

  const clearFilter = () => {
    setFilms(filmData)
    setActiveFilters([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="filters-toolbar">
          <p>Click to filter:</p>

          {filters.map((filter) => {
            return <FilterButton key={filter} filter={filter} active={activeFilters.includes(filter)} setFilter={setFilter}/>
          })}

          { activeFilters.length !== 0 ? <button className="clear-button" onClick={clearFilter}>Clear Filters</button> : null }
        </div>


        <div className="films">
          {films.map((film) => {
            return <Film key={film.id} film={film}/>
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
