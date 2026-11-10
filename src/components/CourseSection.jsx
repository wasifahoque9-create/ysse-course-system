
import { useState } from "react";
import courses from "../data/courses";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import FilterSection from "./FilterSection";

function CourseSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Courses");
  const [selectedLevel, setSelectedLevel] =
    useState("All Levels");

 
  // Smart search: prioritize course title matches
  const searchValue = searchTerm.toLowerCase().trim();

  const titleMatches = courses.filter((course) =>
    course.title.toLowerCase().includes(searchValue)
  );

  const searchPool =
    searchValue && titleMatches.length > 0
      ? titleMatches
      : courses;

  // Combined search and filtering
  const filteredCourses = searchPool.filter((course) => {
    const matchesSearch =
      !searchValue ||
      course.title.toLowerCase().includes(searchValue) ||
      course.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchValue)
      );

    const matchesCategory =
      selectedCategory === "All Courses" ||
      course.category === selectedCategory;

    const matchesLevel =
      selectedLevel === "All Levels" ||
      course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });


  // Reset all filters
  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All Courses");
    setSelectedLevel("All Levels");
  };

  return (
    <section className="course-section" id="course-section">
      <div className="course-section-heading">
        <div>
          <span className="section-eyebrow">
            EXPLORE YOUR POTENTIAL
          </span>

          <h2>Discover Your Next Learning Journey</h2>

          <p>
            Find the right course, develop new skills and take
            the next step towards your future.
          </p>
        </div>

        <div className="course-total">
          <strong>{filteredCourses.length}</strong>
          <span>Courses Found</span>
        </div>
      </div>

      <div className="course-controls">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <FilterSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          onReset={handleReset}
        />
      </div>

      {/* Conditional Rendering */}
      {courses.length === 0 ? (
        <div className="empty-state">
          <span>📚</span>
          <h3>No Courses Available</h3>
          <p>There are currently no courses to display.</p>
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="empty-state">
          <span>🔎</span>
          <h3>No Courses Found</h3>
          <p>
            No courses found. Try adjusting your search or filters.
          </p>

          <button onClick={handleReset} className="reset-button">
            ↺ Clear All Filters
          </button>
        </div>
      ) : (
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CourseSection;
