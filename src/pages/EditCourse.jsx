import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { changedCoursesSlice } from "../store/reducers/changedCoursesSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { changedCourses } from "../store/reducers/changedCoursesSlice"

const EditCourse = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alreadyChangedCourses = useSelector(changedCourses);
  const params = new URLSearchParams(location.search);
  let cc = params.get('cc');
  let exchangedate = params.get('exchangedate');
  let r030 = params.get('r030');
  let rate = params.get('rate');
  let txt = params.get('txt');

  const isCourseAlreadyChanged = alreadyChangedCourses && alreadyChangedCourses
    .filter((item)=>
      item.cc === cc 
      && item.exchangedate === exchangedate).length > 0;

  if( isCourseAlreadyChanged ) {
    alreadyChangedCourses.forEach((item) => {
      if(item.cc === cc && item.exchangedate === exchangedate) {
        exchangedate = item.exchangedate;
        r030 = item.r030;
        rate = item.rate;
        txt = item.txt;
      }
    })
  }

  const { add, edit } = changedCoursesSlice.actions;

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      rate: rate,
      txt: txt
  }});

  const onSubmit= async (args) => {
    if(isCourseAlreadyChanged) {
      dispatch(edit({cc, exchangedate, r030, rate, txt, ...args}));
    } else {
      dispatch(add({cc, exchangedate, r030, rate, txt, ...args}));
    }

    navigate(`/changed-courses`);
  }

  return (
    <Container maxWidth={'sm'} sx={{ paddingTop: 4 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom marginBottom={4}>
          { isCourseAlreadyChanged ? 'Edit Course ' : 'Add Course to Changed' }
          <span style={{fontSize: 14}}> ( {cc}, {r030}, {exchangedate} )</span> 
        </Typography>

        <Stack spacing={3}>
          <Controller
            control={control}
            name="txt"
            rules={{
              required: "Name is required",
            }}
            render={({ field }) => {
              return <TextField
                  label={'Name *'}
                  {...field} 
                  error={!!errors.txt}
                  helperText={errors.txt?.message}
                />
              }
            }
          />

          <Controller
            control={control}
            name="rate"
            rules={{
              required: "Rate is required",
            }}
            render={({ field }) => {
              return <TextField 
                  type="number"
                  label={'Rate *'}
                  {...field} 
                  error={!!errors.rate}
                  helperText={errors.rate?.message}
                />
              }
            }
          />
          
          <LoadingButton type="submit" variant="contained">
            Save
          </LoadingButton>
        </Stack>
      </form>
    </Container>
  );
};

export default EditCourse;