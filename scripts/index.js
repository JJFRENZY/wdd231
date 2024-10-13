// Function to dynamically set the current year
const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
};

// Function to dynamically display last modified date
const setLastModifiedDate = () => {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
};

// Array of course objects
const courses = [
    { code: 'CSE121', title: 'Introduction to Programming', credits: 3, completed: false },
    { code: 'CSE111', title: 'Data Structures and Algorithms', credits: 3, completed: false },
    { code: 'WDD230', title: 'Web Frontend Development', credits: 3, completed: true },
    // Add more course objects as needed
];

// Function to dynamically display courses
const displayCourses = (filter = null) => {
    const courseSection = document.querySelector('.course-list');
    courseSection.innerHTML = ''; // Clear previous content

    const filteredCourses = filter
        ? courses.filter(course => course.code.startsWith(filter))
        : courses;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h3>${course.code} - ${course.title}</h3>
            <p>Credits: ${course.credits}</p>
            <p>Status: ${course.completed ? 'Completed' : 'In Progress'}</p>
        `;
        courseCard.style.backgroundColor = course.completed ? '#cce5cc' : '#f4f4f4'; // Styling based on completion
        courseSection.appendChild(courseCard);
    });

    // Dynamically display total credits using reduce
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    const totalCreditsDisplay = document.createElement('p');
    totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
    courseSection.appendChild(totalCreditsDisplay);
};

// Event listeners for filter buttons
document.getElementById('all-btn').addEventListener('click', () => displayCourses());
document.getElementById('cse-btn').addEventListener('click', () => displayCourses('CSE'));
document.getElementById('wdd-btn').addEventListener('click', () => displayCourses('WDD'));

// Initial load of all courses and set dates
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModifiedDate();
    displayCourses();
});
function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits</strong>: ${course.credits}</p>
      <p><strong>Certificate</strong>: ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();
    
    closeModal.addEventListener("click", () => {
      courseDetails.close();
    });
  }
courseDiv.addEventListener('click', () => {
    displayCourseDetails(course);
    });