function Film({film}) {
  return(
    <div className="film">
      <p>{film.name}</p>

      <div className="tag">
        <small>{film.genre}</small>
      </div>
    </div>
  )
}

export default Film;