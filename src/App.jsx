import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import ChangedCourses from './pages/ChangedCourses';
import CourseSearch from './pages/CourseSearch';
import EditCourse from './pages/EditCourse';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const App = () => {
  return (
  <Router>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { sm: 'block' }}}>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Button sx={{ color: '#fff' }}>Home</Button>
            </NavLink>
            <NavLink to="/changed-courses" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Button sx={{ color: '#fff' }}>Changed</Button>
            </NavLink>
            <NavLink to="/courses-search" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Button sx={{ color: '#fff' }}>Search</Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/changed-courses" element={<ChangedCourses />} />
      <Route path="/courses-search" element={<CourseSearch />} />
      <Route path="/edit-course/*" element={<EditCourse />} />
    </Routes>
  </Router>
  );
};

export default App;
