import { Container, Typography} from '@mui/material';
import { сurrencyAPI } from '../services/сurrencyService';
import CoursesList from '../components/CoursesList';

const Home = () => {
  const {data, isLoading} = сurrencyAPI.useFetchCurrencyCurrentDateQuery();

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h6" gutterBottom marginBottom={4}>
        Currency list for today:
      </Typography>
      {isLoading ? 'Loading...' : (data ? (
        <CoursesList data={data} />
      ) : 'No data')}
    </Container>);
  };
  
  export default Home;