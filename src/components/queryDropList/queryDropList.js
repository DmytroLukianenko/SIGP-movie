const QueryDropList = ({ queryFilms }) => {
  const dropList = queryFilms.map(element => {
    return <option value={element.Title} key={element.imdbID}></option>
  })
  return <datalist id="films">{dropList}</datalist>
}
export default QueryDropList
