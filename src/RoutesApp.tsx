import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import ChangedCourses from './pages/ChangedCourses';
import CourseSearch from './pages/CourseSearch';
import EditCourse from './pages/EditCourse';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/changed-courses" element={<ChangedCourses />} />
      <Route path="/courses-search" element={<CourseSearch />} />
      <Route path="/edit-course/*" element={<EditCourse />} />
    </Routes>
  )
}

export default RoutesApp;