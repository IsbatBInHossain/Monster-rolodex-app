import "./search-box.styles.css"

export const SearchBox = () =>{
    return <div className="search">
          <input
          type="search"
          onChange={(e) => this.setState({ searchField: e.target.value })}
          placeholder="Search monsters"
        />
    </div>
}