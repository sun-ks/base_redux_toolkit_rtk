
import { Container, Typography} from '@mui/material';
import { сurrencyAPI } from '../services/сurrencyService';
import CoursesList from '../components/CoursesList';
import { useEffect } from 'react';


const fetchTestData = async()=>{
  const res = await fetch('https://test-url.com');
  const data = await res.json();
  console.log(data)
}

const Home = () => {
  const {data, isLoading} = сurrencyAPI.useFetchCurrencyCurrentDateQuery();

  useEffect(() => {
    fetchTestData()
  }, []);

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