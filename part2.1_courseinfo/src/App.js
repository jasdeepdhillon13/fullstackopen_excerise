import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'


function App({courses}) {
  const showCourses = () => courses.map(course => (
    <div key={course.id}><Course course={course}/></div>
    ))

return (
<div>
  {showCourses()}
</div>
)

}

export default App;
