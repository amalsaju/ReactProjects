import './search-box.styles.css'

const SearchBox = ({ onChangeHandler, placeHolder, className }) => (
  <div>
    <input className={`search-box ${className}`} type='search' placeholder={placeHolder} onChange={onChangeHandler} />
  </div>
)

export default SearchBox;