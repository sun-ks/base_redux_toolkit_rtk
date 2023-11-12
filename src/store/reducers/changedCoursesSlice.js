import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  changedCourses: [],
}

export const changedCoursesSlice = createSlice({
  name: 'changedCoursesSlice',
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        changedCourses: [...state.changedCourses, action.payload],
      };
    },
    edit: (state, action) => {
      const payloadCC = action.payload.cc;
      const exchangedate = action.payload.exchangedate;
    
      return {
        ...state,
        changedCourses: state.changedCourses.map((item) => 
          item.cc === payloadCC && item.exchangedate === exchangedate
            ? { ...item, ...action.payload }
            : item
        ),
      };
    },    
  },
})

export default changedCoursesSlice.reducer

export const changedCourses = (state) => state.changedCoursesSlice.changedCourses;