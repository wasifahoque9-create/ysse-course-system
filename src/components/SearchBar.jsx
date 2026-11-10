
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search courses by title or keyword..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        aria-label="Search courses"
      />

      {searchTerm && (
        <button
          type="button"
          className="search-clear"
          onClick={() => setSearchTerm("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;
