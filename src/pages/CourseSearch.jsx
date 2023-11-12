import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { сurrencyAPI } from '../services/сurrencyService';
import CoursesList from '../components/CoursesList';
import dayjs from 'dayjs';

const CourseSearch = () => {
  const currentDate = dayjs(new Date()).format('YYYYMMDD');

  const [date, setDate] = useState(currentDate);

  const {data, isLoading} = сurrencyAPI.useFetchCurrencySpecialDateQuery(date);

  const handleDateChange = (date) => {
    const selectedDate = dayjs(date).format('YYYYMMDD');
    setDate(selectedDate);
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h6" gutterBottom marginBottom={4}>
        Search:
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ marginBottom: '20px' }}>
          <DatePicker 
            onChange={handleDateChange}
            label="Select Date" 
            format="DD.MM.YYYY"
            disableFuture
            size="small"
          />
        </div>
      </LocalizationProvider>
      {isLoading ? 'Loading...' : (data ? (
        <CoursesList data={data} />
      ) : 'No data')}
    </Container>
  );
};

export default CourseSearch;