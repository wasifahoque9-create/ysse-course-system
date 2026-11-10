# YSSE Course Search & Filter System

A responsive React-based Course Search & Filter application developed as part of the YSSE Week 6 assignment.

The application allows users to explore available courses, search by title or keyword, and filter courses by category and difficulty level.

## Project Overview

The YSSE Course Search & Filter System provides a simple and interactive way to discover learning opportunities. It features a modern, nature-inspired interface based on the concept of **The Learning Garden**.

Users can browse courses, combine multiple filters, and easily find courses that match their interests and skill levels.

## Features

- Display 10 different courses.
- Search courses by title or keyword.
- Case-insensitive and partial-match search.
- Filter courses by category.
- Filter courses by difficulty level.
- Apply search and multiple filters together.
- Reset all filters with one click.
- Display the total number of matching courses.
- Show a message when no courses match the search criteria.
- Responsive design for desktop, tablet, and mobile devices.
- Animated UI elements and interactive course cards.

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

## React Concepts Implemented

- **Components:** The application is divided into reusable components.
- **JSX:** Used to write UI elements inside JavaScript.
- **Props:** Used to pass course data and functions between components.
- **useState:** Used to manage search input and filter selections.
- **Event Handling:** Used to handle search input, filter changes, and reset actions.
- **Array.map():** Used to render course cards dynamically.
- **Conditional Rendering:** Used to display course results, empty states, and no-results messages.
- **Unique Keys:** Each course card uses a unique course ID as its React key.

## Project Structure

```text
ysse-course-system/
│
├── public/
│   └── images/
│       ├── ysse-logo.png
│       └── course images...
│
├── src/
│   ├── components/
│   │   ├── CourseCard.jsx
│   │   ├── CourseSection.jsx
│   │   ├── FilterSection.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── data/
│   │   └── courses.js
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Available Course Categories

- Web Development
- Programming
- Graphic Design
- Digital Marketing
- Data Science

## Difficulty Levels

- Beginner
- Intermediate
- Advanced

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/wasifahoque9-create/ysse-course-system.git
```

### 2. Navigate to the Project Folder

```bash
cd ysse-course-system
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## How to Use

1. Browse the available courses on the homepage.
2. Enter a course title or keyword in the search bar.
3. Select a category to narrow down the results.
4. Choose a difficulty level.
5. Combine search and filters to find specific courses.
6. Click **Reset Filters** to restore the complete course list.

## Learning Outcome

Through this project, I practiced building reusable React components, managing application state with `useState`, passing data through props, handling user events, rendering dynamic lists, and implementing conditional UI updates.

I also gained practical experience in creating responsive layouts and improving the user experience with CSS animations.

## GitHub Repository

[YSSE Course Search & Filter System](https://github.com/wasifahoque9-create/ysse-course-system)

## Author

**Wasifa Hoque**

Developed as part of the YSSE Week 6 React assignment.

---

*Learn · Grow · Lead*