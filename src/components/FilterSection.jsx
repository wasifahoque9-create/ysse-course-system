
function FilterSection({
  selectedCategory,
  setSelectedCategory,
  selectedLevel,
  setSelectedLevel,
  onReset
}) {
  return (
    <div className="filter-section">
      <div className="filter-group">
        <label htmlFor="categoryFilter">
          Category
        </label>

        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
        >
          <option value="All Courses">All Courses</option>
          <option value="Web Development">Web Development</option>
          <option value="Programming">Programming</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Data Science">Data Science</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="levelFilter">
          Difficulty Level
        </label>

        <select
          id="levelFilter"
          value={selectedLevel}
          onChange={(event) =>
            setSelectedLevel(event.target.value)
          }
        >
          <option value="All Levels">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <button
        type="button"
        className="reset-button"
        onClick={onReset}
      >
        ↺ Reset Filters
      </button>
    </div>
  );
}

export default FilterSection;
