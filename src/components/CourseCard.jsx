
function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-card-image">
        <img
          src={course.image}
          alt={course.title}
          loading="lazy"
        />

        <span className="course-category">
          {course.category}
        </span>

        <span className="course-image-arrow">↗</span>
      </div>

      <div className="course-card-content">
        <div className="course-card-meta">
          <span className={`course-level level-${course.level.toLowerCase()}`}>
            {course.level}
          </span>

          <span className="course-duration">
            <span className="duration-icon">◷</span>
            {course.duration}
          </span>
        </div>

        <h3>{course.title}</h3>

        <p>{course.description}</p>

        <div className="course-card-footer">
          <a href="#course-section" className="course-view-button">
            <span>Explore Course</span>
            <span className="course-button-arrow">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
