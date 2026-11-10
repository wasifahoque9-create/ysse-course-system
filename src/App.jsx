
import CourseSection from "./components/CourseSection";
import courses from "./data/courses";
import "./App.css";

function App() {
  const skillLevels = new Set(courses.map((course) => course.level)).size;

  return (
    <div className="app">
      {/* Navigation */}
      <header className="site-header">
        <div className="header-container">
          <a href="#home" className="brand" aria-label="YSSE Home">
            <img
              src="/images/ysse-logo.png"
              alt="YSSE Logo"
              className="brand-logo"
            />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#course-section" className="nav-link">
              Explore Courses
            </a>
            <a href="#about" className="nav-link">Our Society</a>
          </nav>

          <a href="#course-section" className="header-button">
            Find Your Course <span>↗</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="eyebrow-line"></span>
                <span>YOUR JOURNEY STARTS HERE</span>
              </div>

              <h1>
                A little growth
                <br />
                <span className="hero-italic">goes a long way.</span>
              </h1>

              <p className="hero-description">
                Discover skills that open new doors. Explore thoughtfully
                selected learning paths and give your ambitions room to grow.
              </p>

              <div className="hero-actions">
                <a href="#course-section" className="primary-button">
                  Explore Learning <span>↗</span>
                </a>
                <a href="#about" className="text-button">
                  Discover our society <span>→</span>
                </a>
              </div>

              <div className="hero-bottom-note">
                <span className="note-star">✳</span>
                <span>
                  LEARN AT YOUR OWN PACE. GROW AT YOUR OWN RHYTHM.
                </span>
              </div>
            </div>

            {/* Decorative Learning Garden */}
            <div className="hero-visual" aria-hidden="true">
              <div className="garden-label garden-label-top">
                <span className="garden-label-icon">✳</span>
                <div>
                  <strong>Keep Growing</strong>
                  <small>Every step matters</small>
                </div>
              </div>

              <div className="garden-art">
                <div className="garden-sun"></div>
                <div className="garden-ring ring-one"></div>
                <div className="garden-ring ring-two"></div>

                <div className="garden-center">
                  <span className="garden-center-star">✳</span>
                  <span className="garden-center-title">Grow</span>
                  <span className="garden-center-caption">
                    LEARN · CREATE · LEAD
                  </span>
                </div>

                <div className="garden-leaf leaf-one"></div>
                <div className="garden-leaf leaf-two"></div>
                <div className="garden-leaf leaf-three"></div>
                <div className="garden-leaf leaf-four"></div>

                <span className="garden-spark spark-one">✦</span>
                <span className="garden-spark spark-two">✳</span>
                <span className="garden-spark spark-three">✧</span>
              </div>

              <div className="garden-label garden-label-bottom">
                <span className="garden-label-icon">↗</span>
                <div>
                  <strong>Find Your Path</strong>
                  <small>Make it meaningful</small>
                </div>
              </div>

              <div className="visual-side-note">
                GROWTH IS A JOURNEY
              </div>
            </div>
          </div>

          <div className="hero-bottom-strip">
            <span>CURIOUS MINDS</span>
            <span className="strip-star">✳</span>
            <span>CREATIVE THINKERS</span>
            <span className="strip-star">✳</span>
            <span>FUTURE LEADERS</span>
            <span className="strip-star">✳</span>
            <span>YOUR NEXT CHAPTER</span>
          </div>
        </section>

        {/* Introduction & Learning Highlights */}
        <section className="learning-intro">
          <div className="learning-intro-left">
            <span className="learning-intro-tag">
              A SPACE TO GROW
            </span>

            <h2>
              Every skill begins
              <br />
              with a <em>first step.</em>
            </h2>

            <p>
              Whether you're exploring something new or building on
              what you already know, there's a learning opportunity
              waiting for you. Take your first step towards something
              meaningful.
            </p>

            <a href="#course-section" className="learning-intro-link">
              Find your learning path <span>↗</span>
            </a>
          </div>

          {/* Animated Learning Highlights */}
          <div className="learning-highlights">
            <div className="highlights-orbit orbit-a"></div>
            <div className="highlights-orbit orbit-b"></div>

            <div className="highlights-top">
              <div>
                <span className="highlights-label">
                  YOUR LEARNING SPACE
                </span>
                <h3>A world of possibilities.</h3>
              </div>
              <span className="highlights-sparkle">✳</span>
            </div>

            <div className="highlights-stats">
              <div className="highlight-stat stat-one">
                <span className="stat-icon">✧</span>
                <strong>{courses.length}</strong>
                <span>Learning paths</span>
              </div>

              <div className="highlight-stat stat-two">
                <span className="stat-icon">◈</span>
                <strong>{skillLevels}</strong>
                <span>Skill levels</span>
              </div>
            </div>

            <div className="highlights-quote">
              <div className="quote-top">
                <span className="quote-mark">“</span>
                <span className="quote-star">✦</span>
              </div>
              <p>Keep growing, one skill at a time.</p>
              <span className="quote-caption">
                EXPLORE · LEARN · CREATE
              </span>
            </div>

            <span className="highlights-floating floating-one">✦</span>
            <span className="highlights-floating floating-two">✧</span>
          </div>
        </section>

        {/* Course Section */}
        <CourseSection />

        {/* Discover Our Society */}
        <section className="about-section" id="about">
          <div className="about-inner">
            <h2>
              A Community That
              <br />
              <em>Grows Together.</em>
            </h2>

            <p>
              Discover the people, purpose and passion that make
              YSSE a community of changemakers. Together, we nurture
              ideas, empower young minds and create possibilities
              for a better tomorrow.
            </p>

            <a
              href="https://ysseglobal.org/"
              target="_blank"
              rel="noreferrer"
              className="about-button"
            >
              Discover YSSE <span>↗</span>
            </a>
          </div>

          <div className="about-decoration" aria-hidden="true">
            <span className="about-flower">✿</span>
            <span className="about-orbit"></span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <img
              src="/images/ysse-logo.png"
              alt="YSSE Logo"
            />
            <p>
              A space to learn, grow and
              create your own possibilities.
            </p>
          </div>

          <div className="footer-navigation">
            <span className="footer-heading">EXPLORE</span>
            <a href="#home">Home</a>
            <a href="#course-section">Courses</a>
            <a href="#about">Our Society</a>
          </div>

          <div className="footer-message">
            <span className="footer-heading">A LITTLE REMINDER</span>
            <h3>
              Keep growing.
              <br />
              Keep becoming.
            </h3>
            <a href="#home">Back to the beginning ↑</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} YSSE. All rights reserved.
          </span>
          <span>LEARN · GROW · LEAD</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
