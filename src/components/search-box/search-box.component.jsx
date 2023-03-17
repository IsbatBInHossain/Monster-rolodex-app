import "./search-box.styles.css"

export const SearchBox = ({placeholder, handleEvent}) =>{
    return   <input
    className="search"
    type="search"
    onChange={handleEvent}
    placeholder={placeholder}
  />
}