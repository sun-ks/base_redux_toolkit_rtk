import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux"
import { changedCourses } from "../store/reducers/changedCoursesSlice"
import CoursesList from '../components/CoursesList';
import { Link } from 'react-router-dom';

const ChangedCourses = () => {
  const alreadyChangedCourses = useSelector(changedCourses);
  const isCourseAlreadyChanged = alreadyChangedCourses.length > 0;

    return (
      <Container sx={{ paddingTop: 4 }}>
        <Typography variant="h6" gutterBottom marginBottom={4}>
          {isCourseAlreadyChanged ? 'Changed Courses:' : (<>
            No Data Available. You need to{' '}
            <Link to="/courses-search">add Course(s)</Link>.
          </>)}
        </Typography>
        {(alreadyChangedCourses.length > 0 ? (
          <CoursesList data={alreadyChangedCourses} />
        ) : '')}
      </Container>
    );
  };
  
  export default ChangedCourses;