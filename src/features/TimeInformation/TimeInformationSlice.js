import { createSlice } from '@reduxjs/toolkit'
const initialState=[
    {
        id:"1",
        changeTimeTypeData:'a',
        fromTimeData:"",
        toTimeData:"",
        fixedTimeData:"",
    },
  ]
const TimeInformationSlice = createSlice({
  name: 'TimeInformation',
  initialState,
  reducers: {
    TimeInformationAdd(state, action) {
        state.push(action.payload);
        state.splice(0,1);
        console.log(action.payload)
    
      }
  },
})
export const { TimeInformationAdd } = TimeInformationSlice.actions
// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default TimeInformationSlice.reducer